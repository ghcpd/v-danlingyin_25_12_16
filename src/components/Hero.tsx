import React from 'react'
import Tree from './Tree'

const Hero: React.FC = () => {
  return (
    <section className="mt-10 text-center">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div className="flex-1">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-xmasGreen">Christmas Sale</h1>
          <p className="mt-3 text-lg text-gray-600">Up to 50% off holiday gifts</p>

          <div className="mt-6">
            <a
              className="inline-block bg-xmasRed text-white font-semibold px-6 py-3 rounded shadow hover:scale-105 transition-transform"
              href="#"
            >
              Shop Now
            </a>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <Tree />
        </div>
      </div>
    </section>
  )
}

export default Hero
