import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Featureproducts from '../components/Featureproducts'
import UniqueFeatureSofa from '../components/UniqueFeatureSofa'
import TrendingProducts from '../components/TrendingProducts'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
    <Header/>
    <Navbar/>
    <Banner/>
    <Featureproducts/>
    <UniqueFeatureSofa/>
    <TrendingProducts/>
    <Footer/>
    </>
  )
}

export default Home