// Import necessary components from react-router-dom and other parts of the application.
import { Link } from 'react-router-dom';
import useGlobalReducer from '../hooks/useGlobalReducer'; // Custom hook for accessing the global state.
import { useEffect } from 'react';
import { LuPlaneTakeoff } from 'react-icons/lu';

export const PeopleList = () => {
  // Access the global state and dispatch function using the useGlobalReducer hook.
  const { store, dispatch } = useGlobalReducer();

  // https://github.com/breatheco-de/swapi-images/blob/master/public/images/planets/11.jpg?raw=true

  return (
    <div className="container">
      <ul className="list-group">
        <h2>Characters</h2>
        {/* Map over the 'people' array from the store and render each person as a card element */}
        {/* BUILD THE PERSON CARD! */}
        {store &&
          store.people.map((person) => {
            return (
              <li
                key={person.uid} // React key for list items.
                className="list-group-item d-flex justify-content-between"
                style={{ background: person.background }}
              >
                {/* Link to the detail page of this todo. */}
                <Link to={'/person/' + person.uid}>
                  Link to: {person.properties.title}{' '}
                </Link>
                <h1>{person.properties.name}</h1>
              </li>
            );
          })}
      </ul>
      <div
        className="card"
        style={{ width: '18rem' }}
        // <img src="..." className="card-img-top" alt="..."/>
      >
        <div className="card-body">
          <h5 className="card-title">Card Title</h5>
          <p className="card-text">Some Card Text</p>
          <div className="d-flex align-items-center justify-content between">
            <Link href="#" className="btn btn-primary">
              Link to Someplace
            </Link>
          </div>
        </div>
      </div>
      <br />

      <Link to="/">
        <button className="btn btn-primary">Back home</button>
      </Link>
    </div>
  );
};
