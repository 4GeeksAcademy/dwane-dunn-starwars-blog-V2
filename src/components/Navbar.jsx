import useGlobalReducer from '../hooks/useGlobalReducer'; // Custom hook for accessing the global state.

import { Link } from 'react-router-dom';
import { FaRegTrashAlt } from 'react-icons/fa';

const handleDeleteFavorite = (id) => {
  dispatchEvent({ type: 'deleted_favorite', id });
};

export const Navbar = () => {
  const { store, dispatch } = useGlobalReducer();
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">Starwars</span>
        </Link>
        <div className="ml-auto">
          {/* <Link to="/"> */}

          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites
            <span className="badge bg-secondary">{store.favorites.length}</span>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            {store.favorites.map((favorite) => {
              return (
                <li key={favorite.uid}>
                  <a className="dropdown-item" href="#">
                    {favorite.properties.name}
                    <FaRegTrashAlt
                      onClick={() =>
                        dispatch({
                          type: 'toggle_fav',
                          payload: person,
                        })
                      }
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
