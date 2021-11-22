const defaultState = {
  posts: [],
  isLoading: true,
};

const REMOVE_POST = 'REMOVE_POST';
const GET_POSTS = 'GET_POSTS';
const TOGGLE_LOADING = 'TOGGLE_LOADING';

export const postsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case TOGGLE_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case GET_POSTS:
      return {
        ...state,
        posts: [...state.posts, ...action.payload],
      };
    case REMOVE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post !== action.payload),
      };
    default:
      return state;
  }
};
