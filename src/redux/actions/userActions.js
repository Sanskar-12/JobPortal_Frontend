import axios from "axios";
import { server } from "../store";
import { toast } from "react-toastify";

export const userSignInactions = (user) => async (dispatch) => {
  try {
    dispatch({
      type: "signInRequest",
    });
    const { data } = await axios.post(`${server}/auth/signin`, user, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    localStorage.setItem("userInfo", JSON.stringify(data));

    dispatch({
      type: "signInSuccess",
      payload: data,
    });
    toast.success("Login Successfully!");
  } catch (error) {
    dispatch({
      type: "signInFail",
      payload: error.response.data.message,
    });
    toast.error(error.response.data.error);
  }
};

export const userSignUpactions = (user) => async (dispatch) => {
  try {
    dispatch({
      type: "signUpRequest",
    });
    const { data } = await axios.post(`${server}/auth/signup`, user, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    dispatch({
      type: "signUpSuccess",
      payload: data,
    });
    toast.success("Signed Up Successfully!");
  } catch (error) {
    dispatch({
      type: "signUpFail",
      payload: error.response.data.message,
    });
    toast.error(error.response.data.error);
  }
};

export const userlogoutActions = () => async (dispatch) => {
  try {
    dispatch({
      type: "logOutRequest",
    });
    const { data } = await axios.get(`${server}/auth/logout`, {
      withCredentials: true,
    });
    localStorage.removeItem("userInfo");

    dispatch({
      type: "logOutSuccess",
      payload: data,
    });
    toast.success("Logged Out Successfully!");
  } catch (error) {
    dispatch({
      type: "logOutFail",
      payload: error.response.data.message,
    });
    toast.error(error.response.data.error);
  }
};

export const userprofileActions = () => async (dispatch) => {
  try {
    dispatch({
      type: "userProfileRequest",
    });
    const { data } = await axios.get(`${server}/auth/me`, {
      withCredentials: true,
    });

    dispatch({
      type: "userProfileSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "userProfileFail",
      payload: error.response.data.message,
    });
  }
};

export const userApplyJobActions = (job) => async (dispatch) => {
  try {
    dispatch({
      type: "userProfileRequest",
    });
    const { data } = await axios.post(`${server}/admin/userjobhistory`, job, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    dispatch({
      type: "userProfileSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "userProfileFail",
      payload: error.response.data.message,
    });
  }
};

export const getAllUsersActions = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAllUsersRequest",
    });
    const { data } = await axios.get(`${server}/admin/getallusers`, {
      withCredentials: true,
    });

    dispatch({
      type: "getAllUsersSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "getAllUsersFail",
      payload: error.response.data.message,
    });
  }
};
