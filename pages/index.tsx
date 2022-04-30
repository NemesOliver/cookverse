import type { NextPage } from "next";
import Head from "next/head";
import { Container, Header } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Cookverse</title>
        <meta name="description" content="Recipe website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* This should be in layout and above <main> */}
        <Container>
          <Header />
        </Container>
      </main>
    </>
  );
};

export default Home;
