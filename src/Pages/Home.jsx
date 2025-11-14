import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'

import Banner from '../components/Banner'
import Info from '../components/Info'
import Category from '../components/Category'
import FeaturedPlants from '../components/FeaturedPlants'
import WhyChoose from '../components/WhyChoose'
import NatureCloser from '../components/NatureCloser'
import FollowInstagram from '../components/FollowInstagram'
import Reviews from '../components/Reviews'


export default function Home() {
  return (
    <div className="bg-[#141414] text-white">
 

    <main>
        <Banner></Banner>
        <Info></Info>
        <Category></Category>
        <FeaturedPlants></FeaturedPlants>
        <WhyChoose></WhyChoose>
        <NatureCloser></NatureCloser>
        <FollowInstagram></FollowInstagram>
        <Reviews></Reviews>
        
    </main>
    
    </div>
  )
}
