import axios from 'axios';

export const fetchUsers = () => {
  return (dispatch) => {
    axios
      .get('https://reqres.in/api/users')
      .then((response) => {
        dispatch({ type: 'FETCH_USERS_SUCCESS', payload: response.data.data, total: response.data.total });
      })
      .catch((error) => {
        dispatch({ type: 'FETCH_USERS_ERROR', payload: error });
      });
  };
};

export const fetchSingleUser = (id) => {
  return (dispatch) => {
    axios
      .get(`https://reqres.in/api/users/${id}`)
      .then((response) => {
        dispatch({ type: 'FETCH_SINGLE_USER_SUCCESS', payload: response.data.data });
      })
      .catch((error) => {
        dispatch({ type: 'FETCH_SINGLE_USER_ERROR', payload: error });
      });
  };
};
