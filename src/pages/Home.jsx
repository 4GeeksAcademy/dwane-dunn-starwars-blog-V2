import React, { useState, useEffect } from 'react';
import useGlobalReducer from '../hooks/useGlobalReducer.jsx';
// My Custom Pages
import { PeopleList } from './PeopleList.jsx';
import { PlanetList } from './PlanetList.jsx';
import { VehicleList } from './VehicleList.jsx';

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();
  const [loading, setLoading] = useState(true);

  // Function to fetch people data from the Star Wars API

  const fetchPeople = async () => {
    try {
      const api_url = `https://www.swapi.tech/api/people?page=1&limit=8&expanded=true`;
      const response = await fetch(api_url);
      const result = await response.json();
      // console.log('result:', result.results);
      dispatch({
        type: 'set_people',
        payload: result.results,
      });
    } catch (error) {
      // set error if there was one
    } finally {
      // setLoading(false);
    }
  };

  // Function to fetch planets data from the Star Wars API
  const fetchPlanets = async () => {
    try {
      const api_url = `https://www.swapi.tech/api/planets?page=1&limit=8&expanded=true`;
      const response = await fetch(api_url);
      const result = await response.json();
      // console.log('result:', result.results);
      dispatch({
        type: 'set_planets',
        payload: result.results,
      });
    } catch (error) {
      // set error if there was one
    } finally {
      // setLoading(false);
    }
  };

  // Vehicles data from the Star Wars API
  const fetchVehicles = async () => {
    try {
      const api_url = `https://www.swapi.tech/api/vehicles?page=1&limit=8&expanded=true`;
      const response = await fetch(api_url);
      const result = await response.json();
      // console.log('result:', result.results);
      dispatch({
        type: 'set_vehicles',
        payload: result.results,
      });
    } catch (error) {
      // set error if there was one
    } finally {
      // setLoading(false);
    }
  };

  useEffect(() => {
    fetchPeople(); // Get the people data
    fetchPlanets(); // Get the planets data
    fetchVehicles(); // Get the vehicles data
    // console.log('store.people:', store.people);
    // console.log('store.planets:', store.planets);
    // console.log('store.vehicles:', store.vehicles);
  }, []);
  console.log('store:', store);
  return (
    <div className="text-center mt-5">
      <PeopleList />
      <PlanetList />
      <VehicleList />
    </div>
  );
};
