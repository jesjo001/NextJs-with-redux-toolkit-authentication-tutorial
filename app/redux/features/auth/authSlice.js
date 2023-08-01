"use client"
const { default: TokenService } = require("@/utils/Token.service");
const { createSlice } = require("@reduxjs/toolkit");
const { default: jwtDecode } = require("jwt-decode");



const authSlice = createSlice({
    name: 'auth',
    initialState: { 
        user : TokenService.getUser(),
        token: TokenService.getLocalAccessToken()
    },
    reducers: {
        setCredentials: (state, action) => {
            const { response } = action.payload;

            const decodedUser = jwtDecode(response?.accessToken)

            state.user = decodedUser
            state.auth = response?.accessToken

            TokenService.updateLocalAccessToken(response);
        },
        logOut: (state, action) => {
            state.user = null
            state.auth = null
            TokenService.removeUser();
        }
    }
})

export const { setCredentials, logOut } = authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = (state) => {
    if(state?.auth?.user) return state.auth.user

    return null;
}

export const selectCurrentToken = (state) => {
    if(state?.auth?.token) return state.auth.token
    
    return null;
}