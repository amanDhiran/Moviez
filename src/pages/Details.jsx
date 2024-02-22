import React from 'react'
import useFetch from "../hooks/useFetch"
import { useParams } from 'react-router-dom'
import DetailsBanner from '../components/detailsComponents/DetailsBanner'

function Details() {
  // const {mediaType, id} = useParams()
  // const {data, loading} = useFetch(`/${mediaType}/${id}`)

  return (
    <div>
    <DetailsBanner />
    </div>
  )
}

export default Details