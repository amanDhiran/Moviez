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

  return (
    <div>
      {!loading && <div>
        <Img src={background}/>
      </div>}

      <div>
        
      </div>
      
      <ContentWrapper>
      
        <div>
          <span>Welcome</span>
          <span>
            Millions of movies, TV shows and people to discover.
            Explore now.
          </span>
          <div>
            <input 
            type="text"
            placeholder='Search for a movie or TV show...'
            onKeyUp={searchQueryHandler}
            onChange={(e) => setQuery(e.target.value)}
            
              />
            <button>Search</button>
          </div>
        </div>
      
      </ContentWrapper>
    </div>
  )
}

export default HeroBanner