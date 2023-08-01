"use client"
import React from 'react'
import styled from 'styled-components'

function Loading() {
  return (
    <Container>Loading...</Container>
  )
}

export default Loading

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`