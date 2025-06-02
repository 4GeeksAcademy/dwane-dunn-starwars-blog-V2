// Import necessary components from react-router-dom and other parts of the application.
import { Link } from 'react-router-dom';
import useGlobalReducer from '../hooks/useGlobalReducer'; // Custom hook for accessing the global state.
import { useEffect } from 'react';
import { LuPlaneTakeoff } from 'react-icons/lu';
import { FaRegHeart } from 'react-icons/fa';

export const PeopleList = () => {
  // Access the global state and dispatch function using the useGlobalReducer hook.
  const { store, dispatch } = useGlobalReducer();

  // https://github.com/breatheco-de/swapi-images/blob/master/public/images/planets/11.jpg?raw=true

  return (
    <>
      <div className="container-fluid border border-success">
        <h2 className="">Planets</h2>
      </div>
      <div className="d-flex justify-content-around flex-nowrap border border-danger">
        {store &&
          store.people.map((person) => {
            return (
              <div>
                <div style={({ width: '400px' }, { height: '200px' })}>
                  <img src="https://placehold.co/400x200" alt="PLacehold" />
                </div>
                <div>
                  <p>Gender:</p>
                  <p>Hair Color:</p>
                  <p>Eye Color:</p>
                </div>
                <div>
                  <button>Learn More</button>
                  <FaRegHeart />
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};
