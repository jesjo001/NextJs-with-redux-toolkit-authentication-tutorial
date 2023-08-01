"use client"
import Image from 'next/image'
import styled from "styled-components"
import { useLocalStorage } from 'usehooks-ts';
import { defaultTheme } from './themes/defaultTheme';
import { darkTheme } from './themes/darkTheme';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [, setTheme] = useLocalStorage("theme", defaultTheme);
  const { push } = useRouter()


  return (
    <Container>
      <PrimaryButton
        variant="contained"
        color="primary"
        style={{ marginRight: 8 }}
        onClick={() => push('/dashboard/home')}
      >
        dashboard
      </PrimaryButton>
      <PrimaryButton
        variant="contained"
        color="secondary"
        onClick={() => push('/login')}
      >
        Login
      </PrimaryButton>
    </Container>
  )
}


const Container = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  padding: 0px;
  margin: 0px;
  background-color: ${ props => props.theme.bodyColor};
  display: flex;
  justify-content: center;
  align-items: center;
`
const PrimaryButton = styled.button`
  width : 200px;
  height: 50px;
  background-color: white;
  border-radius: 20px;

`
