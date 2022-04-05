import { createSlice } from "@reduxjs/toolkit";
import { infoData } from "src/mocks/auth.mocks";

const initialState = {
    isLoggedIn: true,
    accountInfo: infoData,
    isError: false,
    message: 'The application is fetching data from Azure Cloud, please wait a few minutes....'
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginFulfilled: (state, action) => ({
            ...state,
            isLoggedIn : true,
            accountInfo: action.payload.result,
            message: ""
        }),
        loginRejected: (state, action) => ({
            ...state,
            isLoggedIn : false,
            isError: true,
            accountInfo : null,
            message: action.payload || 'An error occurred while retrieving data from Azure Cloud, please contact the administrator'
        }),
        logoutFulfilled: (state, action) => ({
            ...state,
            isLoggedIn : false,
        }),
        clearState: (state) => ({
            ...state,
            isLoggedIn: false,
            isError: false,
            accountInfo: null,
            message: ""
        })
    }
});

export default authSlice;
