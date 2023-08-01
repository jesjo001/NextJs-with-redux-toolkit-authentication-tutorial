"use client"
import { useGetUsersQuery } from "@/app/redux/features/users/userAplSlice";
import React from "react";
import styled from "styled-components"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export default function Home() {
  const { data, isLoading } = useGetUsersQuery()
  // const { data: singleUser, isError, isLoading, error } = useGetSingleUserQuery('12')
  
  console.log("users isLoading ", isLoading)
  console.log("users data ", data)
  return (
    <Container>
        Dashboard
    </Container>
  )
}

