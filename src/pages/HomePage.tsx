import Header from '../components/Header'
import Hero from '../components/Hero'
import ChristmasTree from '../components/ChristmasTree'
import ProductCard from '../components/ProductCard'
import Footer from '../components/Footer'

function HomePage() {
  const products = [
    { name: 'Gift Box Set', price: '$49.99', image: '🎁' },
    { name: 'Christmas Ornaments', price: '$24.99', image: '🎄' },
    { name: 'Holiday Sweater', price: '$39.99', image: '🧣' },
    { name: 'Festive Mug', price: '$14.99', image: '☕' },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <ChristmasTree />
      
      <section className="py-12 bg-gray-50 flex-grow">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-christmas-green">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                name={product.name}
                price={product.price}
                image={product.image}
              />
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}

export default HomePage
