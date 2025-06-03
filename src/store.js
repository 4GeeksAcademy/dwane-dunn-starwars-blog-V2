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
    favorites: [
      {
        id: 1,
        name: 'Steve Hawk',
        delete: Trash,
      },
    ],
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
    case 'add_favorites':
      return {
        ...store,
        favorites: action.payload,
      };
    case 'deleted_favorite':
    // return favorites.filter((favorite) => favorite.id ! action.id);

    default:
      throw Error('Unknown action.');
  }
}
