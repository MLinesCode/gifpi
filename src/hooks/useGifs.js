import {useContext, useEffect, useState} from 'react'
import getGifs from '../services/getGifs'
import GifsContext from '../context/GifsContext'

export function useGifs({keyword} ={ keyword: null }) {
  const [loading, setLoading] = useState(false)
  const  {gifs, setGifs} = useContext(GifsContext)

  useEffect(function () {
    setLoading(true)
    // recuperamos la keyword de localStorage
    const keywordToUse = keyword || localStorage.getItem('LastKeyword') || 'random'

    getGifs({ keyword: keywordToUse })
      .then(gifs => {
        setGifs(gifs)
        setLoading(false)
        // se guard la keyword en el localStorage
        localStorage.setItem('LastKeyword', keyword)
      })
  }, [keyword])

  return {loading, gifs}
}