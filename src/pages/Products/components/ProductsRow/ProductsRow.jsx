import React from 'react'
import { CardItem } from '../../../../components'
import useFetch from '../../../../hooks/useFetch'

import './ProductsRow.scss'

const ProductsRow = ({ subcats, maxprice, sort, categoryid, brands }) => {
  const { data, loading } = useFetch(
    `/products?populate=*&${sort}&[filters][categories][id][$eq]=${categoryid}${subcats.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxprice}${brands.map(
      (item) => `&[filters][brand][id][$eq]=${item}`
    )}`
  )

  console.log(data)

  return (
    <div className="products-row">
      {loading
        ? 'Loading..'
        : data.map((item) => <CardItem item={item} key={item.id} />)}
    </div>
  )
}

export default ProductsRow
