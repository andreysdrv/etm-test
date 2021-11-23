const defaultState = {
  comments: [],
  isLoading: true,
};

const GET_COMMENTS = 'GET_COMMENTS';
const TOGGLE_LOADING = 'TOGGLE_LOADING';

export const commentsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case TOGGLE_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case GET_COMMENTS:
      return {
        ...state,
        comments: [...action.payload],
      };
    default:
      return state;
  }
};
