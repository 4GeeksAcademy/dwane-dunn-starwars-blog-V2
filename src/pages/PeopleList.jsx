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
        <h2 className="">Characters</h2>
      </div>
      <div className="d-flex gap-4 justify-content-around flex-nowrap border border-danger">
        {store &&
          store.people.map((person) => {
            return (
              <div key={person.uid}>
                <div class="card" style={{ width: '18rem' }} key={person.uid}>
                  <img
                    src="https://placehold.co/400x200"
                    class="card-img-top"
                    alt={person.name}
                  />
                  <div class="card-body">
                    <h5 class="card-title">{person.description}</h5>
                    <p class="card-text">Name:{person.properties.name}</p>
                    <p class="card-text">Gender:{person.properties.gender}</p>
                    <p class="card-text">
                      Hair Color:{person.properties.hair_color}
                    </p>
                    <p class="card-text">
                      Eye Color:{person.properties.eye_color}
                    </p>
                    <div className="button-wrap d-flex align-items-center justify-content-evenly">
                      <a href="#" class="btn btn-outline-primary btn-sm">
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
    </>
  );
};
