import { combineReducers } from "redux";
import { History } from "history";
import {
  connectRouter,
  LocationChangeAction,
  RouterState
} from "connected-react-router";

// Reducers
import { postsReducer } from "store/reducers/postsReducer";

// Interfaces
import { IPostsState } from "store/reducers/postsReducer";

const createRootReducer = (history: History<LocationChangeAction>) =>
  combineReducers<IState>({
    router: connectRouter(history),
    posts: postsReducer
  });

export interface IState {
  posts: IPostsState;
  router: RouterState;
}
export default createRootReducer;
