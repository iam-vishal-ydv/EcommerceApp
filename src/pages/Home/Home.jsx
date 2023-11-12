import React, { Children } from 'react'
import Layout from '../../Components/layout/Layout'
import HeroSection from '../../Components/HeroSection/HeroSection'
import Filter from '../../Components/Filter/Filter'
import ProductCard from '../../Components/ProductCard/ProductCard'
import Track from '../../Components/Track/Track'



 const Home = () => {
  return (
    <Layout> 

      <HeroSection/>
      <Filter/>
      <ProductCard/>
      <Track/>
       </Layout>
  )
}


export default Home