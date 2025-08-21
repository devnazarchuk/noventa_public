import { NextResponse } from 'next/server'

import { allProducts } from '@/app/data/products'
import connectDB from '@/lib/db/mongodb'
import Product from '@/lib/models/Product'
import Review from '@/lib/models/Review'
import User from '@/lib/models/User'

function randInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min }
function sample(arr) { return arr[randInt(0, arr.length - 1)] }
function weightedRating() {

  const r = Math.random()
  if (r < 0.45) return 5
  if (r < 0.75) return 4
  if (r < 0.90) return 3
  if (r < 0.97) return 2
  return 1
}

const names = ['Anna M.', 'Max P.', 'Lena K.', 'Jonas R.', 'Marta S.', 'Felix T.', 'Sara B.', 'Paul H.', 'Nina W.', 'Tom G.']
const comments = {
  5: ['Absolute Spitze! Frisch, perfekt im Geschmack.', 'Ein Traum – jederzeit wieder!', 'Handwerksqualität merkt man sofort.'],
  4: ['Sehr gut – kleine Verbesserung möglich.', 'Lecker und frisch, Empfehlung!', 'Gute Qualität, schmeckt!'],
  3: ['Solide, aber nichts Besonderes.', 'Okay, könnte saftiger sein.', 'In Ordnung, Preis passt.'],
  2: ['Eher enttäuschend, zu trocken.', 'Nicht mein Geschmack, etwas fad.', 'Hatte mehr erwartet.'],
  1: ['Leider gar nicht meins.', 'Zu trocken und wenig Aroma.', 'Würde ich nicht nochmal kaufen.']
}

export async function POST() {
  try {
    await connectDB()

  
    let users = await User.find({}).limit(5)
    if (users.length === 0) {
      users = await User.insertMany(names.slice(0, 5).map((n, i) => ({ clerkId: `seed_${i}`, displayName: n })))
    }

  
    const pickProducts = allProducts.slice(0, 30) // take first 30 for variety
    const dbProducts = []
    for (const p of pickProducts) {
      let doc = await Product.findOne({ name: p.name, category: p.category })
      if (!doc) {
        doc = await Product.create({
          name: p.name,
          description: p.description || p.name,
          category: p.category,
          price: p.price ?? 0,
          imageUrl: p.imageUrl,
          tags: p.tags || [],
          isActive: true,
        })
      }
      dbProducts.push(doc)
    }

  
    await Review.deleteMany({})

  
    const docs = []
    for (let i = 0; i < 20; i++) {
      const user = sample(users)
      const product = sample(dbProducts)
      const rating = weightedRating()
      const verified = Math.random() < 0.5
      const photo = Math.random() < 0.4
      const createdAt = new Date(Date.now() - randInt(0, 60) * 24 * 60 * 60 * 1000)
      const titlePool = {
        5: ['Fantastisch', 'Top Qualität', 'Überragend'],
        4: ['Sehr gut', 'Lecker', 'Empfehlenswert'],
        3: ['Ganz ok', 'Solide', 'In Ordnung'],
        2: ['Verbesserungswürdig', 'Enttäuschend', 'Zäh'],
        1: ['Schwach', 'Nicht gut', 'Nie wieder']
      }
      const title = `${sample(titlePool[rating])} – ${product.name}`
      const content = sample(comments[rating])

      docs.push({
        userId: user._id,
        productId: product._id,
        rating,
        title,
        content,
        images: photo ? [{ imageUrl: product.imageUrl, altText: product.name, order: 0 }] : [],
        isVerified: verified,
        createdAt,
      })
    }

    await Review.insertMany(docs)

    return NextResponse.json({ ok: true, created: docs.length })
  } catch (error) {
    console.error('Seed reviews error:', error)
    return NextResponse.json({ error: 'Failed to seed reviews' }, { status: 500 })
  }
}

export async function DELETE() {
  try {
    await connectDB()
    const res = await Review.deleteMany({})
    return NextResponse.json({ deleted: res.deletedCount })
  } catch {
    return NextResponse.json({ error: 'Failed' }, { status: 500 })
  }
} 