import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Cookverse</title>
        <meta name="description" content="Recipe website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>Home Page</main>
    </>
  );
};

export default Home;
