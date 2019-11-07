import Axios from "utils/axios";
import { push } from "connected-react-router";

export const login = values => async dispatch => {
  try {
    await Axios.post("login", values);

    dispatch(push("/welcome"));
  } catch (error) {
    console.error(error);
  }
};
