import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-rose-50 to-white">
      <Header />
      <main className="flex-grow">
        <Home />
      </main>
      <Footer />
    </div>
  )
}
