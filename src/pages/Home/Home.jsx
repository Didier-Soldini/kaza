import React from 'react'
import Banner from '../../components/Banner/Banner'
import bannerImage from '../../assets/banner--home.webp'


const Home = () => (
  <div className="homepage">
    <Banner image={bannerImage} showText={true} />
    
  </div>
)

export default Home
