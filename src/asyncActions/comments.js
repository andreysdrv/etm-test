import api from '../utils/Api';

export const fetchComments = id => {
  return function (dispatch) {
    api
      .getComments(id)
      .then(comments => dispatch({type: 'GET_COMMENTS', payload: comments}))
      .catch(err => console.log(err))
      .finally(() => dispatch({type: 'TOGGLE_LOADING', payload: false}));
  };
};
