import React from 'react';
import ProductCard, { Product } from './ProductCard';

const products: Product[] = [
  {
    id: 1,
    name: 'Red Sweater',
    price: '$29.99',
    image: 'https://via.placeholder.com/300x200?text=Red+Sweater',
  },
  {
    id: 2,
    name: 'Santa Hat',
    price: '$19.99',
    image: 'https://via.placeholder.com/300x200?text=Santa+Hat',
  },
  {
    id: 3,
    name: 'Winter Boots',
    price: '$59.99',
    image: 'https://via.placeholder.com/300x200?text=Winter+Boots',
  },
  {
    id: 4,
    name: 'Christmas Lights',
    price: '$14.99',
    image: 'https://via.placeholder.com/300x200?text=Christmas+Lights',
  },
];

export default function ProductList() {
  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-900 mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
