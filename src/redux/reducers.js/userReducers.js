import { createReducer } from "@reduxjs/toolkit";

export const userReducer = createReducer(
  {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
  {
    signInRequest: (state) => {
      state.loading = true;
      state.userInfo = null;
      state.isAuthenticated = false;
    },
    signInSuccess: (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
      state.isAuthenticated = true;
    },
    signInFail: (state, action) => {
      state.loading = false;
      state.userInfo = null;
      state.isAuthenticated = false;
      state.error = action.payload;
    },
  }
);

export const userSignUpReducer = createReducer(
  {},
  {
    signUpRequest: (state) => {
      state.loading = true;
      state.userInfo = null;
    },
    signUpSuccess: (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
    },
    signUpFail: (state, action) => {
      state.loading = false;
      state.userInfo = null;
      state.error = action.payload;
    },
  }
);

export const userlogoutReducer = createReducer(
  {},
  {
    logOutRequest: (state) => {
      state.loading = true;
    },
    logOutSuccess: (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
    },
    logOutFail: (state, action) => {
      state.loading = false;

      state.error = action.payload;
    },
  }
);

export const userprofileReducer = createReducer(
  {
    user: null,
  },
  {
    userProfileRequest: (state) => {
      state.loading = true;
      state.user = null;
    },
    userProfileSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
    },
    userProfileFail: (state, action) => {
      state.loading = false;
      state.user = null;
      state.error = action.payload;
    },
  }
);

export const applyForAJobReducer = createReducer(
  {},
  {
    applyJobRequest: (state) => {
      state.loading = true;
    },
    applyJobSuccess: (state, action) => {
      state.loading = false;
      state.userJob = action.payload;
    },
    applyJobFail: (state, action) => {
      state.loading = false;

      state.error = action.payload;
    },
  }
);

export const getAllUsersReducer = createReducer(
  { users: [] },
  {
    getAllUsersRequest: (state) => {
      state.loading = true;
      state.users = [];
    },
    getAllUsersSuccess: (state, action) => {
      state.loading = false;
      state.users = action.payload.users;
    },
    getAllUsersFail: (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.payload;
    },
  }
);
