const initialState = 'user';

const SET_USER = 'setUser';

export const setUser = user => ({
  type: SET_USER,
  user,
});

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      localStorage.setItem('user', JSON.stringify(action.user));

      return action.user;

    default:
      return state;
  }
};

export default usersReducer;
