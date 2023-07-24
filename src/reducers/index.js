const initialState = {
    total:[],
    users: [],
    userData: null,
    error: null,
  };
  
  function reducer(state = initialState, action) {
    switch (action.type) {
      case 'FETCH_USERS_SUCCESS':
        return {
          ...state,
          users: action.payload,
          total: action.total,
          error: null,
        };
      case 'FETCH_USERS_ERROR':
        return {
          ...state,
          users: [],
          error: action.payload,
        };
      case 'FETCH_SINGLE_USER_SUCCESS':
        return {
          ...state,
          userData: action.payload,
          error: null,
        };
      case 'FETCH_SINGLE_USER_ERROR':
        return {
          ...state,
          userData: null,
          error: action.payload,
        };
      default:
        return state;
    }
  }
  
  export default reducer;
  