import React, {useState} from "react"
import { useLocation } from "wouter"
import ListOfGifs from '../../components/ListOfGifs'
import {useGifs} from '../../hooks/useGifs'
import TrendingSearches from '../../components/TrendingSearches'

export default function Home() {
  const [keyword, setKeyword] = useState('')
  const [/*path*/, pushLocation] = useLocation()
  const {/*loading,*/ gifs} = useGifs()

  const handleSubmit = evt => {
    evt.preventDefault()
    //navegar a otra ruta
    pushLocation(`/search/${keyword}`)
  }

  const handleChange = env => {
    setKeyword(env.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
      <button>Search</button>
        <input placeholder="Search a gif here..." onChange={handleChange} type='text' value={keyword} />
      </form>
      <div className="App-main">
        <div className="App-results">
          <h3 className="App-title">Última búsqueda</h3>
          <ListOfGifs gifs={gifs} />
        </div>
        <div className="App-category">
          <TrendingSearches />
        </div>
      </div>
    </>
  )
}