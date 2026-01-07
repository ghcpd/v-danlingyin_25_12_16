function Hero() {
  return (
    <section className="bg-gradient-to-b from-christmas-green to-christmas-lightgreen text-white py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-float">
          Christmas Sale
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-100">
          Up to 50% off holiday gifts
        </p>
        <button className="bg-christmas-red hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
          Shop Now
        </button>
      </div>
    </section>
  )
}

export default Hero
