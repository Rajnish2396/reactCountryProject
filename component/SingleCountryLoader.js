import React from 'react'
import './CountryLoader.css'
export default function SingleCountryLoader() {
  return (
    <div className='view'>
    <div className='countryDtails'>
        <div className='detailsPageLoaderImage detailsLoaderImage'></div>
        <div className='countryInformration'>
            <div className='loaderCardDtlCont'>
        <div className='loaderHeading'></div>
        <div className='loaderList'>
        <p className='loaderContent'></p>
        <p className='loaderContent'></p>
        <p className='loaderContent'></p>
        <p className='loaderContent' style={{width:"50%"}}></p>
        </div>
        </div>
        </div>

    </div>
    </div>
  )
}
