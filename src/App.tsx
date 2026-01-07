import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ProductCard from './components/ProductCard'
import Footer from './components/Footer'

const products = [
  { id: 1, name: 'Cozy Sweater', price: '$45' },
  { id: 2, name: 'Santa Mug', price: '$12' },
  { id: 3, name: 'LED Lights', price: '$18' },
  { id: 4, name: 'Gift Box', price: '$25' }
]

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6">
        <Hero />

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-xmasGreen mb-4">Featured Gifts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <ProductCard key={p.id} name={p.name} price={p.price} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
