import React, { useState, useEffect } from 'react'
import Banner from './Banner'
import Cart from './Cart'
import ShoppingList from './ShoppingList'
import Footer from './Footer'

function App() {
  const savedCart = localStorage.getItem('cart')
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])

  useEffect(() => {
    const stringifiedCart = JSON.stringify(cart)
    localStorage.setItem('cart', stringifiedCart)
  }, [cart])

  return (
    <div>
      <Banner />
      <div className="lmj-layout-inner">
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList cart={cart} updateCart={updateCart} />
      </div>
      <Footer />
    </div>
  )
}

export default App
