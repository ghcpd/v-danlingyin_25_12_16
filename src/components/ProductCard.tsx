import React from 'react'

type Props = {
  name: string
  price: string
}

export default function ProductCard({ name, price }: Props) {
  return (
    <div className="border rounded-lg p-4 flex items-center gap-4 hover:shadow-lg transition">
      <div className="w-20 h-20 bg-gradient-to-br from-gray-200 to-gray-300 rounded-md flex items-center justify-center text-gray-500">Image</div>
      <div className="flex-1">
        <div className="font-semibold">{name}</div>
        <div className="text-sm text-gray-500">{price}</div>
      </div>
      <div>
        <button className="px-3 py-2 bg-xmasgreen text-white rounded hover:bg-green-700 transition btn-focus">Add to Cart</button>
      </div>
    </div>
  )
}
