import React, { useState } from 'react'
import '../styles/Cart.css'

function Cart() {
  const monsteraPrice = 8
  const [cart, updateCart] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  return isOpen ? (
    <div className="lmj-cart">
      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsOpen(false)}
        type="button"
      >
        Fermer le Panier
      </button>
      <h2>Panier</h2>
      <div>
        Monstera :
        {' '}
        {monsteraPrice}
        €
        <button onClick={() => updateCart(cart + 1)} type="button">
          Ajouter
        </button>
      </div>
      <h3>
        Total :
        {' '}
        {monsteraPrice * cart}
        €
      </h3>
      <button onClick={() => updateCart(0)} type="button">
        Vider le panier
      </button>
    </div>
  ) : (
    <div className="lmj-cart-closed">
      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsOpen(true)}
        type="button"
      >
        Ouvrir le Panier

      </button>
    </div>
  )
}

export default Cart
