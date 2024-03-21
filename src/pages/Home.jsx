import React from 'react'
import Hero from '../components/Hero';
import Promo from '../components/Promo';
import Explore from '../components/Explore';
import AppDownload from '../components/AppDownload';
import BusinessPromo from '../components/BusinessPromo';
import Blog from '../components/Blog';
import Franchise from '../components/Franchise';

const Home = () => {
  return (
    <div>
        <Hero />
        <Promo />
        <Explore />
        <AppDownload />
        <BusinessPromo />
        <Blog />
        <Franchise />        
    </div>
  )
}

export default Home