import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Starwars</span>
				</Link>
				<div className="ml-auto">
					<Link to="/">
						<button
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Favorites <span className="badge bg-secondary">1</span>
            </button>
					</Link>
				</div>
			</div>
		</nav>
	);
};