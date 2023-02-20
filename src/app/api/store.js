import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../../features/auth/authSlice";
import errorReducer from "../../features/errors/errorSlice";
import usersReducer from "../../features/users/usersSlice";
import { apiSlice } from "./apiSlice";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,
        error: errorReducer,
        users: usersReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
});