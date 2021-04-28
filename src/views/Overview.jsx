import React, { useState, useEffect } from 'react'
import Countdown from 'react-countdown'
import { RefreshCw } from 'react-feather'
import Philippines from '../components/Philippines'
import Worldwide from '../components/Worldwide'
import MetaTags from 'react-meta-tags'

const Overview = () => {
  
  const [isRestart, setIsRestart] = useState(true)
  
  const renderer = ({ minutes, seconds }) => {
      return <p className="text-gray-700 dark:text-gray-400">Data will automatically refresh after  <span className="font-bold dark:text-gray-300">{minutes} minutes</span> and <span className="font-bold dark:text-gray-300">{seconds} seconds</span></p>
  }
  
  const refresh = async () => {
    await setIsRestart(false)
    await setIsRestart(true)
  }
  
  return (
    <>
    <MetaTags>
      <title>Overview - Covid Info PH</title>
      <meta name="description" content="Covid cases about in Philippines."></meta>
     </MetaTags> 
    <div className="dark:bg-gray-900 mx-auto container px-4">
      <div className="md:(flex flex-wrap)">
         <p className="text-lg font-bold text-gray-600 tracking-wide dark:text-gray-400 md:w-1/2">COVID-19 Coronavirus - <span className="text-gray-700 dark:text-gray-300 ">Overview</span></p>
        {isRestart && 
          <div className="md:w-1/2 md:text-right">
            <Countdown date={Date.now() + 300000} renderer={renderer} onComplete={refresh} />
            <button className="bg-indigo-500 text-white px-3 py-1.5 rounded-lg mt-1 outline-none focus:outline-none highlight-none hover:bg-indigo-600 md:float-right dark:(bg-opacity-30 text-indigo-200 hover:bg-opacity-50) animate" onClick={refresh}><RefreshCw size={14} className="mr-1" /> Refresh</button>
          </div>
        } 
      </div>
      <div className="mt-4 flex flex-wrap">
        {isRestart &&
        <>
          <Philippines />
          <Worldwide />
        </>
        }
      </div> 
    </div>
    </>
  ) 
}

export default React.memo(Overview)