import React from 'react'

interface Product {
  id: number
  name: string
  price: string
  discount: string
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const handleAddToCart = () => {
    alert(`${product.name} added to cart!`)
  }

  return (
    <div className="bg-white border-2 border-christmas-green rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition transform hover:scale-105">
      {/* Image Placeholder */}
      <div className="bg-gradient-to-br from-christmas-gold to-christmas-red h-48 flex items-center justify-center">
        <div className="text-6xl">🎁</div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-xl font-bold text-christmas-green mb-2">{product.name}</h3>
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-christmas-red">{product.price}</span>
          <span className="bg-christmas-red text-white px-2 py-1 rounded text-sm font-bold">{product.discount}</span>
        </div>
        <button
          onClick={handleAddToCart}
          className="w-full bg-christmas-green text-white font-bold py-2 rounded hover:bg-green-700 transition active:scale-95"
        >
          ➕ Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard
