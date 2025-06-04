// Import necessary components from react-router-dom and other parts of the application.
import { Link } from 'react-router-dom';
import useGlobalReducer from '../hooks/useGlobalReducer'; // Custom hook for accessing the global state.
import { FaRegHeart } from 'react-icons/fa';

export const VehicleList = () => {
  // Access the global state and dispatch function using the useGlobalReducer hook.
  const { store, dispatch } = useGlobalReducer();

  return (
    <>
      <section className="d-flex">
        <h2 className="ps-4">Vehicles</h2>
      </section>
      <div className="ps-4 d-flex gap-4 flex-nowrap overflow-x-scroll pe-4">
        {/* Map over the 'todos' array from the store and render each item as a list element */}
        {store &&
          store.vehicles?.map((vehicle) => {
            return (
              <div key={vehicle.uid}>
                <div className="card" style={{ width: '18rem' }}>
                  <img
                    src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/vehicles/${vehicle.uid}.jpg?raw=true`}
                    className="card-img-top"
                    alt={vehicle.name}
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
                      Mfr:{vehicle.properties.manufacturer}
                    </p>
                    <div className="button-wrap d-flex align-items-center justify-content-evenly">
                      <a href="#" className="btn btn-outline-primary btn-sm">
                        Learn More
                      </a>
                      <FaRegHeart
                        onClick={() =>
                          dispatch({
                            type: 'toggle_fav',
                            payload: vehicle,
                          })
                        }
                      />
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
