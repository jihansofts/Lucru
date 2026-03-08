import Head from "next/head";
import Hero from "@/components/Hero";
import WorldOfLucru from "@/components/WorldOfLucru";
export default function Home() {
  return (
    <>
      <Head>
        <title>Lucru - Your Next Great Inspiration</title>
        <meta name="description" content="Luchru - Dubai Real Estate" />
      </Head>
      <main className="min-h-screen bg-zinc-50 dark:bg-black">
        <Hero />
        <WorldOfLucru />
      </main>
    </>
  );
}
