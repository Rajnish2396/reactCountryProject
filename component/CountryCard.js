import { Link, useNavigate } from "react-router";

export default function CountryCard({data}) {

  
    return(
      
        <>
      
          <div className="countryCard" key={Math.random()}>
            <Link to={`/${data.name.common}`}  state={data}>
              <div className="countryImage">
                <img src={data.flags.svg} width="100%" />
              </div>
              <div className="countryInfo">
                <div className="countryName">{data.name.common}</div>
                <p><strong>Population</strong> : {data.population.toLocaleString('en-IN')}</p>
                <p><strong>Region</strong> : {data.region}</p>
                <p><strong>Capital</strong> : {data.capital}</p>
              </div>
            </Link>
          </div>
        </>
      
  )
}
