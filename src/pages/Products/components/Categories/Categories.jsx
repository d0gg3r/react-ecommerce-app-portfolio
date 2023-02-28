import React from 'react'
import useFetch from '../../../../hooks/useFetch'

const Categories = ({ categoryId, resetFilter, addFilter }) => {
  const { data, loading } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${categoryId}`
  )

  return (
    <div className="filter-item">
      <input
        type="radio"
        name="subCategory"
        id="allCats"
        onChange={resetFilter}
      />
      <label htmlFor="allCats" className="categories-title">
        ALL CATEGORIES
      </label>

      {data.map((item) => (
        <div className="input-item" key={item.id}>
          <input
            type="radio"
            name="subCategory"
            id={item.id}
            value={item.id}
            onChange={addFilter}
          />
          <label htmlFor={item.id}>{item.attributes.title}</label>
        </div>
      ))}
    </div>
  )
}

export default Categories
