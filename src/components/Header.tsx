import React from 'react';

export default function Header() {
  return (
    <header className="bg-red-600 text-white py-4 px-6 md:flex md:items-center md:justify-between">
      <div className="text-2xl font-bold">XMAS SHOP</div>
      <nav className="mt-3 md:mt-0">
        <ul className="flex flex-col md:flex-row gap-3 md:gap-6 text-lg">
          <li>
            <a href="#" className="hover:underline">Home</a>
          </li>
          <li>
            <a href="#" className="hover:underline">Deals</a>
          </li>
          <li>
            <a href="#" className="hover:underline">Gifts</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
