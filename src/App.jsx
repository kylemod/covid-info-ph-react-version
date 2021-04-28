import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import useLocalStorage from 'react-use-localstorage';
import Navbar from './components/Navbar'
import Overview from './views/Overview'
import Countries from './views/Countries'

function App() {
  
  const [isDark, setIsDark] = useState(false)
  const [isStoreDark, setIsStoreDark] = useLocalStorage('isDark')
  let dark = isStoreDark.toString()
  
  useEffect(() => {
    if(dark == "true") {
      setIsDark(Boolean(dark))
    }
  },[])
  
  return (
    <Router>
      <div className={ isDark ? 'dark' : ''}>
        <Navbar isDark={isDark} setIsDark={setIsDark} setIsStoreDark={setIsStoreDark} />
        <div className="absolute -z-10 w-full h-full dark:(bg-gray-900 text-gray-300) animate">
          <div className="mt-20 dark:bg-gray-900">
            <Switch>
              <Route exact path="/">
                <Overview />
              </Route>
              <Route path="/countries">
                <Countries />
              </Route>
              <Route path="*">
                Not Found!
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
