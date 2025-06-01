// Import necessary components from react-router-dom and other parts of the application.
import { Link } from 'react-router-dom';
import useGlobalReducer from '../hooks/useGlobalReducer'; // Custom hook for accessing the global state.

export const PlanetList = () => {
  // Access the global state and dispatch function using the useGlobalReducer hook.
  const { store, dispatch } = useGlobalReducer();

  return (
    <div className="container">
      <ul className="list-group">
        {/* Map over the 'todos' array from the store and render each item as a list element */}
        {store &&
          store.planets?.map((planet) => {
            return (
              <li
                key={planet.properties.id} // React key for list items.
                className="list-group-item d-flex justify-content-between"
                // style={{ background: item.background }}
              >
                {/* Link to the detail page of this todo. */}
                <Link to={'/planets/' + planet.properties.uid}>
                  Link to: {planet.properties.name}{' '}
                </Link>
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
