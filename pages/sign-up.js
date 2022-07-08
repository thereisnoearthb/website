import Head from 'next/head.js';
import React from 'react';
import Container from '../components/Container.js';
import Layout from '../components/Layout.js';
import { BASE_URL, ORG_NAME } from '../lib/constants.js';

const Signup = (props) => {
  const desc = "Hey there awesome human interested in saving the planet! Sign up as a stakeholder for There Is No Earth B!";
  return (
    <>
      <Layout>
        <Head>
          <title>Sign Up | {ORG_NAME}</title>
          <meta
            name="description"
            content={desc}
          />
          <meta name="keywords" content="thereisnoearthb, Indian, Climate Change,  thereisnoplanetb, eco anxiety, climate crisis, Climate Action, cleanups, petitions, plogging, 🌏,earth, dharti, bhoomi, jungle, forests, forestsforfuture, climate change is real, tools, opensource, carbon footprint, passion" />
          <meta name="robots" content="index, follow" />
          <meta name="title" content="Sign Up | There Is No Earth B: Inclusive Organic Decentralized Climate Action" />
          <meta name="language" content="English" />
          <link rel='canonical' href={BASE_URL} />
          <meta property="og:image" content={BASE_URL + '/assets/TINEB.jpeg'} />
          <meta property="og:url" content={BASE_URL + '/sign-up'} />
          <meta property="og:title" content={'Sign Up | ' + ORG_NAME} />
          <meta property="og:description" content={desc} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:title" content={'Sign Up | ' + ORG_NAME} />
          <meta property="twitter:description" content={desc} />
          <meta property="twitter:image" content={BASE_URL + '/assets/TINEB.jpeg'} />
          <meta property="twitter:image:alt" content={ORG_NAME} />
        </Head>
        <Container>
          <iframe
            className={"w-full mx-auto my-2"}
            style={{ height: '3840px' }}
            src="https://docs.google.com/forms/d/e/1FAIpQLSc6eQWoKumAX3j84X_-WXRfyUJM1WYbIeFoA6yV_hptsFDJUg/viewform?embedded=true"
            frameBorder="0"
          >
            Loading…
          </iframe>
          <style>

          </style>
        </Container>
      </Layout>
    </>
  );
};

export default Signup;
