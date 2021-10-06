import React, { useState } from 'react'
import PropTypes from 'prop-types'
import PlantItem from './PlanItem'
import Categories from './Categories'
import plantList from '../datas/plantList'
import '../styles/ShoppingList.css'

function ShoppingList({ cart, updateCart }) {
  const [categoryFilter, setCategoryFilter] = useState('')

  const categories = plantList.reduce(
    (acc, plant) => (acc.includes(plant.category) ? acc : acc.concat(plant.category)),
    [],
  )

  function addToCart(name, price) {
    const currentPlantSaved = cart.find((plant) => plant.name === name)
    if (currentPlantSaved) {
      const cartFilteredCurrentPlant = cart.filter(
        (plant) => plant.name !== name,
      )
      updateCart([
        ...cartFilteredCurrentPlant,
        { name, price, amount: currentPlantSaved.amount + 1 },
      ])
    } else {
      updateCart([...cart, { name, price, amount: 1 }])
    }
  }

  return (
    <div className="lmj-shopping-list">
      <Categories
        categories={categories}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
      />
      <ul>
        {categories.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>
      <ul className="lmj-plant-list">
        {plantList.map(({
          id, cover, category, name, water, light, price,
        }) => (
          category === categoryFilter || !categoryFilter
            ? (
              <div key={id}>
                <PlantItem
                  cover={cover}
                  name={name}
                  water={water}
                  light={light}
                  price={price}
                />
                <button onClick={() => addToCart(name, price)} type="button">Ajouter</button>
              </div>
            ) : null
        ))}
      </ul>
    </div>
  )
}

ShoppingList.propTypes = {
  cart: PropTypes.arrayOf().isRequired,
  updateCart: PropTypes.arrayOf().isRequired,
}

export default ShoppingList
