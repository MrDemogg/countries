import React from 'react';
import CountriesList from "./CountriesList";
import CountriesContent from "./CountriesContent";
import {Card} from "react-bootstrap";

const CountriesMain = ({selectedCountry, setSelectedCountry, countriesList, error, errorText, selectedCountryInfo, getCountriesAll}) => {
  return (
    <Card>
      <Card.Body style={{display: 'flex', justifyContent: 'space-between'}}>
        {error
          ? <h1 style={{textAlign: 'center'}}>{errorText}</h1>
          : <CountriesList
            setSelectedCountry={setSelectedCountry}
            countriesList={countriesList}
            getCountriesAll={getCountriesAll}
          />
        }
        {selectedCountry !== ''
          ? <CountriesContent
            selectedCountry={selectedCountry}
            error={error}
            selectedCountryInfo={selectedCountryInfo}
          ></CountriesContent>
          : <h1 style={{position: 'relative', right: '700px'}}>Сhoose a country</h1>
        }
      </Card.Body>
    </Card>
  );
};

export default CountriesMain;