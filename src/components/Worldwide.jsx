import React, { useEffect } from 'react'
import useAxios from '../hooks/useAxios'
import Cases from './Cases.jsx'
import Loading from './Loading'

const Worldwide = () => {
  
  const { data, fetching, error } = useAxios('https://corona.lmao.ninja/v2/all')
  
  return (
    <div className="w-full mt-4 mb-8 md:(w-1/2 px-3 mt-0)">
      {fetching && <Loading />}
      {data && <Cases data={data} />}
      {error && 
        <div className="p-4 rounded-xl shadow bg-red-100 dark:bg-red-500 dark:bg-opacity-25 text-center w-full animate">
          <p className="text-red-700 dark:text-red-400 font-medium">
            { error.message }
          </p>
        </div>
      }
    </div>
  )
}

export default Worldwide