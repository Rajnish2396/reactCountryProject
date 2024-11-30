import React from 'react'
import "./CountryLoader.css"

export default function CountryLoader() {
  const myArr = Array.from({ length: 8 });
  return (
    <>

    <div className='countryList view' key={Math.random()}>
    {
      myArr.map((x, index)=>{
        return(<>
        <div key={index} className='loaderCard'>
        <div className='loaderCardImage'></div>
        <div className='loaderHeading'></div>
        <p className='loaderContent'></p>
        <p className='loaderContent'></p>
        <p className='loaderContent'></p>
        <p className='loaderContent'></p>
        <p className='loaderContent'></p>
        <p className='loaderContent'></p>
        <p className='loaderContent'></p>
        <p className='loaderContent'></p>
        <p className='loaderContent'></p>
        <p className='loaderContent'></p>
        <p className='loaderContent'></p>
        <p className='loaderContent'></p>
        <p className='loaderContent' style={{width:"50%"}}></p>
      </div>
        </>)
      })
    }



      

    </div>
  
    </>
  )
}
