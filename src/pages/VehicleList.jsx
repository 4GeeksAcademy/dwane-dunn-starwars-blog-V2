// Import necessary components from react-router-dom and other parts of the application.
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.

export const VehicleList = () => {
  // Access the global state and dispatch function using the useGlobalReducer hook.
  const { store, dispatch } = useGlobalReducer()


   const fetchVehicles = async () => {
    try {
        const api_url = `https://www.swapi.tech/api/vehicles?page=1&limit=8&expanded=true`;
        const response = await fetch(`{api_url}`);
        const result = await response.json();
       dispatch({
        type: "set_Vehicles",
        payload: result.results
       })
    } catch (error){
      // set error if there was one
    } finally {
      // run anything else here
    }
  
    useEffect(()=> {
      fetchVehicles();
    }, []);


  return (
    <div className="container">
      <ul className="list-group">
        {/* Map over the 'todos' array from the store and render each item as a list element */}
        {store && store.vehicles?.map((vehicle) => {
          return (
            <li
              key={item.id}  // React key for list items.
              className="list-group-item d-flex justify-content-between"
              style={{ background: item.background }}> 
              
              {/* Link to the detail page of this todo. */}
              <Link to={"/vehicle/" + vehicle.uid}>Link to: {vehicle.title} </Link>
              
              <p>Open file ./store.js to see the global store that contains and updates the list of colors</p>
              
              {/* <button className="btn btn-success" 
                onClick={() => dispatch({
                  type: "add_task", 
                  payload: { id: item.id, color: '#ffa500' }
                })}>
                Change Color
              </button> */}
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
}
};
