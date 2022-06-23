import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import Container from '../../components/Container';
import Layout from '../../components/Layout';
import HeroPetition from '../../components/Petitions/HeroPetition';
import LatestPetitions from '../../components/Petitions/LatestPetitions';
import { getAllPetitions } from '../../lib/api';
import { BASE_URL, ORG_NAME } from '../../lib/constants';

export default function Index({ allPetitions }) {
  const desc = 'List of petitions curated by TINEB that you should sign right away! These link to microsites or petition links directly.';
  const { asPath } = useRouter();
  const heroPetition = allPetitions[0];

  return (
    <>
      <Layout>
        <Head>
          <title>Petitions | {ORG_NAME}</title>
          <meta
            name="description"
            content={desc}
          />
          <link rel="canonical" href={asPath} />
          <meta property="og:url" content={BASE_URL + asPath} />
          <meta property="og:image" content={BASE_URL + '/assets/TINEB.jpeg'} />
          <meta property="og:title" content={`Petitions | ${ORG_NAME}`} />
          <meta property="og:description" content={desc} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:title" content={`Petitions | ${ORG_NAME}`} />
          <meta property="twitter:description" content={desc} />
          <meta property="twitter:image" content={BASE_URL + '/assets/TINEB.jpeg'} />
          <meta property="twitter:image:alt" content={ORG_NAME} />
        </Head>
        <Container>
          <div className='content-center mx-auto'>
            {heroPetition && (
              <HeroPetition
                title={heroPetition.title}
                coverImage={heroPetition.coverImage}
                link={heroPetition.link}
                content={heroPetition.content}
                slug={heroPetition.slug}
              />
            )}
          </div>
          <div className='mx-9 content-center'>
            {allPetitions.length > 0 && <LatestPetitions petitions={allPetitions} />}
          </div>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPetitions = getAllPetitions([
    'title',
    'date',
    'slug',
    'link',
    'coverImage',
    'content'
  ]);

  return {
    props: { allPetitions },
  };
}
