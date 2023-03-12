import Head from 'next/head';
import { Inter } from '@next/font/google'; // loading Google fonts
import Dashboard from "@/components/Dashboard";
import Header from "@/components/Header";

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>AI Joke Generator</title>
        <meta name="description" content="AI Joke Generator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8"/>
        <link rel="icon" href="/favicon-joke.ico" />
      </Head>
      <main className={"bg-white min-h-screen"}>
        <Header/>
        <Dashboard />
      </main>
    </>
  );
}