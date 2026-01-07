import React from 'react'

type Props = {
  name: string
  price: string
}

const ProductCard: React.FC<Props> = ({ name, price }) => {
  return (
    <div className="border rounded-lg p-4 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
      <div className="w-full h-40 mb-4 flex items-center justify-center product-placeholder rounded-md">
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#fff" opacity="0.6" />
        </svg>
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-gray-800">{name}</h3>
        <p className="text-gray-600 mt-1">{price}</p>
      </div>
      <div className="mt-4 w-full">
        <button className="w-full bg-xmasGreen text-white py-2 rounded hover:bg-green-700 transition-colors">Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductCard
