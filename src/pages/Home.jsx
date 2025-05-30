// import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
// My Custom Pages
import { PeopleList } from "./PeopleList.jsx";
import {Planets} from './Planets.jsx'
import { VehicleList } from "./VehicleList.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="text-center mt-5">
			<h1>Starwars Blog List</h1>
			
			<PeopleList/>
			<Planets/>
			<VehicleList/>
		</div>
	);
}; 