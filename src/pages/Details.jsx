import React from 'react'
import useFetch from "../hooks/useFetch"
import { useParams } from 'react-router-dom'
import DetailsBanner from '../components/detailsComponents/DetailsBanner'

function Details() {
  const {mediaType, id} = useParams()
  const {data, loading} = useFetch(`/${mediaType}/${id}/videos`)
  const {data: credits, loading: creditsLoading} = useFetch(`/${mediaType}/${id}/credits`)

  return (
    <div>
    <DetailsBanner crew={credits?.crew} video={data?.results?.[0]}/>
    </div>
  )
}

export default Details