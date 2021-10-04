import React from 'react'
import PropTypes from 'prop-types'
import CareScale from './CareScale'
import '../styles/PlantItem.css'

function PlantItem(props) {
  const {
    name, cover, id, light, water,
  } = props

  function handleClick(plantName) {
    console.log(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`)
  }

  return (
    <li key={id} className="lmj-plant-item" onClick={() => handleClick(name)}>
      <img className="lmj-plant-item-cover" src={cover} alt={`${name} cover`} />
      {name}
      <div>
        <CareScale careType="water" scaleValue={water} />
        <CareScale careType="light" scaleValue={light} />
      </div>
    </li>
  )
}

PlantItem.propTypes = {
  name: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  light: PropTypes.string.isRequired,
  water: PropTypes.string.isRequired,
}

export default PlantItem
