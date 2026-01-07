import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ProductList />
      </main>
      <Footer />
    </div>
  );
}
