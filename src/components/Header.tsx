import React from 'react'

export default function Header() {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-extrabold text-xmasgreen">XMAS SHOP</div>
        <nav className="space-x-6 text-gray-700 hidden sm:block">
          <a href="#" className="hover:text-xmasgreen">Home</a>
          <a href="#" className="hover:text-xmasgreen">Deals</a>
          <a href="#" className="hover:text-xmasgreen">Gifts</a>
        </nav>
        <div className="sm:hidden">
          <button aria-label="menu" className="p-2 rounded-md hover:bg-gray-100">☰</button>
        </div>
      </div>
    </header>
  )
}
