import React from 'react'
import Slidingproducts from './_Hader/Slidingproducts'
import Product from './ProductPage/Product'
import HaderTop from './_Hader/HaderTop'

function Home() {
  return (
    <div>
      <HaderTop />
      <Slidingproducts />
      <Product />
    </div>
  )
}

export default Home