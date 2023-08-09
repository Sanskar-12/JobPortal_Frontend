import { createReducer } from "@reduxjs/toolkit";

export const loadJobTypeReducer = createReducer(
  { jobType: [] },
  {
    jobTypeLoadRequest: (state) => {
      state.loading = true;
    },
    jobTypeLoadSuccess: (state, action) => {
      state.loading = false;
      state.jobType = action.payload.jobType;
    },
    jobTypeLoadFail: (state,action) => {
        state.loading=false
        state.error=action.payload
    },
  }
);
