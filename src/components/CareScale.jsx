/* eslint-disable no-nested-ternary */
import React from 'react'
import PropTypes from 'prop-types'
import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

function CareScale(props) {
  const { scaleValue, careType } = props

  const scaleType = careType === 'light' ? (
    <img src={Sun} alt="sun-icon" />
  ) : (
    <img src={Water} alt="water-icon" />
  )

  const range = [1, 2, 3]

  function handleClick() {
    const care = careType === 'light' ? 'Luminosité' : 'Arrosage'
    const scale = scaleValue === 1 ? 'peu' : scaleValue === 2 ? 'modérement' : 'beaucoup'
    const endSentence = careType === 'light' ? 'de lumière' : 'd\'arrosage'
    alert(`${care}: Cette plante requiert ${scale} ${endSentence}`)
  }

  return (
    <div onClick={() => handleClick()} role="button" tabIndex={0}>
      {range.map((rangeElem) => (
        (scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null)))}
    </div>
  )
}

CareScale.propTypes = {
  scaleValue: PropTypes.number.isRequired,
  careType: PropTypes.string.isRequired,
}

export default CareScale
