const INITIAL_STATE = {
  userCredentials: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_CREDENTIALS':
      return { ...state, userCredentials: action.payload };

    default:
      return state;
  }
};
