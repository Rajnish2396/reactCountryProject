import React from 'react'
import "./page404.css"

export default function Page404({data}) {
  return (
    <div className='view'>
        <div className='page404'>
            <h1><span>404</span>{data} </h1>
            <div>
                Your Data Not Found
            </div>
        </div>

    </div>
  )
}
