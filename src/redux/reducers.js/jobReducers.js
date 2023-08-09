import { createReducer } from "@reduxjs/toolkit";

export const loadJobReducer = createReducer(
  { jobs: [] },
  {
    jobLoadRequest: (state) => {
      state.loading = true;
    },
    jobLoadSuccess: (state, action) => {
      state.loading = false;
      state.success = action.payload.success;
      state.page = action.payload.page;
      state.pages = action.payload.pages;
      state.count = action.payload.count;
      state.setUniqueLocation = action.payload.setUniqueLocation;
      state.jobs = action.payload.jobs;
    },
    jobLoadFail: (state,action) => {
        state.loading=false
        state.error=action.payload
    },
  }
);

export const loadSingleJobReducer = createReducer(
  { job: {} },
  {
    singlejobLoadRequest: (state) => {
      state.loading = true;
    },
    singlejobLoadSuccess: (state, action) => {
      state.loading = false;
      state.success = action.payload.success;
      state.job = action.payload.job;
    },
    singlejobLoadFail: (state,action) => {
        state.loading=false
        state.error=action.payload
    },
  }
);
