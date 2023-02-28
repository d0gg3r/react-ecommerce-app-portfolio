import React from 'react'
import { useDispatch } from 'react-redux'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { addToBag } from '../../../redux/cartReducer'

import './MobileProduct.scss'

const MobileProduct = ({ data }) => {
  const scrollRef = React.useRef(null)
  const dispatch = useDispatch()

  const scroll = (direction) => {
    const { current } = scrollRef

    if (direction === 'left') {
      current.scrollLeft -= 200
    } else {
      current.scrollLeft += 200
    }
  }

  return (
    <div className="product_mobile-container">
      <div className="product_mobile-images">
        <div className="product_mobile-images_content" ref={scrollRef}>
          <div className="image-wrapper_mobile">
            <img
              src={
                process.env.REACT_APP_UPLOAD_URL +
                data?.attributes?.coverImg?.data?.attributes?.url
              }
              alt="product"
            />
          </div>
          <div className="image-wrapper_mobile">
            <img
              src={
                process.env.REACT_APP_UPLOAD_URL +
                data?.attributes?.coverImg2?.data?.attributes?.url
              }
              alt="product"
            />
          </div>
          <div className="image-wrapper_mobile">
            <img
              src={
                process.env.REACT_APP_UPLOAD_URL +
                data?.attributes?.extraImg?.data?.attributes?.url
              }
              alt="product"
            />
          </div>
        </div>
        <div className="product_image-column_buttons">
          <BsArrowLeft className="arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRight
            className="arrow-icon"
            onClick={() => scroll('right')}
          />
        </div>
      </div>

      <div className="product_mobile-desc">
        <div className="product_mobile-desc-top">
          <div className="product_mobile-desc-top_container">
            <h1 style={{ background: 'yellow' }}>
              {data?.attributes?.brandText}
            </h1>
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
          </div>
          <span className="product-title">{data?.attributes?.title}</span>
        </div>

        <div className="product_mobile_desc-size">
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
          <div className="product_mobile_desc-buttons">
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

        <div className="product_mobile-desc_info">
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
      </div>
    </div>
  )
}

export default MobileProduct
