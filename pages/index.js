import Head from 'next/head.js';
import React from 'react';
import Container from '../components/Container.js';
import Layout from '../components/Layout.js';
import { BASE_URL, ORG_NAME } from '../lib/constants.js';
import Home from '../components/Home';
import { getAboutContent } from '../lib/api.js';

const Index = (props) => {
  const desc = "Hi there 👋! We're a passionate bunch of humans on a mission to save the Earth. Here is a curated, low carbon footprint website for you to act now!";

  return (
    <>
      <Layout>
        <Head>
          <title>{ORG_NAME}</title>
          <meta
            name="description"
            content={desc}
          />
          <meta name="keywords" content="thereisnoearthb, Indian, Climate Change,  thereisnoplanetb, eco anxiety, climate crisis, Climate Action, cleanups, petitions, plogging, 🌏,earth, dharti, bhoomi, jungle, forests, forestsforfuture, climate change is real, tools, opensource, carbon footprint, passion" />
          <meta name="robots" content="index, follow" />
          <meta name="title" content="There Is No Earth B: Inclusive Organic Decentralized Climate Action" />
          <meta name="language" content="English" />
          <link rel='canonical' href={BASE_URL} />
          <meta property="og:image" content={BASE_URL + '/assets/TINEB.jpeg'} />
          <meta property="og:url" content={BASE_URL} />
          <meta property="og:title" content={ORG_NAME} />
          <meta property="og:description" content={desc} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:title" content={ORG_NAME} />
          <meta property="twitter:description" content={desc} />
          <meta property="twitter:image" content={BASE_URL + '/assets/TINEB.jpeg'} />
          <meta property="twitter:image:alt" content={ORG_NAME} />
        </Head>
        <Container>
          <Home about={props.about} />
        </Container>
      </Layout>
    </>
  );
};

export default Index;

export async function getStaticProps() {
  const about = getAboutContent([
    'date',
    'excerpt',
  ]);

  return {
    props: {
      about
    },
  };
}
