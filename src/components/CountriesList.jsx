import React from 'react';
import {Card, ListGroup} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const CountriesList = ({countriesList, setSelectedCountry, getCountriesAll}) => {
  return (
    <Card style={{width: '18rem'}}>
      <Card.Body>
        <ListGroup style={{overflowY: 'scroll', height: '93vh'}}>
          {countriesList.map((country) => {
            return <ListGroup.Item
              key={country.name.common}
              action
              variant='info'
              onClick={() => {
                setSelectedCountry(country.name.common)
                console.log(getCountriesAll(country.name.common))
              }}
            >{country.name.common}</ListGroup.Item>
          })}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default CountriesList;