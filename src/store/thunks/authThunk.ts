import Axios from "utils/axios";
import { push } from "connected-react-router";

export const login = values => async dispatch => {
  try {
    const {
      data: { token }
    } = await Axios.post("login", values);
    if (token) {
      localStorage.setItem("token", token);
      dispatch(push("/welcome"));
    }
  } catch (error) {
    console.error(error);
  }
};
