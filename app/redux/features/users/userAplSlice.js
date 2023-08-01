"use client"
import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import { apiSlice } from "../../api";

const baseEndPoint = process.env.NEXT_PUBLIC_NODE_ENV === "production" ? process.env.NEXT_PUBLIC_BACKEND_PROD : process.env.NEXT_PUBLIC_BACKEND_DEV;


export const userApiSlice = apiSlice.injectEndpoints({
    baseQuery: fetchBaseQuery({ baseUrl: `${baseEndPoint}` }),
    endpoints: builder => ({
        getUsers: builder.query({
            query: () => ({
                url: `/user/all`,
            })
        }),
        getSingleUser: builder.query({
            query: (id) => ({
                url: `/user/${id}`
            })
        }),
    })
})


export const {
    useGetUsersQuery, useGetSingleUserQuery
} = userApiSlice;