import React from 'react'
import { CardItem } from '../../../../components'
import { Link } from 'react-router-dom'
import useFetch from '../../../../hooks/useFetch'

import './FeaturedProducts.scss'

const FeaturedProducts = ({ type }) => {
  const {data, loading} = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  )

  return (
    <div className='app__featuredProducts'>
      <div className="app__featuredProducts-heading">
        <h1>{type} Products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia explicabo enim distinctio animi est officia, corporis recusandae, molestiae pariatur amet iste illo debitis beatae architecto incidunt nemo ad odit illum.
        </p>
      </div>

      <div className="app__featuredProducts-content">
        {loading 
          ? "Loading.."
          : data.map(item => (  
            <CardItem item={item} key={item.id}/>
          ))
        }
      </div>
      <div className="app__featuredProducts-buttons">
        <div>
          <Link to='/category/1'>SHOP MENSWEAR</Link>
        </div>
        <div>
          <Link to='/category/2'>SHOP WOMENSWEAR</Link>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProducts