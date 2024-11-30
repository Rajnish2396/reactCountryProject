import { useState, useEffect, useMemo } from 'react';
import CountryCard from './CountryCard';
import Loader from './Loader';
import CountryLoader from './CountryLoader';

export default function CountryList({ selectData, countryList, inputValue, getRegion }) {
  
  const [regionList, setRegionList] = useState([]);

 
  useEffect(() => {
    const uniqueRegions = [...new Set(countryList?.map((countryItem) => countryItem.region))];
    setRegionList(uniqueRegions);
  }, [countryList]);

  useEffect(() => {
    getRegion(regionList);
  }, [regionList, getRegion]);

  const filteredCountries = useMemo(() => {
    return countryList?.filter((countryItem) => {
      if (selectData.length !== 0) {
        return countryItem.region.includes(selectData);
      }
      if (inputValue.length !== 0) {
        return (
          countryItem.name.common.toLowerCase().includes(inputValue.toLowerCase()) 
        );
      }
      return true;
    });
  }, [countryList, selectData, inputValue]);


  return (
    
    <div className="countryList view">
      {filteredCountries? (
        (
          filteredCountries.map((countryItem, index) => (
            <CountryCard key={countryItem.name.common || index} data={countryItem} />
          ))
        )
      ) : <CountryLoader />}
    </div>
  );
 
}
