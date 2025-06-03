import useGlobalReducer from '../hooks/useGlobalReducer'; // Custom hook for accessing the global state.

import { Link } from 'react-router-dom';
import { FaRegTrashAlt } from 'react-icons/fa';

const handleDeleteFavorite = (id) => {
  dispatchEvent({ type: 'deleted_favorite', id });
};

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">Starwars</span>
        </Link>
        <div className="ml-auto">
          {/* <Link to="/"> */}
          {/* <FaRegTrashAlt /> */}
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites <span className="badge bg-secondary">1</span>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
          {/* </Link> */}
        </div>
      </div>
    </nav>
  );
};
