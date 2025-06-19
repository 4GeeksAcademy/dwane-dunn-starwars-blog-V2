// Import necessary hooks and components from react-router-dom and other libraries.
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'; // To use link for navigation and useParams to get URL parameters
import PropTypes from 'prop-types'; // To define prop types for this component

import useGlobalReducer from '../hooks/useGlobalReducer'; // Import a custom hook for accessing the global state

// Define and export the Single component which displays individual item details.

export const Person = () => {
  const { uid } = useParams();
  const personDetail = async () => {
    const response = await fetch(`https://www.swapi.tech/api/people/${uid}`);
    const data = await response.json();
    setPerson(data.result.properties);
  };
  // Access the global state using the custom hook.
  const { store } = useGlobalReducer();
  const [person, setPerson] = useState({});
  useEffect(() => {
    personDetail();
  }, [uid]);

  return (
    <div className="container text-center">
      <h1>{person.name}</h1>
      <Link to="/">
        <span className="btn btn-primary btn-lg" href="#" role="button">
          Back home
        </span>
      </Link>
    </div>
  );
};
