import React from 'react'
import numeral from 'numeral'
import moment from 'moment'

const Cases = ({ data }) => {
  //console.log(data)
  return (
    <div className="p-4 bg-gray-50 rounded-lg shadow dark:bg-gray-800 animate">
        <p className="text-gray-500 font-bold dark:text-gray-400">Coronavirus Cases - <span className="text-gray-700 dark:text-gray-300">{data.country  ? data.country : 'Worldwide' }</span></p>
        <p className="mt-4 uppercase text-sm font-semibold text-gray-500 dark:text-gray-400">Total confirmed cases</p>
        <p className="mt-1 text-gray-700 text-2xl font-bold dark:text-gray-300">{ numeral(data.cases).format(0,0) }</p>
        <div className="mt-5 text-sm text-gray-700 dark:text-gray-400">
          <p><span className="inline-block h-3 w-3 rounded bg-indigo-500 mr-2"></span> Active cases <span className="inline-block float-right font-bold dark:text-gray-300">{ numeral(data.active).format(0,0) }</span></p>
          <p className="mt-1"><span className="mt-2.5 inline-block h-3 w-3 rounded bg-indigo-500 mr-2"></span> Cases Today <span className="inline-block float-right font-bold dark:text-gray-300">{ numeral(data.todayCases).format(0,0) }</span></p>
          <p><span className="mt-2.5 inline-block h-3 w-3 rounded bg-green-400 mr-2"></span> Recovered <span className="inline-block float-right font-bold dark:text-gray-300">{ numeral(data.recovered).format(0,0) }</span></p>
          <p><span className="mt-2.5 inline-block h-3 w-3 rounded bg-green-400 mr-2"></span> Recovered Today <span className="inline-block float-right font-bold dark:text-gray-300">{ numeral(data.todayRecovered).format(0,0) }</span></p>
          <p><span className="mt-2.5 inline-block h-3 w-3 rounded bg-yellow-500 mr-2"></span> Critical <span className="inline-block float-right font-bold dark:text-gray-300">{ numeral(data.critical).format(0,0) }</span></p>
          <p><span className="mt-2.5 inline-block h-3 w-3 rounded bg-red-500 mr-2"></span> Deaths <span className="inline-block float-right font-bold dark:text-gray-300">{ numeral(data.deaths).format(0,0) }</span></p>
          <p><span className="mt-2.5 inline-block h-3 w-3 rounded bg-red-500 mr-2"></span> Deaths Today <span className="inline-block float-right font-bold dark:text-gray-300">{ numeral(data.todayDeaths).format(0,0) }</span></p>
          <p><span className="mt-2.5 inline-block h-3 w-3 rounded bg-gray-400 mr-2"></span> Total Swab Tested <span className="inline-block float-right font-bold dark:text-gray-300">{ numeral(data.tests).format(0,0) }</span></p>
          <p className="text-sm mt-4 text-gray- 500">Updated on : { moment(data.updated).format('MMMM Do YYYY, h:mm a') }</p>
        </div>
      </div>
  )
}

export default Cases