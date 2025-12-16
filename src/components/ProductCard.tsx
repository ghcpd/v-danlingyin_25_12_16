import React from 'react'

type Props = {
  name: string
  price: string
}

export default function ProductCard({ name, price }: Props) {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition flex flex-col">
      <div className="h-40 mb-4 product-placeholder flex items-center justify-center text-xs text-gray-500">Image</div>
      <div className="flex-grow">
        <h3 className="font-semibold text-gray-800">{name}</h3>
        <p className="mt-2 text-xmasGreen font-bold">{price}</p>
      </div>
      <div className="mt-4">
        <button className="w-full bg-xmasRed text-white py-2 rounded-md hover:bg-red-600 transition">Add to Cart</button>
      </div>
    </div>
  )
}
