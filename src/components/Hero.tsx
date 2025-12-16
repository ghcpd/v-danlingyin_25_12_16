import React from 'react'

const Hero: React.FC = () => {
  const handleShopNow = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="bg-gradient-to-r from-christmas-green to-christmas-red py-16 text-white text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Christmas Sale</h1>
        <p className="text-lg md:text-2xl mb-8 text-gray-100">Up to 50% off holiday gifts</p>
        <button
          onClick={handleShopNow}
          className="bg-christmas-gold text-christmas-green font-bold px-8 py-3 rounded-lg hover:bg-yellow-300 transition transform hover:scale-105 active:scale-95"
        >
          🛍️ Shop Now
        </button>
      </div>
    </section>
  )
}

export default Hero
