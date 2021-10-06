import React, { useState } from 'react'
import PropTypes from 'prop-types'
import '../styles/Cart.css'

function Cart({ cart, updateCart }) {
  const [isOpen, setIsOpen] = useState(true)
  const total = cart.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price,
    0,
  )
  return isOpen ? (
    <div className="lmj-cart">
      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsOpen(false)}
        type="button"
      >
        Fermer
      </button>
      {cart.length > 0 ? (
        <div>
          <h2>Panier</h2>
          <ul>
            {cart.map(({ name, price, amount }, index) => (
              <div key={`${name}-${index}`}>
                {name}
                {' '}
                {price}
                € x
                {' '}
                {amount}
              </div>
            ))}
          </ul>
          <h3>
            Total :
            {total}
            €
          </h3>
          <button onClick={() => updateCart([])} type="button">Vider le panier</button>
        </div>
      ) : (
        <div>Votre panier est vide</div>
      )}
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

Cart.propTypes = {
  cart: PropTypes.arrayOf().isRequired,
  updateCart: PropTypes.arrayOf().isRequired,
}

export default Cart
