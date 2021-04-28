import React, { useState, useCallback } from 'react'
import { Menu, X, Moon, Sun } from 'react-feather'
import { Transition } from '@headlessui/react'
import { NavLink } from 'react-router-dom'
import useLocalStorage from 'react-use-localstorage';

const Navbar = ({ isDark, setIsDark, setIsStoreDark }) => {
  
  const [isOpen, setIsOpen] = useState(false)
  
  const toggleDark = useCallback(() => {
    setIsDark(isDark => !isDark)
    setIsStoreDark(isDark = !isDark)
  },[])
  
  return (
    <div className="h-full">
    <div className="fixed w-full bg-white shadow-sm p-4 flex flex-wrap justify-between dark:(bg-gray-900 border-b-1 border-gray-700) animate">
      <div className="flex justify-between">
        <p className="text-gray-700 font-bold text-xl dark:text-gray-300 animate"><span className="text-indigo-500 dark:text-indigo-400 ">Covid Info</span> PH</p>
        
        <div className="ml-9 hidden lg:block">
          <NavLink to="/" exact activeClassName="nav-active" className="nav-link mr-3" onClick={() => setIsOpen(isOpen => !isOpen)}>Overview</NavLink> 
          <NavLink to="/countries" activeClassName="nav-active" className="nav-link" onClick={() => setIsOpen(isOpen => !isOpen)}>Countries</NavLink>
        </div>
      </div>
      <div>
        <a className=" mr-5 lg:mr-0" onClick={toggleDark}>
          {!isDark && <Sun className="text-gray-700" />}
          {isDark && <Moon className="text-gray-300" />}
        </a>
        <span className="lg:hidden">
          <a className={ isDark ? 'text-gray-300' : 'text-gray-700' } onClick={() =>  setIsOpen(isOpen => !isOpen)}>
            {!isOpen && <Menu />}
            {isOpen && <X />}
          </a>
        </span>
      </div>
    </div>
    <Transition
      show={isOpen}
      enter="transition-opacity duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="fixed bg-gray-400 opacity-50 h-screen w-full dark:bg-gray-700 lg:hidden" onClick={() => setIsOpen(isOpen => !isOpen)}></div>
    </Transition>
    <Transition
      show={isOpen}
      enter="transition transform ease-in-out duration-300"
      enterFrom="-translate-x-full"
      enterTo="-translate-x-0"
      leave="transition transform ease-in-out duration-300"
      leaveFrom="-translate-x-0"
      leaveTo="-translate-x-full"
      >
        <div className="fixed h-screen w-4/6 md:w-2/6 bg-white shadow-lg dark:bg-gray-900 lg:hidden">
          <div className="p-4 shadow-sm dark:(border-b-1 border-gray-700)">
            <p className="text-gray-700 font-bold text-xl dark:text-gray-300">Menu</p>
        </div>
        <div className="mt-2 py-2 px-2">
          <NavLink to="/" exact activeClassName="nav-active" className="nav-link" onClick={() => setIsOpen(isOpen => !isOpen)}>Overview</NavLink>
          <NavLink to="/countries" activeClassName="nav-active" className="nav-link" onClick={() => setIsOpen(isOpen => !isOpen)}>Countries</NavLink>
        </div>
        </div>
      </Transition>
    </div>
  )
}

export default Navbar