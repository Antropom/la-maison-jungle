import React from 'react'
import PropTypes from 'prop-types'
import '../styles/Categories.css'

function Categories({ categories, categoryFilter, setCategoryFilter }) {
  return (
    <div className="lmj-categories">
      <select
        name="Catégorie"
        id="1"
        value={categoryFilter}
        onChange={(e) => setCategoryFilter(e.target.value)}
        className="lmj-categories-select"
      >
        <option value="" default>---</option>
        {categories.map((cat) => (
          <option value={cat} key={cat}>{cat}</option>
        ))}
      </select>
      <button onClick={() => setCategoryFilter('')} type="button">Réinitialiser</button>
    </div>
  )
}

Categories.propTypes = {
  categories: PropTypes.arrayOf().isRequired,
  categoryFilter: PropTypes.string.isRequired,
  setCategoryFilter: PropTypes.func.isRequired,
}

export default Categories
