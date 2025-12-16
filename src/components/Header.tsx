import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="w-full border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <div className="text-xl font-extrabold text-xmasGreen">XMAS SHOP</div>
        <nav className="space-x-6 text-gray-700 hidden md:block">
          <a className="hover:text-xmasRed" href="#">Home</a>
          <a className="hover:text-xmasRed" href="#">Deals</a>
          <a className="hover:text-xmasRed" href="#">Gifts</a>
        </nav>
        <div className="md:hidden">
          <button aria-label="open nav" className="text-gray-700">Menu</button>
        </div>
      </div>
    </header>
  )
}

export default Header
