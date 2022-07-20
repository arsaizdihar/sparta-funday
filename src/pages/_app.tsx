import { Box, ChakraProvider, extendTheme, Flex } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "../styles/globals.css";

const theme = extendTheme({
  fonts: {
    heading: "Raya, sans-serif",
    body: "Inter, sans-serif",
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <NextNProgress color="#000000" />
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Kenangan akhir dari Fun Day SPARTA 2021"
        />
        <title>SPARTA FunDay :D</title>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="SPARTA FunDay :D" />
        <meta
          name="twitter:description"
          content="Kenangan akhir dari Fun Day SPARTA 2021"
        />
        <meta
          name="twitter:image"
          content="https://sparta-funday.vercel.app/sparta-logo.svg"
        />
        <meta name="og:card" content="summary" />
        <meta name="og:title" content="SPARTA FunDay :D" />
        <meta
          name="og:description"
          content="Kenangan akhir dari Fun Day SPARTA 2021"
        />
        <meta
          name="og:image"
          content="https://sparta-funday.vercel.app/sparta-logo.svg"
        />
      </Head>
      <Flex direction={"column"} minH="100vh">
        <NavBar />
        <Box flexGrow={"1"} bgGradient="linear(to-b, orange.400, orange.300)">
          <Component {...pageProps} />
        </Box>
        <Footer />
      </Flex>
    </ChakraProvider>
  );
}

export default MyApp;
