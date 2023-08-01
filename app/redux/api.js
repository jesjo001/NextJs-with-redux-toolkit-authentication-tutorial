"use client"
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { logOut, setCredentials } from './features/auth/authSlice'
import TokenService from '@/utils/Token.service'

const apiLink = process.env.NEXT_PUBLIC_NODE_ENV === "production" ? process.env.NEXT_PUBLIC_BACKEND_PROD : process.env.NEXT_PUBLIC_BACKEND_DEV

const baseQuery = fetchBaseQuery({
    baseUrl: apiLink,
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const token = getState()?.auth?.token
        const tokenExpired = TokenService.isAccessExpired();
        if ( token) {
            if(!tokenExpired) {
                headers.set("authorization", `Bearer ${token.accessToken}`)
            } else {
                headers.set("authorization", `Bearer ${token.accessToken}`)
                headers.set("x-refresh", `${token.refreshToken}`)
            }
            
        }
        return headers
    }
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)

    if (result?.error?.originalStatus === 403) {
        console.log('sending refresh token')
        // send refresh token to get new access token
        const refreshResult = await baseQuery('/refresh', api, extraOptions)
        console.log(refreshResult)
        if (refreshResult?.data) {
            const user = api.getState().auth.user
            // store the new token
            api.dispatch(setCredentials({ response: refreshResult.data }))
            // retry the original query with new access token
            result = await baseQuery(args, api, extraOptions)
        } else {
            api.dispatch(logOut())
        }
    }
    return result
}

export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: builder => ({})
})