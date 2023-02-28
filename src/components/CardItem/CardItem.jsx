import React from 'react'
import { Link } from 'react-router-dom'

import './CardItem.scss'

const CardItem = ({item}) => {
  return (
    <div className='app__cardItem'>
      <Link to={`/item/${item.id}`}>
        <div className="app__cardItem-images">
          <img src={process.env.REACT_APP_UPLOAD_URL + item.attributes.coverImg.data.attributes.url} alt='product' className='mainImg' />
          <img src={process.env.REACT_APP_UPLOAD_URL + item.attributes.coverImg2.data.attributes.url} alt='product on hover' className='secondImg' />
        </div>
        <div className="app__cardItem-describe">
          <div>
            <p className='brand'>{item.attributes.brandText}</p>
          </div>
          <div>
            <p className='title'>{item.attributes.title}</p>
          </div>
          <div>
            <p className='price'>
              ${item.attributes.price} {item.attributes.onSale && <span>${item.attributes.oldPrice}</span>}
            </p>
          </div> 
        </div>
      </Link>
    </div>
  )
}

export default CardItem