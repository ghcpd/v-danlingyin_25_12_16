import React from 'react'
import Tree from '../components/Tree'
import ProductCard from '../components/ProductCard'

export default function Home() {
  const products = [
    { name: 'Holiday Candle', price: '$12.00' },
    { name: 'Cozy Scarf', price: '$24.00' },
    { name: 'Mug — Merry', price: '$9.50' },
    { name: 'Gift Box Set', price: '$39.00' }
  ]

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      {/* Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="order-2 lg:order-1">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">Christmas Sale</h1>
          <p className="mt-4 text-lg text-gray-700">Up to 50% off holiday gifts</p>

          <div className="mt-6 flex items-center gap-4">
            <a href="#deals" className="bg-xmasRed text-white px-5 py-3 rounded-md font-medium hover:shadow-lg transition">Shop Now</a>
            <a href="#gifts" className="text-sm text-gray-600 hover:text-xmasGreen transition">Browse Gifts</a>
          </div>

          <p className="mt-6 text-sm text-gray-500">Free shipping on orders over $50 • Limited time only</p>
        </div>

        <div className="order-1 lg:order-2">
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <Tree />
          </div>
        </div>
      </div>

      {/* Products */}
      <div id="deals" className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">Featured Gifts</h2>
        <p className="mt-2 text-sm text-gray-600">Hand-picked holiday favorites — perfect for everyone on your list.</p>

        <div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => (
            <ProductCard key={i} name={p.name} price={p.price} />
          ))}
        </div>
      </div>

      {/* small CTA */}
      <div className="mt-12 bg-rose-50 border border-rose-100 rounded-lg p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <div className="text-lg font-semibold">Still looking for ideas?</div>
          <div className="text-sm text-gray-600">Explore curated bundles and gift guides.</div>
        </div>
        <div>
          <a href="#gifts" className="bg-xmasGreen text-white px-4 py-2 rounded-md hover:bg-green-600 transition">Browse Bundles</a>
        </div>
      </div>
    </section>
  )
}
