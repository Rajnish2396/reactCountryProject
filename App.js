import React, {useState} from 'react'
import Header from './component/Header'
import { Outlet } from 'react-router'

export default function app() {
 const[isDark, setDark]=useState(JSON.parse(localStorage.getItem("isDarkMode")) )

  return (
    <>
      <main className={`${isDark ? 'dark' : ''}`}>
        <Header theme={[isDark, setDark]} />
        <Outlet />
      </main>
    </>
  )
}
