interface ProductCardProps {
  name: string
  price: string
  image: string
}

function ProductCard({ name, price, image }: ProductCardProps) {
  return (
    <div className="bg-white border-2 border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="bg-gray-100 h-48 flex items-center justify-center">
        <div className="text-6xl">{image}</div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{name}</h3>
        <p className="text-2xl font-bold text-christmas-red mb-4">{price}</p>
        <button className="w-full bg-christmas-green hover:bg-christmas-lightgreen text-white font-medium py-2 px-4 rounded transition-colors duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard
