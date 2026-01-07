import React from 'react';

export default function Hero() {
  return (
    <section className="py-12 md:py-24 bg-green-50 text-center relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-2xl space-y-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-green-900">Christmas Sale</h1>
        <p className="text-xl md:text-2xl text-green-700">Up to 50% off holiday gifts</p>
        <a
          href="#"
          className="inline-block px-8 py-3 bg-red-600 text-white font-semibold rounded shadow hover:bg-red-700 transition"
        >
          Shop Now
        </a>
      </div>

      {/* Christmas tree animation */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-48 h-64 animate-float">
          {/* tree layers */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[40px] border-r-[40px] border-b-[60px] border-b-green-700"></div>
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[60px] border-r-[60px] border-b-[80px] border-b-green-600"></div>
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[80px] border-r-[80px] border-b-[100px] border-b-green-500"></div>
          {/* trunk */}
          <div className="absolute top-36 left-1/2 transform -translate-x-1/2 w-12 h-6 bg-gray-700"></div>

          {/* lights */}
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="absolute rounded-full w-3 h-3 bg-red-400 animate-blink" style={{ animationDelay: `${i * 0.15}s`}}
              style={{
                top: `${20 + Math.floor(Math.random() * 60)}%`,
                left: `${45 + Math.random() * 10}%`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
