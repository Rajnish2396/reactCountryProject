import React, { useState,useEffect } from 'react'


  export default function FilterContainer({selectHandler, getInputValue, regionList}) {

    let [searchValue, setSearchValue]= useState('')



  return (
    <div className='view'>
    <div className="filterSearch">
  <div className="serachBox">
    <i className="fa-solid fa-magnifying-glass" />
    <input
      type="text"
      placeholder="Search for a country..."
      className="searchInput"
    
      value={searchValue} onChange={(e)=>{
        setSearchValue(e.target.value)
        selectHandler('')
        getInputValue(searchValue)
        }}/>
        
  </div>
  <div className="filterBox">
  <select onChange={(e)=>{
    selectHandler(e.target.value)
    setSearchValue('')
    }}>
  <option>Search By Filter</option>
    {
      regionList.map((item, index)=>{
        return <option key={index || item} value={item}>{item}</option>
      })
    }
    {/* <option value="Antarctic">Antarctic</option>
    <option value="Americas">Americas</option>
    <option value="Europe">Europe</option>
    <option value="Africa">Africa</option>
    <option value="Asia">Asia</option>
    <option value="Oceania">Oceania</option> */}
  </select>
  </div>
</div>

    </div>
  )
}
