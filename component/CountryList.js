import CountryCard from './CountryCard';
import CountryLoader from './CountryLoader'

export default function CountryList({ selectData, countryList, inputValue }) {

  // Select and Input Filter
  const filteredCountries = countryList?.filter((countryItem) => {
    if (selectData) {
      return countryItem.region.includes(selectData)
    }
    if (inputValue) {
      return countryItem.name.common.toLowerCase().includes(inputValue.toLowerCase()) || countryItem.region.toLowerCase().includes(inputValue.toLowerCase());
    }
  }) || []

  return (
    <>
      {/* <CountryLoader /> */}
      <div className="countryList view">
        {
          filteredCountries.length === 0 ? <CountryLoader /> : filteredCountries.map((countryItem, index) => <CountryCard key={countryItem.name.common || index} data={countryItem} />)
        }
      </div>
    </>
  )
}
