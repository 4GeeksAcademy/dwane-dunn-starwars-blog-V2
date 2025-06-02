// Import necessary components from react-router-dom and other parts of the application.
import { Link } from 'react-router-dom';
import useGlobalReducer from '../hooks/useGlobalReducer'; // Custom hook for accessing the global state.
import { FaRegHeart } from 'react-icons/fa';

export const VehicleList = () => {
  // Access the global state and dispatch function using the useGlobalReducer hook.
  const { store, dispatch } = useGlobalReducer();

  return (
    <div className="container">
      <ul className="list-group">
        <h2 className="text-align-left">Vehicles</h2>
        {/* Map over the 'todos' array from the store and render each item as a list element */}
        {store &&
          store.vehicles?.map((vehicle) => {
            return (
              <div key={vehicle.uid}>
                <div className="card" style={{ width: '18rem' }}>
                  <img
                    src="https://placehold.co/400x200"
                    className="card-img-top"
                    alt={vehicle.description}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{vehicle.properties.name}</h5>
                    <p className="card-text">
                      Capacity:{vehicle.properties.cargo_capacity}
                    </p>
                    <p className="card-text">
                      Passengers:{vehicle.properties.passengers}
                    </p>
                    <p className="card-text">
                      Model:{vehicle.properties.model}
                    </p>
                    <p className="card-text">
                      Mfr:{vehicle.properties.manufacturerer}
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
      </ul>
      <br />
    </div>
  );
};
