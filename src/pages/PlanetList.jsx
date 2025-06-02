// Import necessary components from react-router-dom and other parts of the application.
import { Link } from 'react-router-dom';
import useGlobalReducer from '../hooks/useGlobalReducer'; // Custom hook for accessing the global state.
import { FaRegHeart } from 'react-icons/fa';

export const PlanetList = () => {
  // Access the global state and dispatch function using the useGlobalReducer hook.
  const { store, dispatch } = useGlobalReducer();

  return (
    <>
      <section className="d-flex">
        <h2 className="ps-4">Planets</h2>
      </section>
      <div className="ps-4 d-flex gap-4 flex-nowrap overflow-x-scroll pe-4">
        {/* Map over the 'todos' array from the store and render each item as a list element */}
        {store &&
          store.planets?.map((planet) => {
            return (
              <div key={planet.uid}>
                <div className="card" style={{ width: '18rem' }}>
                  <img
                    src="https://placehold.co/400x200"
                    className="card-img-top"
                    alt={planet.description}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{planet.properties.name}</h5>
                    <p className="card-text">
                      Capacity:{planet.properties.cargo_capacity}
                    </p>
                    <p className="card-text">
                      Passengers:{planet.properties.passengers}
                    </p>
                    <p className="card-text">Model:{planet.properties.model}</p>
                    <p className="card-text">
                      Mfr:{planet.properties.manufacturer}
                    </p>
                    <div className="button-wrap d-flex align-items-center justify-content-evenly">
                      <a href="#" className="btn btn-outline-primary btn-sm">
                        Learn More
                      </a>
                      <FaRegHeart />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </> // jsx wrap
  );
};
