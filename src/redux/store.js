import {configureStore} from "@reduxjs/toolkit"
import { loadJobReducer, loadSingleJobReducer } from "./reducers.js/jobReducers"
import { loadJobTypeReducer } from "./reducers.js/jobTypeReducers"
import { applyForAJobReducer, getAllUsersReducer, userReducer, userlogoutReducer, userprofileReducer } from "./reducers.js/userReducers"

const store=configureStore({
    reducer:{
        loadJobs:loadJobReducer,
        loadjobType:loadJobTypeReducer,
        signIn:userReducer,
        logout:userlogoutReducer,
        profile:userprofileReducer,
        singleJob:loadSingleJobReducer,
        useJobApplication:applyForAJobReducer,
        allusers:getAllUsersReducer
    }
})

export default store

export const server="https://job-portal-app-2a1v.onrender.com/api"