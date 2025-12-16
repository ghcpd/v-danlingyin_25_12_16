import React from 'react'

export default function Header() {
  return (
    <header className="border-b border-rose-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-2xl font-extrabold text-xmasGreen">XMAS SHOP</div>
          <nav className="hidden sm:flex gap-6 text-sm text-gray-700">
            <a className="hover:text-xmasGreen transition" href="#">Home</a>
            <a className="hover:text-xmasGreen transition" href="#deals">Deals</a>
            <a className="hover:text-xmasGreen transition" href="#gifts">Gifts</a>
          </nav>
        </div>
        <div>
          <a href="#deals" className="hidden sm:inline-block bg-xmasRed text-white px-4 py-2 rounded-md text-sm hover:bg-red-600 transition">Shop Now</a>
          <button className="sm:hidden p-2 rounded-md text-gray-600 hover:bg-rose-50">☰</button>
        </div>
      </div>
    </header>
  )
}
