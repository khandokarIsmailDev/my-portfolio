import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "@/lib/ThemeContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Head>
        <title>Khandokar Ismail — Full Stack & DevOps Engineer</title>
        <meta name="description" content="Full Stack Developer & DevOps Engineer building scalable systems with Docker, Kubernetes, AWS, and modern web technologies." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
