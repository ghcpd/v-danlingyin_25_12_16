import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="bg-christmas-green text-white py-4 shadow-lg">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-3xl font-bold">🎄 XMAS SHOP</div>
        <nav className="hidden md:flex gap-8">
          <a href="#home" className="hover:text-christmas-gold transition">Home</a>
          <a href="#deals" className="hover:text-christmas-gold transition">Deals</a>
          <a href="#gifts" className="hover:text-christmas-gold transition">Gifts</a>
        </nav>
        <button className="md:hidden text-2xl">☰</button>
      </div>
    </header>
  )
}

export default Header
