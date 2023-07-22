"use client"
import styled from "styled-components"
import { useLocalStorage } from 'usehooks-ts';
import { defaultTheme } from './themes/defaultTheme';
import { darkTheme } from './themes/darkTheme';

export default function Home() {
  const [, setTheme] = useLocalStorage("theme", defaultTheme);

  return (
    <Container>
      <button
        variant="contained"
        color="primary"
        onClick={() => setTheme(defaultTheme)}
        style={{ marginRight: 8 }}
      >
        Use light theme 
      </button>
      <button
        variant="contained"
        color="secondary"
        onClick={() => setTheme(darkTheme)}
      >
        Use Dark Theme
      </button>
    </Container>
  )
}


const Container = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  padding: 0px;
  margin: 0px;
  background-color: ${ props => props.theme.bodyColor};
`
const PrimaryButton = styled.button`
  width : 200px;
  height: 50px;
  background-color: white;
  border-radius: 20px;
`
