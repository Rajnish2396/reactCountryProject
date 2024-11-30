import { useState, useEffect } from 'react';
import CountryCard from './CountryCard';
import FilterContainer from './FilterContainer';
import ApiFetching from './ApiFetching';
import CountryLoader from './CountryLoader';

export default function Home() {
  const [countryList, setCountryList] = useState([]);
  const [regionList, setRegionList] = useState([]);
  const [selectData, setSelectData] = useState('');
  const [inputValue, setInpValue] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    ApiFetching(`https://restcountries.com/v3.1/all`)
      .then((data) => {
        const regions = [...new Set(data.map((item) => item.region))];
        setRegionList(regions);
        setCountryList(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch country data");
        setIsLoading(false);
      });
  }, []);

  const filteredCountries = countryList?.filter((countryItem) => {
    if (selectData) {
      return countryItem.region.includes(selectData);
    }
    if (inputValue) {
      return (
        countryItem.name.common.toLowerCase().includes(inputValue.toLowerCase()) ||
        countryItem.region.toLowerCase().includes(inputValue.toLowerCase())
      );
    }
    return true;
  }) || [];

  return (
    <>
      <FilterContainer 
            selectHandler={setSelectData} 
            getInputValue={setInpValue} 
            regionList={regionList} 
          />
          
      {isLoading && <CountryLoader />}
      {error && <p>{error}</p>}
      {!isLoading && !error && (
        <>

        

          <div className="countryList view">
            {filteredCountries.length === 0 ? (
              <p>No countries found. Try adjusting your search or filter.</p>
            ) : (
              filteredCountries.map((countryItem, index) => (
                <CountryCard 
                  key={countryItem.name.common || index} 
                  data={countryItem} 
                />
              ))
            )}
          </div>
        </>
      )}
    </>
  );
}
