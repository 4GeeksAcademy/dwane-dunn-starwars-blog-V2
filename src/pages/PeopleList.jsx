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
      <section className="d-flex">
        <h2 className="ps-4">Characters</h2>
      </section>
      <div className="ps-4 d-flex gap-4 flex-nowrap overflow-x-scroll pe-4">
        {store &&
          store.people.map((person) => {
            return (
              <div key={person.uid}>
                <div
                  className="card"
                  style={{ width: '18rem' }}
                  key={person.uid}
                >
                  <img
                    src="https://placehold.co/400x200"
                    className="card-img-top"
                    alt={person.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{person.description}</h5>
                    <p className="card-text">Name:{person.properties.name}</p>
                    <p className="card-text">
                      Gender:{person.properties.gender}
                    </p>
                    <p className="card-text">
                      Hair Color:{person.properties.hair_color}
                    </p>
                    <p className="card-text">
                      Eye Color:{person.properties.eye_color}
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
    </>
  );
};
