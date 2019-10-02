import { createReducer } from "redux-act";

interface IPost {
  id: number;
  post: string;
  created_at: string;
}

export interface IPostsState {
  posts: IPost[];
  error: string;
}

const initialState: IPostsState = {
  posts: [],
  error: ""
};

export const postsReducer = createReducer(
  {
    ["GET_POSTS_SUCCESS"]: (state, payload) => ({ ...state, posts: payload })
  },
  initialState
);
