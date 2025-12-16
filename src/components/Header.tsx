function Header() {
  return (
    <header className="bg-christmas-red text-white shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold tracking-wider">
            XMAS SHOP
          </div>
          <ul className="flex gap-6 md:gap-8">
            <li>
              <a 
                href="#home" 
                className="hover:text-christmas-gold transition-colors duration-300 font-medium"
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#deals" 
                className="hover:text-christmas-gold transition-colors duration-300 font-medium"
              >
                Deals
              </a>
            </li>
            <li>
              <a 
                href="#gifts" 
                className="hover:text-christmas-gold transition-colors duration-300 font-medium"
              >
                Gifts
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
