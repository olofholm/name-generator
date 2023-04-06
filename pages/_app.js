import Head from "next/head";
import theme from "../styles/theme";
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { ThemeProvider } from "@emotion/react";

export default function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Name Generator</title>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
          <meta
          name="description"
          content="Generate names and images with the power of creative AI. Great for fantasy and fiction inspiration."
          />
          <link rel="shortcut icon" href="/public/stack.ico" />
        </Head>

        <Component {...pageProps} />
      </ThemeProvider>
    </UserProvider>
  );
}