import React from 'react'
import useAxios from '../hooks/useAxios'
import Cases from './Cases'
import Loading from './Loading'

const Philippines = () => {
  
  const { data, fetching, error } = useAxios('https://corona.lmao.ninja/v2/countries/philippines')
  
  return (
    <div className="w-full md:(w-1/2 px-3)">
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

export default Philippines