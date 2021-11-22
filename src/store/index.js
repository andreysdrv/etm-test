import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {postsReducer} from './postsReducer';
import {commentsReducer} from './commentsReducer';
import {composeWithDevTools} from 'redux-devtools-extension';

const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
