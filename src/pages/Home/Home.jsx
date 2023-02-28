import React from 'react'
import { Link } from 'react-router-dom'
import mens from '../../assets/header_mens.webp'
import womens from '../../assets/header_womens.webp'
import { Ticker } from '../../components'
import ArticleRow from './components/ArticleRow/ArticleRow'
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts'
import Newsletter from './components/Newsletter/Newsletter'

import './Home.scss'

const Home = () => {
  return (
    <>
      <Ticker />
      <div className="app__home">
        <div className="app__home-header">
          <Link
            to="/category/1"
            className="app__home-header_title text-focus-in"
          >
            The <span style={{ fontWeight: '700' }}>Latest</span> Campaign
          </Link>
          <div className="app__home-header_categories">
            <div className="app__home-header_men bounce-in-left">
              <Link to="/category/1" style={{ background: 'red' }}>
                <h1>MENSWEAR</h1>
              </Link>
              <Link to="/category/1">
                <img src={mens} alt="mens category" />
              </Link>
            </div>
            <div className="app__home-header_women bounce-in-right">
              <Link to="/category/2" style={{ background: 'red' }}>
                <h1>WOMENSWEAR</h1>
              </Link>
              <Link to="/category/2">
                <img src={womens} alt="womens category" />
              </Link>
            </div>
          </div>
        </div>
        <FeaturedProducts type="featured" />
        <ArticleRow />
        <Newsletter />
      </div>
    </>
  )
}

export default Home
