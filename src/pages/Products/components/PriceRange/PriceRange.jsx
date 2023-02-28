import React from 'react'

const PriceRange = ({ maxPrice, setMaxPrice }) => {
  return (
    <div className="filter-item">
      <h2>PRICE RANGE</h2>
      <div className="input-item">
        <span>$0</span>
        <input
          className="price-range"
          type="range"
          defaultValue={maxPrice}
          min={0}
          max={1000}
          onChange={setMaxPrice}
        />
        <span>${maxPrice}</span>
      </div>
    </div>
  )
}

export default PriceRange
