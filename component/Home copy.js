import { useState, useEffect, useContext } from 'react'
import CountryList from './CountryList'
import FilterContainer from './FilterContainer'
import { ThemContext } from '../context/ThemeContext'

//Api Fetching  function
import ApiFetching from './ApiFetching' 

export default function Home() {
 
  //Set State  
  let [countryList, setCountryList]=useState([])
  let[regionList, setRegionList]=useState([])
  let [selectData, setSelectData]=useState('')
  let [inputValue, setInpValue]=useState('')

  //For get All Filter Text (by Region)  
    const getRegion = ((region)=>{ setRegionList(region)})

  //For get Filter Value after select box change
    const getFilterValue=((selectValue)=> {setSelectData(selectValue)})
    
//For get Input value from Search box
    const getInputValue=((inpValue)=>{setInpValue(inpValue)})

  useEffect(()=>{
    // get Api Data 
        ApiFetching(`https://restcountries.com/v3.1/all`)
        .then((data)=>{
          setCountryList(data)
        }).catch((y)=>{
          console.log(y)
        })

  },[])



  return (
    <>
   
    <FilterContainer 
    selectHandler={getFilterValue} 
    getInputValue={getInputValue}
    regionList={regionList} />

  <CountryList 
   
  selectData={selectData} 
  inputValue={inputValue} 
  countryList={countryList}
  getRegion ={getRegion}
  /> 
 
   

    
    </>
  )
}
