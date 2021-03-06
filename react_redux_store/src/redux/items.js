const initialState = [];

const SET_ITEMS = 'setItems';
const ADD_ITEM = 'addItem';
const REMOVE_ITEM = 'removeItem';
const CLEAR_CATALOG = 'clearCatalog';

export const setItems = items => ({
  type: SET_ITEMS,
  items,
});

export const addItem = item => ({
  type: ADD_ITEM,
  item,
});

export const removeItem = id => ({
  type: REMOVE_ITEM,
  id,
});

export const clearCatalog = () => ({
  type: CLEAR_CATALOG,
});

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS:
      return action.items;

    case ADD_ITEM: {
      const result = [...state, action.item];

      localStorage.setItem('items', JSON.stringify(result));

      return result;
    }

    case REMOVE_ITEM: {
      const result = state.filter(item => item.id !== action.id);

      if (result.length === 0) {
        localStorage.setItem('emptyStorage',
          JSON.stringify(['Catalog are currently empty']));
      }

      localStorage.setItem('items', JSON.stringify(result));

      return result;
    }

    case CLEAR_CATALOG:
      localStorage.setItem('emptyStorage',
        JSON.stringify(['Catalog are currently empty']));
      localStorage.removeItem('items');

      return [];

    default:
      return state;
  }
};

export default itemsReducer;
