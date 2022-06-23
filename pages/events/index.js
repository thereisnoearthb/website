import Head from 'next/head';
import React from 'react';
import EventsList from '../../components/Event/EventsList';
import Container from '../../components/Container';
import Layout from '../../components/Layout';
import { getAllEvents } from '../../lib/api';
import { BASE_URL, ORG_NAME } from '../../lib/constants';
import { useRouter } from 'next/router';

export default function Index({ allEvents }) {
  const desc = 'Events @ TINEB consist of a variety of events that have been curated by volunteers as part of climate action.';
  const { asPath } = useRouter();

  return (
    <>
      <Layout>
        <Head>
          <title>Events | {ORG_NAME}</title>
          <meta
            name="description"
            content={desc}
          />
          <link rel="canonical" href={asPath} />
          <meta property="og:url" content={BASE_URL + asPath} />
          <meta property="og:image" content={BASE_URL + '/assets/TINEB.jpeg'} />
          <meta property="og:title" content={`Events | ${ORG_NAME}`} />
          <meta property="og:description" content={desc} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:title" content={`Events | ${ORG_NAME}`} />
          <meta property="twitter:description" content={desc} />
          <meta property="twitter:image" content={BASE_URL + '/assets/TINEB.jpeg'} />
          <meta property="twitter:image:alt" content={ORG_NAME} />
        </Head>
        <Container>
          <div className='mx-9 content-center pb-10 mb-5'>
            <h1 className="mt-5 mb-7 text-3xl text-accent-3 text-center font-bold">
              Events
            </h1>
            {allEvents.length > 0 && <EventsList events={allEvents} />}
          </div>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allEvents = getAllEvents([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt'
  ]);

  return {
    props: { allEvents },
  };
}
