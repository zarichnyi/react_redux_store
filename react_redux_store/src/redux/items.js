const initialState = [];

const SET_ITEMS = 'setItems';

export const setItems = (items) => ({
  type: SET_ITEMS,
  items,
});

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS:
      return action.items;
    default:
      return state;
  }
};

export default itemsReducer;
