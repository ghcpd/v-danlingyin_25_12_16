import React from 'react'
import ProductCard from './ProductCard'

interface Product {
  id: number
  name: string
  price: string
  discount: string
}

const ProductSection: React.FC = () => {
  const products: Product[] = [
    { id: 1, name: 'Festive Ornament Set', price: '$24.99', discount: '50% OFF' },
    { id: 2, name: 'LED String Lights', price: '$34.99', discount: '40% OFF' },
    { id: 3, name: 'Christmas Sweater', price: '$39.99', discount: '30% OFF' },
    { id: 4, name: 'Holiday Gift Box', price: '$29.99', discount: '45% OFF' },
  ]

  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-christmas-green mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductSection
