import Axios from "utils/axios";
import { push } from "connected-react-router";

export const getPosts = () => async dispatch => {
  try {
    const token = localStorage.getItem("token");
    if (!token) dispatch(push("/"));
    const { data: posts } = await Axios.request({
      url: "posts",
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    dispatch({
      type: "GET_POSTS_SUCCESS",
      payload: posts
    });
  } catch (error) {
    dispatch({
      type: "GET_POSTS_FAILED",
      payload: error
    });

    dispatch(push("/"));
  }
};
