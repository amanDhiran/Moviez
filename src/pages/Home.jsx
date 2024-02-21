import React from 'react'
import HeroBanner from '../components/HeroBanner'
import Trending from '../components/Trending'
import Popular from '../components/Popular'

function Home() {
  return (
    <div>
        <HeroBanner />
        <Trending />
        <Popular />
    </div>
  )
}

export default Home