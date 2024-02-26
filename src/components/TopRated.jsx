import React, { useState } from 'react'
import ContentWrapper from './contentWrappper/ContentWrapper'
import SwitchTabs from './SwitchTabs'
import useFetch from '../hooks/useFetch'
import Carousel from './carousel/Carousel'

function TopRated() {

  const [endpoint, setEndpoint] = useState("movie")

  const {data, loading} = useFetch(`/${endpoint}/top_rated`)

  const onTabChange = (tab) => {
    setEndpoint(tab === "Movies" ? "movie" : "tv")
  }

  return (
    <div className='relative mb-[70px]'>
      <ContentWrapper className={"flex items-center justify-between mb-[20px]"}>
        <span className='text-[24px] text-white font-normal'>Top Rated</span>
        <SwitchTabs onTabChange={onTabChange} data={["Movies", "TV Shows"]} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endpoint={endpoint}/>
    </div>
  )
}

export default TopRated