import React, { useState, useEffect } from 'react'
import useAxios from '../hooks/useAxios'
import numeral from 'numeral'
import MetaTags from 'react-meta-tags'

const Countries = () => {
  
  const { data, fetching, error, setData } = useAxios('https://coronavirus-19-api.herokuapp.com/countries')

  return (
    <>
    <MetaTags>
      <title>Countries - Covid Info PH</title>
      <meta name="description" content="Covid cases about all countries that are affected."></meta>
     </MetaTags> 
    <div className="dark:bg-gray-900 px-4 mx-auto container">
      <p className="text-lg font-bold text-gray-600 tracking-wide dark:text-gray-400 md:w-1/2">COVID-19 Coronavirus - <span className="text-gray-700 dark:text-gray-300 ">Countries</span></p>
      <div className="shadow mt-4 rounded-lg px-4 py-3 dark:bg-gray-800 ">
        <p className="font-semibold text-gray-700 dark:text-gray-400">Cases by Country</p>
        {/*{data && <input type="text" placeholder="Search country..." className="px-3 py-2 mt-2 w-full rounded bg-gray-100  outline-none dark:bg-gray-900 md:w-1/2 lg:w-1/4 animate" onChange={(e) => search(e.target.value)} />}
        {!data && <input type="text" placeholder="Search country..." className="px-3 py-2 mt-2 w-full rounded bg-gray-100 dark:bg-gray-900 md:w-1/2 lg:w-1/4 animate" disabled/>}*/}
        <div className="flex flex-wrap mt-4">
          {fetching && 
            <>
            <div className="bg-gray-100 p-4 rounded-md animate-pulse dark:bg-gray-900 w-full md:w-1/2 lg:1/4">
              <span className="h-3 w-24 bg-gray-300 rounded block dark:bg-gray-800"></span>
              <span className="h-3 w-36 bg-gray-300 rounded block mt-2 dark:bg-gray-800"></span>
              <span className="h-3 w-28 bg-gray-300 rounded block mt-2 dark:bg-gray-800"></span>
              <span className="h-3 w-40 bg-gray-300 rounded block mt-2 dark:bg-gray-800"></span>
            </div>
            </>
          }
          
          {data && data.map(covid => (
          <div className="w-full md:(px-2 w-1/2) lg:w-1/4" key={covid.country} >
          
            <div className="px-3 py-1.5 bg-gray-100 rounded-lg mt-1 dark:bg-gray-900 animate ">
              <p className="text-gray-700 font-semibold dark:text-gray-300">{ covid.country }</p>        
              <p className="text-gray-700 dark:text-gray-400">Cases : <span className="text-indigo-400 font-semibold">{ numeral(covid.cases).format(0,0) }</span></p>
              <p className="text-gray-700 dark:text-gray-400">Recovered : <span className="text-green-400 font-semibold">{ numeral(covid.recovered).format(0,0) }</span></p>
              <p className="text-gray-700 dark:text-gray-400">Deaths : <span className="text-red-400 font-semibold">{ numeral(covid.deaths).format(0,0) }</span></p>
            </div> 
          </div>
          ))}
          {error && 
            <div className="md:mx-auto md:w-1/2 p-4 rounded-xl shadow bg-red-100 dark:bg-red-500 dark:bg-opacity-25 text-center w-full animate">
              <p className="text-red-700 dark:text-red-400 font-medium">
                { error.message }
              </p>
            </div>
          }
        </div>
      </div>
    </div> 
    </>
  )
}

export default React.memo(Countries)