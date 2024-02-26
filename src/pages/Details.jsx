import React from 'react'
import useFetch from "../hooks/useFetch"
import { useParams } from 'react-router-dom'
import DetailsBanner from '../components/detailsComponents/DetailsBanner'
import Cast from '../components/detailsComponents/Cast'
import VideoSection from '../components/detailsComponents/VideoSection'
import Similar from '../components/detailsComponents/Similar'
import Recommendation from "../components/detailsComponents/Recommendation"

function Details() {
  const {mediaType, id} = useParams()
  const {data, loading} = useFetch(`/${mediaType}/${id}/videos`)
  const {data: credits, loading: creditsLoading} = useFetch(`/${mediaType}/${id}/credits`)

  return (
    <div>
    <DetailsBanner crew={credits?.crew} video={data?.results?.[0]}/>
    <Cast data={credits?.cast} loading={creditsLoading} />
    <VideoSection data={data} loading={loading} />
    <Similar mediaType ={mediaType} id={id} />
    <Recommendation mediaType ={mediaType} id={id} />
    </div>
  )
}

export default Details