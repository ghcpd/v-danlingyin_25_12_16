import React from 'react';

export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <div className="bg-white shadow rounded overflow-hidden hover:shadow-lg transition">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <img src={product.image} alt={product.name} className="object-cover h-full w-full" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="mt-1 text-gray-600">{product.price}</p>
        <button className="mt-3 w-full px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
