import './App.css';
import CountriesMain from "./components/CountriesMain";
import {useEffect, useState} from "react";
import CountryNameService from "./API/CountryNameService";
import CountryAllService from "./API/CountryAllService";

function App() {
  const [countriesList, setCountriesList] = useState([])
  const [selectedCountry, setSelectedCountry] = useState('')
  const [error, setError] = useState(false)
  const [errorText, setErrorText] = useState('')
  const [selectedCountryInfo, setSelectedCountryInfo] = useState({
    flag: '',
    capital: '',
    population: 0,
    cca2: '',
    cca3: '',
    borders: []
  })
  const getCountries = async () => {
    const [gettedCountries, response] = await CountryNameService.getAll()
    setCountriesList(gettedCountries)
    console.log(response)
    return response
  }
  const getCountriesAll = async (country) => {
    country = country.split(',')[0].replace(/ /g, '%20')
    const gettedCountry = await CountryAllService.getAll(country)
    if (gettedCountry[0].borders) {
      setSelectedCountryInfo({
        flag: gettedCountry[0].flags.svg,
        capital: gettedCountry[0].capital,
        population: gettedCountry[0].population,
        cca2: gettedCountry[0].cca2,
        cca3: gettedCountry[0].cca3,
        borders: gettedCountry[0].borders
      })
    } else {
      setSelectedCountryInfo({
        flag: gettedCountry[0].flags.svg,
        capital: gettedCountry[0].capital,
        population: gettedCountry[0].population,
        cca2: gettedCountry[0].cca2,
        cca3: gettedCountry[0].cca3,
        borders: []
      })
    }
    return gettedCountry
  }
  useEffect(() => {
    getCountries().then((response) => {
      if (response.status === 200) {
        setError(false)
        setErrorText('')
      }
    }).catch((err) => {
      setError(true)
      setErrorText(`Ошибка: ${err.message}`)
    })
  }, [])

  return (
    <CountriesMain
      selectedCountry={selectedCountry}
      setSelectedCountry={setSelectedCountry}
      countriesList={countriesList}
      setCountriesList={setCountriesList}
      error={error}
      errorText={errorText}
      selectedCountryInfo={selectedCountryInfo}
      getCountriesAll={getCountriesAll}
    ></CountriesMain>
  )
}

export default App;
