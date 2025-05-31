import React, { useState, useEffect } from 'react';
import useGlobalReducer from '../hooks/useGlobalReducer.jsx';
// My Custom Pages
import { PeopleList } from './PeopleList.jsx';
import { Planets } from './Planets.jsx';
import { VehicleList } from './VehicleList.jsx';

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();
  const [loading, setLoading] = useState(true);
  const fetchPeople = async () => {
    try {
      const api_url = `https://www.swapi.tech/api/people?page=1&limit=8&expanded=true`;
      const response = await fetch(api_url);
      const result = await response.json();
      console.log('result:', result.results);
      dispatch({
        type: 'set_people',
        payload: result.results,
      });
    } catch (error) {
      // set error if there was one
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPeople();
    console.log('store.people:', store.people);
  }, []);
  // if (loading) {
  //   return <div className="text-center mt-5">Loading...</div>;
  // }
  return (
    <div className="text-center mt-5">
      <h1>Starwars Blog List - Yes?</h1>

      <PeopleList />
      <Planets />
      <VehicleList />
    </div>
  );
};
