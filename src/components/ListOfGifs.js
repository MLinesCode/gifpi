import React, { useEffect, useState } from 'react';
import Gif from './Gif';
import getGifs from '../services/getGifs';

export default function ListOfGifs({ params }) {
  const { keyword } = params
  const [gifs, setGifs] = useState(
    { loading: false, results: []}
  )
  
  useEffect(function () {
    setGifs(
      actualGifs => ({loading:true, results: actualGifs.results})
    )

    getGifs({ keyword })
      .then(gifs => {
        setGifs({loading: false, results: gifs})
      })
  }, [keyword])

  if (gifs.loading) return <span role='img' aria-label='icon'>Cargando...👾</span>

  return <div>
    {
      gifs.results.map(({id, title, url}) => 
        <Gif
          key={id} 
          id={id}
          title={title}
          url={url}
        />
      )
    } 
  </div>
}