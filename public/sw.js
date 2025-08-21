const STATIC_CACHE = 'noventa-static-v1'
const DYNAMIC_CACHE = 'noventa-dynamic-v1'

// Assets to cache immediately - only include assets that actually exist
const STATIC_ASSETS = ['/', '/favicon.ico', '/apple-icon.png', '/manifest.json']

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
    
      return Promise.allSettled(
        STATIC_ASSETS.map((asset) =>
          cache.add(asset).catch((error) => {
            console.warn(`Failed to cache ${asset}:`, error)
            return null
          }),
        ),
      )
    }),
  )
  self.skipWaiting()
})

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => {
            return cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE
          })
          .map((cacheName) => {
            return caches.delete(cacheName)
          }),
      )
    }),
  )
  self.clients.claim()
})

// Fetch event - serve from cache or network
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)


  if (request.method !== 'GET') {
    return
  }


  if (url.pathname.startsWith('/_next/') || url.pathname.startsWith('/api/')) {
  
    event.respondWith(networkFirst(request))
  } else if (url.pathname.startsWith('/images/') || url.pathname.startsWith('/icons/')) {
  
    event.respondWith(cacheFirst(request))
  } else {
  
    event.respondWith(networkFirst(request))
  }
})

// Network first strategy
async function networkFirst(request) {
  try {
    const networkResponse = await fetch(request)
    const cache = await caches.open(DYNAMIC_CACHE)
    cache.put(request, networkResponse.clone())
    return networkResponse
  } catch (error) {
    const cachedResponse = await caches.match(request)
    if (cachedResponse) {
      return cachedResponse
    }
    throw error
  }
}

// Cache first strategy
async function cacheFirst(request) {
  const cachedResponse = await caches.match(request)
  if (cachedResponse) {
    return cachedResponse
  }

  try {
    const networkResponse = await fetch(request)
    const cache = await caches.open(DYNAMIC_CACHE)
    cache.put(request, networkResponse.clone())
    return networkResponse
  } catch (error) {
  
    if (request.destination === 'image') {
      return new Response(
        '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><rect width="200" height="200" fill="#f3f4f6"/><text x="100" y="100" text-anchor="middle" fill="#9ca3af" font-family="Arial" font-size="14">Image not available</text></svg>',
        {
          headers: { 'Content-Type': 'image/svg+xml' },
        },
      )
    }
    throw error
  }
}

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync())
  }
})

async function doBackgroundSync() {

  console.log('Background sync triggered')
}

// Push notifications
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'New update available!',
    icon: '/icons/logo.png',
    badge: '/icons/logo.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1,
    },
    actions: [
      {
        action: 'explore',
        title: 'View',
        icon: '/svg-icons/Unser-Plus-Rabatte-auf-viele-Marken-Baeckerei-Noventa.svg',
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/svg-icons/Unser-Plus-Rabatte-auf-viele-Marken-Baeckerei-Noventa.svg',
      },
    ],
  }

  event.waitUntil(self.registration.showNotification('Noventa Bakery', options))
})
