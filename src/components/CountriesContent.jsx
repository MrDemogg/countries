import React from 'react';
import {Card} from "react-bootstrap";

const CountriesContent = ({selectedCountry, error, selectedCountryInfo}) => {
  return (
    <Card style={{width: '90%'}}>
      <Card.Body>
        <div style={{width: '90%', display: 'flex', justifyContent: 'space-between'}}>
          <div>
            <h1>{selectedCountry}</h1>
            {!error
              && <div style={{display: 'flex', flexDirection: 'column'}}>
                <b>Capital:</b> {selectedCountryInfo.capital}
                <b>Population:</b>{selectedCountryInfo.population}
                <b>Cca2:</b> {selectedCountryInfo.cca2}
                <b>Cca3:</b> {selectedCountryInfo.cca3}
              </div>
            }
          </div>
          {!error
            && <img style={{width: '400px'}} src={selectedCountryInfo.flag} alt='Флаг страны' />
          }
        </div>
        <b>Border with:</b>
        <ul>
          {selectedCountryInfo.borders.length === 0
            ? <b>Сountry has no borders with countries</b>
            : selectedCountryInfo.borders.map((border) => {
              return <p key={border}>{border}</p>
            })
          }
        </ul>
      </Card.Body>
    </Card>
  );
}

export default CountriesContent;