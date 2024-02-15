
import {useState, useEffect } from "react"
import fetchDataFromApi from "./utils/api"
import { useSelector, useDispatch } from 'react-redux';
import { getApiConfiguration } from "./store/homeSlice";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Explore from "./pages/Explore";
import Details from "./pages/Details";
import SearchResult from "./pages/SearchResult"


function App() {
  const dispatch = useDispatch()
  const {url} = useSelector((state) => state.home
  )
  console.log(url);
  useEffect(()=>{
    apiTesting();
  },[])

  const apiTesting = () =>{
    fetchDataFromApi('/movie/popular')
      .then((res) => {
        // console.log(res);
        dispatch(getApiConfiguration(res))
      })
  }

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/:mediaType/:id" element = {<Details/>}/>
      <Route path="/search/:query" element = {<SearchResult/>}/>
      <Route path="/explore/:mediaType" element = {<Explore/>}/>
      <Route path="*" element = {<PageNotFound/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
