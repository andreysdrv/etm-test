import api from '../utils/Api';

export const fetchPosts = (start, limit) => {
  return function (dispatch) {
    api
      .getPosts(start, limit)
      .then(posts => dispatch({type: 'GET_POSTS', payload: posts}))
      .catch(err => console.log(err))
      .finally(() => dispatch({type: 'TOGGLE_LOADING', payload: false}));
  };
};

export const removePost = post => {
  return function (dispatch) {
    api
      .deletePost(post.id)
      .then(() => dispatch({type: 'REMOVE_POST', payload: post}))
      .catch(err => console.log(err))
      .finally(() => dispatch({type: 'TOGGLE_LOADING', payload: false}));
  };
};
