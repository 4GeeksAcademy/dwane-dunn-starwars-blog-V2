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
    favorites: [],
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
    case 'toggle_fav':
      const alreadyFavorited = store.favorites.includes(action.payload);
      return {
        ...store,
        favorites: alreadyFavorited
          ? store.favorites.filter((obj) => obj !== action.payload)
          : [...store.favorites, action.payload],
      };

    default:
      throw Error('Unknown action.');
  }
}
