import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import { useDispatch } from 'react-redux'
import MobileProduct from './MobileProduct/MobileProduct'
import { Newsletter } from '../Home/components'

import './Product.scss'
import { addToBag } from '../../redux/cartReducer'

const Product = () => {
  const id = useParams().id
  const dispatch = useDispatch()

  const { data } = useFetch(`/products/${id}?populate=*`)

  // console.log(data)

  return (
    <div className="app__product">
      <MobileProduct data={data} />
      <div className="desktop">
        <div className="product_desc-column">
          <h1 style={{ background: 'yellow' }}>
            {data?.attributes?.brandText}
          </h1>
          <span className="product-title">{data?.attributes?.title}</span>
          <br />
          <span>{data?.attributes?.desc}</span>
          <br />
          <span>Suplied color: {data?.attributes?.color}.</span>
          <br />
          <span>{data?.attributes?.materials}</span>
          <br />
          <span>Made in {data?.attributes?.country}.</span>
          <br />
        </div>

        <div className="product_image-column">
          <div className="product_image-column_img">
            <div className="image-wrapper">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.coverImg?.data?.attributes?.url
                }
                alt="product"
              />
            </div>
            <div className="image-wrapper">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.coverImg2?.data?.attributes?.url
                }
                alt="product"
              />
            </div>
            <div className="image-wrapper">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.extraImg?.data?.attributes?.url
                }
                alt="product"
              />
            </div>
          </div>
        </div>

        <div className="product_price-column">
          <span
            style={{
              background: 'rgb(81, 255, 0)',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            ${data?.attributes?.price}{' '}
            {data?.attributes?.onSale && (
              <span>${data?.attributes?.oldPrice}</span>
            )}
          </span>
          <select defaultValue="size" required>
            <option value="size" disabled={true}>
              SELECT A SIZE
            </option>
            {data?.attributes?.sizes?.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          <div className="product_right-column_btn">
            <button
              className="product_btn-bag"
              type="button"
              onClick={() =>
                dispatch(
                  addToBag({
                    id: data.id,
                    title: data.attributes.title,
                    brand: data.attributes.brandText,
                    img: data.attributes.coverImg.data.attributes.url,
                    price: data.attributes.price,
                  })
                )
              }
            >
              ADD TO BAG
            </button>
            <button className="product_btn-wishlist" type="button">
              ADD TO WISHLIST
            </button>
          </div>
        </div>
      </div>
      <Newsletter />
    </div>
  )
}

export default Product
