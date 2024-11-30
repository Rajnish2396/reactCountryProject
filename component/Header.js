import React, { useState } from 'react'
import { Link } from 'react-router'

export default function Header({theme}) {

 
  const [isDark, setDark]=theme // set boolean value

  // if(isDark){
  //   document.body.classList.add('dark')
  // }
  // else{
  //   document.body.classList.remove('dark')
  // }
  return (
    <header>
    <div className={`header`}>
      <a href="/"><h2>Global Countrys </h2></a>
      <div className="darkModeBtn" onClick={()=>{
        setDark(!isDark)
        localStorage.setItem('isDarkMode', !isDark )
      
      }}>

        <i className={`fa-regular fa-${isDark? `sun` : "moon"} `}/> {isDark? `Light` : "Dark"} Mode
      </div>
    </div>
  </header>
  )
}
