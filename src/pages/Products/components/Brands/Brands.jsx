import React from 'react'
import useFetch from '../../../../hooks/useFetch'

import './Brands.scss'

const Brands = ({ categoryId, addFilter, resetFilter }) => {
  const { data, loading } = useFetch(
    `/brands?[filters][categories][id][$eq]=${categoryId}`
  )

  // console.log(data)

  return (
    <div className="filter-item">
      <input type="radio" name="brand" id="allBrands" onChange={resetFilter} />
      <label htmlFor="allBrands">
        <h2>ALL DESIGNERS</h2>
      </label>
      {data.map((item) => (
        <div className="filter-input" key={item.id}>
          <input
            type="radio"
            name="brand"
            id={item.attributes.brandName}
            value={item.id}
            onChange={addFilter}
          />
          <label htmlFor={item.attributes.brandName}>
            {item.attributes.brandName}
          </label>
        </div>
      ))}
    </div>
  )
}

export default Brands
