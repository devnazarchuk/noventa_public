'use client'
import 'leaflet/dist/leaflet.css'

import L from 'leaflet'
import { useEffect, useState } from 'react'
import { FaCar, FaClock, FaDirections, FaPhone, FaStar } from 'react-icons/fa'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'

interface StoreLocation {
  id: number
  name: string
  address: string
  coordinates: { lat: number; lng: number }
  description?: string
  phone?: string
  hours?: string
  rating?: number
  features?: string[]
}

// Custom marker icon with category-based styling
const createCustomIcon = (features: string[] = [], isActive: boolean = false) => {

  let color = '#f97316' // Default orange
  if (features.includes('Heiße Theke')) color = '#dc2626' // Red
  if (features.includes('Frühstück')) color = '#f59e0b' // Amber
  if (features.includes('Mittagstisch')) color = '#10b981' // Green
  if (features.includes('Pizza & Pasta')) color = '#8b5cf6' // Purple
  if (features.includes('Eis')) color = '#06b6d4' // Cyan
  if (features.includes('Recup')) color = '#059669' // Emerald

  return new L.DivIcon({
    html: `
      <div class="custom-marker ${isActive ? 'active' : ''}" style="
        width: 32px;
        height: 32px;
        background: ${color};
        border: 3px solid white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        transition: all 0.3s ease;
        ${isActive ? 'transform: scale(1.2);' : ''}
      ">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      </div>
    `,
    className: 'custom-marker-container',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  })
}

// Custom popup component
function CustomPopup({ store }: { store: StoreLocation }) {
  return (
    <div className="store-popup">
      <div className="popup-header">
        <div className="mb-2 flex items-center gap-2">
          <h3 className="text-lg font-bold text-neutral-900">{store.name}</h3>
          <div className="flex items-center gap-1">
            <FaStar className="h-3 w-3 text-yellow-400" />
            <span className="text-sm text-neutral-600">{(store.rating || 4.8).toFixed(2)}</span>
          </div>
        </div>
      </div>

      <div className="popup-content">
        <p className="mb-3 text-sm text-neutral-600">{store.address}</p>

        {store.description && <p className="mb-3 text-xs text-neutral-500">{store.description}</p>}

        <div className="mb-3 flex items-center gap-4 text-xs text-neutral-500">
          <div className="flex items-center gap-1">
            <FaClock className="h-3 w-3" />
            <span>{store.hours || 'Mo-Fr 6:00-19:00'}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaCar className="h-3 w-3" />
            <span>Parking</span>
          </div>
        </div>

        {store.features && store.features.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-1">
            {store.features.slice(0, 3).map((feature, idx) => (
              <span
                key={idx}
                className="rounded-full bg-orange-100 px-2 py-1 text-xs font-medium text-orange-700"
              >
                {feature}
              </span>
            ))}
          </div>
        )}

        <div className="flex gap-2">
          {store.phone && (
            <a
              href={`tel:${store.phone}`}
              className="flex items-center gap-1 rounded-lg bg-orange-500 px-3 py-2 text-xs font-medium text-white transition-colors hover:bg-orange-600"
            >
              <FaPhone className="h-3 w-3" />
              Call
            </a>
          )}

          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${store.coordinates.lat},${store.coordinates.lng}`}
            target="_blank"
            rel="noopener"
            className="flex items-center gap-1 rounded-lg bg-blue-500 px-3 py-2 text-xs font-medium text-white transition-colors hover:bg-blue-600"
          >
            <FaDirections className="h-3 w-3" />
            Route
          </a>
        </div>
      </div>
    </div>
  )
}

function MapAutoFit({
  locations,
  userLocation,
}: {
  locations: StoreLocation[]
  userLocation?: [number, number] | null
}) {
  const map = useMap()

  useEffect(() => {
    if (locations.length > 0) {
      const bounds = L.latLngBounds(
        locations.map((loc: StoreLocation) => [loc.coordinates.lat, loc.coordinates.lng]),
      )
      map.fitBounds(bounds, { padding: [50, 50] })
    } else if (userLocation) {
      map.setView(userLocation, 12)
    }
  }, [locations, map, userLocation])

  return null
}

// Component to handle marker interactions
function InteractiveMarkers({
  locations,
  onMarkerClick,
}: {
  locations: StoreLocation[]
  onMarkerClick?: (store: StoreLocation) => void
}) {
  const [activeMarker, setActiveMarker] = useState<number | null>(null)

  return (
    <>
      {locations.map((store) => (
        <Marker
          key={store.id}
          position={[store.coordinates.lat, store.coordinates.lng] as [number, number]}
          icon={createCustomIcon(store.features, activeMarker === store.id)}
          eventHandlers={{
            click: () => {
              setActiveMarker(store.id)
              onMarkerClick?.(store)
            },
            add: (e: L.LeafletEvent) => {
              const marker = e.target as { _icon: HTMLElement }
              marker._icon.classList.add('animate-bounce')
              setTimeout(() => marker._icon.classList.remove('animate-bounce'), 1000)
            },
          }}
        >
          <Popup className="custom-popup" closeButton={false} maxWidth={300} minWidth={250}>
            <CustomPopup store={store} />
          </Popup>
        </Marker>
      ))}
    </>
  )
}

export default function MapClient({
  storeLocations,
  userLocation,
}: {
  storeLocations: StoreLocation[]
  userLocation?: [number, number] | null
}) {
  const [isMounted, setIsMounted] = useState(false)


  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div className="flex h-full w-full items-center justify-center rounded-2xl bg-gray-100 dark:bg-gray-800">
        <div className="text-center">
          <div className="mx-auto mb-2 h-8 w-8 animate-spin rounded-full border-b-2 border-orange-500"></div>
          <p className="text-sm text-gray-600 dark:text-gray-400">Loading map...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative h-full w-full">
      {}
      <div className="absolute top-4 left-4 z-[1000] flex flex-col gap-2">
        <div className="rounded-lg bg-white p-2 shadow-lg">
          <div className="mb-1 text-xs font-medium text-neutral-700">Stores</div>
          <div className="text-lg font-bold text-orange-600">{storeLocations.length}</div>
        </div>
      </div>

      {}
      {}

      <MapContainer
        className="z-0 h-full w-full"
        style={{ height: '100%', width: '100%', borderRadius: '16px' }}
        center={userLocation || [50.5, 9.5]}
        zoom={userLocation ? 12 : 10}
        scrollWheelZoom={true}
        zoomControl={false}
        aria-label="Noventa Stores Map"
      >
        {}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MapAutoFit locations={storeLocations} userLocation={userLocation} />

        <InteractiveMarkers
          locations={storeLocations}
        
        />
      </MapContainer>

      <style jsx global>{`
        .leaflet-popup-content-wrapper {
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }

        .leaflet-popup-content {
          margin: 0;
          padding: 0;
        }

        .store-popup {
          padding: 16px;
          min-width: 250px;
        }

        .popup-header {
          border-bottom: 1px solid #e5e7eb;
          padding-bottom: 8px;
          margin-bottom: 12px;
        }

        .popup-content {
          font-family: inherit;
        }

        .custom-marker-container {
          background: transparent;
          border: none;
        }

        .custom-marker {
          transition: all 0.3s ease;
        }

        .custom-marker:hover {
          transform: scale(1.1);
        }

        .custom-marker.active {
          transform: scale(1.2);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
        }

        .animate-bounce {
          animation: bounce 1s ease-in-out;
        }

        @keyframes bounce {
          0%,
          20%,
          50%,
          80%,
          100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </div>
  )
}
