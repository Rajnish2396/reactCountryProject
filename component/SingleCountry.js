import React, { useEffect, useState } from 'react'
import ApiFetching from './ApiFetching' 
import { Link, useLocation, useParams, useNavigate } from "react-router";
import Loader from './Loader'
import CountryCard from './countryCard';
import SingleCountryLoader from './SingleCountryLoader';


export default function SingleCountry() {

  const {name} = useParams();  // get params (url) value
  const {state} = useLocation() //  get data by anchor (Link) data
  const navigate = useNavigate();// for page redirection

 //Create State
 const [data, setApiData]=useState(null)
 const[countryNotFound, setNotFound]= useState(null)
 const[relatedBorder, setRelatedBorder]= useState([])
//  const uniqueBorder = [... new Set(relatedBorder.map((x)=>x.name.common))]
 
 useEffect(()=>{  
 
  //Create "Re usable Function" a function for use Link state or single api data
      function reUsableApiData(apiData){
        setApiData({  
          thumb: apiData.flags.svg,
          name: apiData.name.common,
          nativeName: Object.values(apiData.name.nativeName)[0]?.common || 'N/A',
          capital: apiData.capital || 'N/A',
          population: apiData.population.toLocaleString('en-IN'),
          topDomain: apiData.tld || 'N/A',
          region: apiData.region,
          subRegion: apiData.subregion,
          currencies: Object.values(apiData.currencies || {}).map((currency) => currency.name).join(', '),
          languages: Object.values(apiData.languages || {}).join(', '),
          border: [],
        })
        if(!apiData.borders){
          apiData.borders =[]
        }
        if(relatedBorder.length !==0){
          setRelatedBorder([])
        }
        
    
        apiData.borders.map((bdr)=>{
          return ApiFetching(`https://restcountries.com/v3.1/alpha/${bdr}`)
          .then(([x])=>{    
            // 
            setApiData((prevData)=>({...prevData, border:[...new Set([...prevData.border, x.name.common])]}))
            setRelatedBorder((prevData)=>([...prevData, ...[x]]))
          })
        }
      )

  
    
      }

  //When Linking State Found
      if(state){
        console.log(state)
        reUsableApiData(state)  //Call Re usable Function 
      }

  //When Linking State Not Found 
    if(!state){  ApiFetching(`https://restcountries.com/v3.1/name/${name}`)
      .then(([apiData])=>{
            reUsableApiData(apiData) //Call Re usable Function 
      })
      .catch((err)=>{
        setNotFound(true)
      })
    }
  

 },[name])
  

//  setRelatedBorder(data.border)

 if(countryNotFound){
      return <div className='view'><h1>Country Not Found</h1></div>
 }

  return (
   
    data  === null ? <SingleCountryLoader /> :
    <>

    <div className="view">
        <div className="bacBtn" onClick={() => navigate(-1)}>
          <i className="fa-solid fa-arrow-left" /> Back
        </div>
        <div className="countryDtails">
          <div className="countryImage">
            <img src={data.thumb} width="100%" />
          </div>
          <div className="countryInformration">
            <h2>{data.name}</h2>
            <ul className="info">
              <li className="nativeRegion">
                <strong>Native Name</strong> : {data.nativeName} <span />
              </li>
              <li className="population">
                <strong>Population</strong> : {data.population} <span />
              </li>
              <li className="region">
                <strong>Region</strong> : {data.region} <span />
              </li>
              <li className="subregion">
                <strong>Sub Region</strong> : {data.subRegion}<span />
              </li>
              <li className="capital">
                <strong>Capital</strong> : {data.capital}<span />
              </li>
              <li className="topLavelDomain">
                <strong>Top Label Domain</strong> : {data.topDomain} <span />
              </li>
              <li className="currency">
                <strong>Currencies</strong> : {data.currencies} <span />
              </li>
              <li className="language">
                <strong>Languages</strong> : {data.languages} <span />
              </li>
            </ul>
            <div className="borderCountrien">
              {/* <div className="borderText">Border</div> */}
              <ul>
                {
                data.border.map((brd)=>{
                  return <li key={brd}><Link to={`/${brd}`}>{brd}</Link></li>
                })
                }</ul>
            </div>
          </div>
        </div>
       

    </div>

{relatedBorder.length?
<div className='relatedProduct'>
  <div className='view'>
    <h2>Relate Country</h2>
        <div className='countryList'>
          
          {
             relatedBorder.slice(0, 4).map((data)=>{
              return(
                <>
                <CountryCard data={data} />
                </>
              )
            })
          }

        </div>
        </div>
        </div>
        :null
}
    </>
  )
}
