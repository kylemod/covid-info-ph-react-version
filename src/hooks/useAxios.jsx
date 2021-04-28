import React, { useState, useEffect } from 'react'
import axios from 'axios'

const useAxios = (url) => {
  
  const [data, setData] = useState(null)
  const [fetching, setFetching] = useState(true)
  const [error, setError] = useState(null)
  
  useEffect(() => {
    axios.get(url)
      .then(res => {
        setData(res.data)
        //console.log(res.data)
        setFetching(false)
      })
      .catch(err => {
        if(err.response.data.message){ 
        setError(err.response.data)
        } else {
          setError(err)
        }
        setFetching(false)
        //console.log(err.response.data)
      })
      
    return () => {
      setData(null)
      setFetching(null)
      setError(null)
    }
  },[url])
  
  return { data, fetching, error }
}

export default useAxios