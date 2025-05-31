// Import necessary components from react-router-dom and other parts of the application.
import { Link } from 'react-router-dom';
import useGlobalReducer from '../hooks/useGlobalReducer'; // Custom hook for accessing the global state.
import { useEffect } from 'react';

export const PeopleList = () => {
  // Access the global state and dispatch function using the useGlobalReducer hook.
  const { store, dispatch } = useGlobalReducer();

  // https://github.com/breatheco-de/swapi-images/blob/master/public/images/planets/11.jpg?raw=true

  const fetchPeople = async () => {
    try {
      const api_url = `https://www.swapi.tech/api/people?page=1&limit=8&expanded=true`;
      const response = await fetch(`${api_url}`);
      const result = await response.json();
      console.log('result:', result.results);
      dispatch({
        type: 'set_people',
        payload: result.results,
      });
    } catch (error) {
      // set error if there was one
    } finally {
      // run anything else here
    }

    useEffect(() => {
      fetchPeople();
    }, []);

    return (
      <div className="container">
        <h1>People List</h1>
        <ul className="list-group">
          {/* Map over the 'people' array from the store and render each person as a card element */}
          {/* BUILD THE PERSON CARD! */}
          {store &&
            store.people?.map((person) => {
              return (
                <li
                  key={person.uid} // React key for list items.
                  className="list-group-item d-flex justify-content-between"
                  style={{ background: person.background }}
                >
                  {/* Link to the detail page of this todo. */}
                  <Link to={'/person/' + person.uid}>
                    Link to: {person.title}{' '}
                  </Link>

                  <p>
                    Open file ./store.js to see the global store that contains
                    and updates the list of colors
                  </p>

                  {/* <button className="btn btn-success"
                onClick={() => dispatch({
                  type: "add_task",
                  payload: { id: item.id, color: '#ffa500' }
                })}>
                Change Color
              </button> */}
                </li>
              );
            })}
        </ul>
        <br />

        <Link to="/">
          <button className="btn btn-primary">Back home</button>
        </Link>
      </div>
    );
  };
};
