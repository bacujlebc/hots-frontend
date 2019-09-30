import axios from "axios";
import { push } from "connected-react-router";

export const loginThunk = ({ email, password }) => async dispatch => {
  const {
    data: { token }
  } = await axios.request({
    url: "http://localhost:3001/api/login",
    method: "POST",
    data: {
      email,
      password
    },
    responseType: "json",
    headers: {
      "Content-Type": "application/json"
    }
  });
  console.log(token);
  if (token) {
    localStorage.setItem("token", token);
    dispatch(push("/welcome"));
  }
};

export const getPosts = () => async dispatch => {
  try {
    const token = localStorage.getItem("token");
    if (!token) return;
    const { data: posts } = await axios.request({
      url: "http://localhost:3001/api/posts",
      method: "GET",
      responseType: "json",
      headers: {
        "Content-Type": "application/json",
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
  }
};
