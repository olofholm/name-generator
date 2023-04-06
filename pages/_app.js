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
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
          <meta
          name="description"
          content="Generate names and images with the power of creative AI. Great for fantasy and fiction inspiration."
          />
        </Head>

        <Component {...pageProps} />
      </ThemeProvider>
    </UserProvider>
  );
}