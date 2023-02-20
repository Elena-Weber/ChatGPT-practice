import Head from 'next/head';
import { Inter } from '@next/font/google'; // loading Google fonts
import Dashboard from "@/components/Dashboard";

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>AI Joke Generator</title>
        <meta name="description" content="AI Joke Generator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={"bg-white min-h-screen"}>
        <div className="flex flex-col items-center justify-center px-4 py-5">
          <h1 className="text-xl md:text-6xl font-bold text-indigo-700">
            AI Joke Generator
          </h1>
          <p className="mt-3 text-2xl text-neutral-900">
            Create
            <span className="text-2xl font-bold text-indigo-600">
              {" "}
              jokes{" "}
            </span>
            in seconds
          </p>
        </div>
        <Dashboard />
      </main>
    </>
  );
}