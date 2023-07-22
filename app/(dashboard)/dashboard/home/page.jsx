"use client"
import React from "react";
import styled from "styled-components"
import { useLocalStorage } from 'usehooks-ts';
import { darkTheme } from '../../../themes/darkTheme';
import { defaultTheme } from '@/app/themes/defaultTheme';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export default function Home() {
  const [, setTheme] = useLocalStorage("theme", defaultTheme);

  return (
    <Container>
        dashboard
    </Container>
  )
}

