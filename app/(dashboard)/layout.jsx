// "use client"
import { ReduxProvider } from '../redux/providers'
import StyledComponentsRegistry from '../lib/register'
import GlobalThemeWrapper from '../lib/GlobalThemeWrapper'
import RequireAuth from '../lib/RequireAuthWrapper'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <>
        <ReduxProvider>
          <RequireAuth>
            <StyledComponentsRegistry>
              <GlobalThemeWrapper>
              {children}
              </GlobalThemeWrapper>
            </StyledComponentsRegistry>
          </RequireAuth>
        </ReduxProvider>
    </>
  )
}
