// Import necessary hooks and components from react-router-dom and other libraries.
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'; // To use link for navigation and useParams to get URL parameters
import PropTypes from 'prop-types'; // To define prop types for this component
import rigoImageUrl from '../assets/img/rigo-baby.jpg'; // Import an image asset
import useGlobalReducer from '../hooks/useGlobalReducer'; // Import a custom hook for accessing the global state

// Define and export the Single component which displays individual item details.
export const Planet = () => {
  const { uid } = useParams();
  const planetDetail = async () => {
    const response = await fetch(`https://www.swapi.tech/api/planets/${uid}`);
    const data = await response.json();
    setPlanet(data.result.properties);
  };
  // Access the global state using the custom hook.
  const { store } = useGlobalReducer();
  const [planet, setPlanet] = useState({});
  useEffect(() => {
    planetDetail();
  }, [uid]);

  return (
    <div className="container text-center">
      <h1>{planet.name}</h1>
      <p>Climate: {planet.climate}</p>
      <p>Orbital Period: {planet.orbital_period}</p>
      <p>Population: {planet.population}</p>
      <p>Terrain: {planet.terrain}</p>
      <Link to="/">
        <span className="btn btn-primary btn-lg" href="#" role="button">
          Back home
        </span>
      </Link>
    </div>
  );
};
