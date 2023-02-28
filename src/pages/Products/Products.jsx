import React from 'react'
import { useParams } from 'react-router-dom'
import { ProductsRow, Brands, Categories, PriceRange, Sort } from './components'

import './Products.scss'

const Products = () => {
  const categoryId = parseInt(useParams().id)
  const [maxPrice, setMaxPrice] = React.useState(1000)
  const [selectedCats, setSelectedCats] = React.useState([])
  const [brands, setBrand] = React.useState([])
  const [sort, setSort] = React.useState('sort=publishedAt:desc')
  const [toggleFilters, setToggleFilters] = React.useState(false)

  const handleChange = (e) => {
    const value = e.target.value
    const isChecked = e.target.checked

    setSelectedCats(
      isChecked ? [value] : selectedCats.filter((item) => item !== value)
    )
  }

  const filterBrands = (e) => {
    const value = e.target.value
    const isChecked = e.target.checked

    setBrand(
      isChecked ? [value] : selectedCats.filter((item) => item !== value)
    )
  }

  const handleClick = () => {
    setToggleFilters(!toggleFilters)
    console.log(toggleFilters)
  }

  return (
    <main>
      <div className="wrapper">
        <div className="smallscreen-filters_container">
          <div className="smallscreen-filters_btn">
            <button onClick={handleClick}>FILTERS</button>
          </div>
          {toggleFilters && (
            <div className="smallscreen-filters_overlay">
              <div className="smallscreen-filters_content">
                <div className="close-btn">
                  <button onClick={handleClick}>CLOSE</button>
                </div>
                <div className="smallscreen-filters_items">
                  <Categories
                    categoryId={categoryId}
                    resetFilter={() => setSelectedCats([])}
                    addFilter={handleChange}
                  />
                  <PriceRange
                    maxPrice={maxPrice}
                    setMaxPrice={(e) => setMaxPrice(e.target.value)}
                  />
                  <Sort
                    sortDef={(e) => setSort('sort=publishedAt:desc')}
                    sortLow={(e) => setSort('sort=price:asc')}
                    sortHigh={(e) => setSort('sort=price:desc')}
                  />
                  <Brands
                    categoryId={categoryId}
                    resetFilter={(e) => setBrand([])}
                    addFilter={filterBrands}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="left-column">
          <Categories
            categoryId={categoryId}
            resetFilter={() => setSelectedCats([])}
            addFilter={handleChange}
          />
          <PriceRange
            maxPrice={maxPrice}
            setMaxPrice={(e) => setMaxPrice(e.target.value)}
          />
          <Sort
            sortDef={(e) => setSort('sort=publishedAt:desc')}
            sortLow={(e) => setSort('sort=price:asc')}
            sortHigh={(e) => setSort('sort=price:desc')}
          />
          <Brands
            categoryId={categoryId}
            resetFilter={(e) => setBrand([])}
            addFilter={filterBrands}
          />
        </div>
        <div className="products-column">
          <ProductsRow
            categoryid={categoryId}
            maxprice={maxPrice}
            sort={sort}
            subcats={selectedCats}
            brands={brands}
          />
        </div>
      </div>
    </main>
  )
}

export default Products
