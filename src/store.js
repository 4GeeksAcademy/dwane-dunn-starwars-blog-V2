export const initialStore = () => {
  return {
    message: null,
    todos: [
      {
        id: 1,
        title: 'Make the bed',
        background: null,
      },
      {
        id: 2,
        title: 'Do my homework',
        background: null,
      },
    ],
    people: [],
    planets: [],
    vehicles: [],
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'set_people':
      return {
        ...store,
        people: action.payload,
      };

    case 'set_planets':
      return {
        ...store,
        planets: action.payload,
      };

    case 'set_vehicles':
      return {
        ...store,
        vehicles: action.payload,
      };

    default:
      throw Error('Unknown action.');
  }
}
