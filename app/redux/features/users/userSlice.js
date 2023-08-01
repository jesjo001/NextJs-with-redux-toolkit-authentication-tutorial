"use client"
import { createSlice } from "@reduxjs/toolkit"


const userSlice = createSlice({
    name: 'users',
    initialState: { users: null },
    reducers: {
        setUsers: (state, action) => {
            const { users } = action.payload
            state.users = users
        },
        clearUsers: (state, action) => {
            state.users = null
        }
    },
})

export const { setUsers, clearUsers } = userSlice.actions

export default userSlice.reducer;

export const selectCurrentUsers = (state) => {
    console.log('state', state)
    return state?.users?.users
}
