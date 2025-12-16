import React from 'react'
import Header from './components/Header'
import Tree from './components/Tree'
import ProductCard from './components/ProductCard'
import Footer from './components/Footer'

const products = [
  { id: 1, name: 'Cozy Sweater', price: '$45' },
  { id: 2, name: 'Warm Socks', price: '$12' },
  { id: 3, name: 'Holiday Mug', price: '$15' },
  { id: 4, name: 'Gift Wrap Set', price: '$8' }
]

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-12">
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-xmasgreen">Christmas Sale</h1>
          <p className="mt-3 text-lg text-gray-700">Up to 50% off holiday gifts</p>
          <div className="mt-6">
            <button className="px-6 py-3 bg-xmasred text-white rounded-md font-semibold hover:bg-red-700 transition btn-focus">
              Shop Now
            </button>
          </div>
        </section>

        <section className="mt-12 flex flex-col items-center md:flex-row md:items-start md:justify-between gap-8">
          <div className="flex-1 flex justify-center">
            <Tree />
          </div>

          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4">Featured Gifts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {products.map((p) => (
                <ProductCard key={p.id} name={p.name} price={p.price} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
