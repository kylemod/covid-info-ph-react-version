import React from 'react'

const Loading = () => {
  return(
   <div className="p-4 bg-gray-50 rounded-lg shadow dark:bg-gray-800 animate animate-pulse">
       <span className="h-6 w-48 bg-gray-300 rounded block dark:bg-gray-700"></span>
        <span className="h-4 w-36 bg-gray-300 rounded block mt-4 dark:bg-gray-700"></span>
        <span className="h-4 w-40 bg-gray-300 rounded block mt-2 dark:bg-gray-700"></span>
        <div className="flex-1">
          <div className="block">
            <span className="h-4 w-40 bg-gray-300 rounded inline-block mt-10 dark:bg-gray-700"></span>
          <span className="h-4 w-28 bg-gray-300 rounded inline-block mt-10 float-right dark:bg-gray-700"></span>
          </div>
          <div className="block">
            <span className="h-4 w-44 bg-gray-300 rounded inline-block mt-2 dark:bg-gray-700"></span>
          <span className="h-4 w-32 bg-gray-300 rounded inline-block mt-2 float-right dark:bg-gray-700"></span>
          </div>
          <div className="block">
            <span className="h-4 w-48 bg-gray-300 rounded inline-block mt-2 dark:bg-gray-700"></span>
          <span className="h-4 w-36 bg-gray-300 rounded inline-block mt-2 float-right dark:bg-gray-700"></span>
          </div>
          <div className="block">
            <span className="h-4 w-40 bg-gray-300 rounded inline-block mt-2 dark:bg-gray-700"></span>
          <span className="h-4 w-28 bg-gray-300 rounded inline-block mt-2 float-right dark:bg-gray-700"></span>
          </div>
          <div className="block">
            <span className="h-4 w-44 bg-gray-300 rounded inline-block mt-2 dark:bg-gray-700"></span>
          <span className="h-4 w-32 bg-gray-300 rounded inline-block mt-2 float-right dark:bg-gray-700"></span>
      </div>
      </div>
    </div>
  )
}

export default Loading