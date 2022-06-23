import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import BlurbsList from '../../components/Blurbs/BlurbsList';
import Container from '../../components/Container';
import Layout from '../../components/Layout';
import SectionHero from '../../components/SectionHero';
import { getAllBlurbs } from '../../lib/api';
import { BASE_URL, ORG_NAME } from '../../lib/constants';

export default function Index({ allBlurbs }) {
  const desc = 'Blurbs @ TINEB are short simple summaries on various environmental happenings.';
  const { asPath } = useRouter();

  return (
    <>
      <Layout>
        <Head>
          <title>Blurbs | {ORG_NAME}</title>
          <meta
            name="description"
            content={desc}
          />
          <link rel="canonical" href={asPath} />
          <meta property="og:url" content={BASE_URL + asPath} />
          <meta property="og:image" content={BASE_URL + '/assets/TINEB.jpeg'} />
          <meta property="og:title" content={`Blurbs | ${ORG_NAME}`} />
          <meta property="og:description" content={desc} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:title" content={`Blurbs | ${ORG_NAME}`} />
          <meta property="twitter:description" content={desc} />
          <meta property="twitter:image" content={BASE_URL + '/assets/TINEB.jpeg'} />
          <meta property="twitter:image:alt" content={ORG_NAME} />
        </Head>
        <Container>
          <div className='content-center pb-10 mb-5'>
            <h1 className="mt-5 mb-7 text-3xl text-accent-3 text-center font-bold">
              Blurbs
            </h1>
            {allBlurbs[0] && <BlurbsList blurbs={[allBlurbs[0]]} />}
            <SectionHero
              title={'What are "blurbs"?'}
              content={'short simple summaries on various environmental happenings.'}
            />
            {allBlurbs.length > 0 && <BlurbsList blurbs={allBlurbs.slice(1)} />}
          </div>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allBlurbs = getAllBlurbs([
    'title',
    'date',
    'slug',
    'coverImage',
    'excerpt'
  ]);

  return {
    props: { allBlurbs },
  };
}
