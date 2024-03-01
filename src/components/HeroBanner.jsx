import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { useSelector } from 'react-redux'
import Img from "./lazyLoadImage/Img"
import ContentWrapper from './contentWrappper/ContentWrapper'

function HeroBanner() {
  const [background, setBackground] = useState("")
  const [query, setQuery] = useState("")
  const navigate = useNavigate()

  const {url} = useSelector((state) => state.home)

  const {data, loading} = useFetch("/movie/upcoming")

  useEffect(() => {
    const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg)
  },[data])

  const searchQueryHandler = (e) => {
    if (e.key === "Enter" && query.length > 0) {
        navigate(`/search/${query}`)    
    }
  }
  const handleSearch = () => {
    if(query.length > 0){
      navigate(`/search/${query}`)
    }
  }

  return (
    <div className='w-full h-[450px] bg-black flex items-center relative md:h-[700px]'>
      {!loading && <div className='w-full h-full absolute top-0 left-0 opacity-50 overflow-hidden'>
        <Img className={" w-full h-full object-cover object-center"} src={background}/>
      </div>}

      <div className='opacity-layer w-full h-[250px] to-[#04152d] absolute bottom-0 left-0'>
        
      </div>
      
      <ContentWrapper>
      
        <div className='flex flex-col items-center text-[white] text-center relative max-w-3xl my-0 mx-auto '>
          <span className=' text-5xl font-bold mb-3 md:mb-0 md:text-[90px]'>Welcome.</span>
          <span className=' text-lg font-medium mb-10 md:text-2xl'>
            Millions of movies, TV shows and people to discover.
            Explore now.
          </span>
          <div className='flex items-center w-full'>
            <input 
            className=' w-input-width-small-screen h-12 outline-none text-black rounded-l-[30px] px-4 text-sm md:w-input-width-large-screen md:h-14 md:text-xl md:px-7'
            type="text"
            placeholder='Search for a movie or tv show...'
            onKeyUp={searchQueryHandler}
            onChange={(e) => setQuery(e.target.value)}
            
              />
            <button className=' w-[100px] h-12 bg-gradient text-white outline-none rounded-r-[30px] text-base cursor-pointer md:w-[150px] md:h-14 md:text-lg'
            onClick={handleSearch} >Search</button>
          </div>
        </div>
      
      </ContentWrapper>
    </div>
  )
}

export default HeroBanner