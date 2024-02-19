import React, { useState } from 'react'
import ContentWrapper from './contentWrappper/ContentWrapper'
import SwitchTabs from './SwitchTabs'
import useFetch from '../hooks/useFetch'

function Trending() {

  const [endpoint, setEndpoint] = useState("day")

  const {data, loading} = useFetch(`/trending/all/${endpoint}`)

  const onTabChange = (tab) => {
    setEndpoint(tab === "Day" ? "day" : "week")
  }

  return (
    <div className='relative mb-[70px]'>
      <ContentWrapper className={"flex items-center justify-between mb-[20px]"}>
        <span className='text-[24px] text-white font-normal'>Trending</span>
        <SwitchTabs onTabChange={onTabChange} data={["Day", "Week"]} />
      </ContentWrapper>
    </div>
  )
}

export default Trending