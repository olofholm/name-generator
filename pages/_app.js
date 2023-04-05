import theme from "../styles/theme";
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { ThemeProvider } from "@emotion/react";

export default function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <ThemeProvider theme={theme}>
          <Component {...pageProps} />
      </ThemeProvider>
    </UserProvider>
  );
}