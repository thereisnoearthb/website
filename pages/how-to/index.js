import Head from 'next/head';
import React from 'react';
import HowTosList from '../../components/HowTo/HowTosList';
import Container from '../../components/Container';
import HowToHeader from '../../components/HowTo/HowToHeader';
import Layout from '../../components/LayoutVariant';
import { getAllHowTos } from '../../lib/api';
import { BASE_URL, ORG_NAME } from '../../lib/constants';
import SectionHero from '../../components/SectionHero';
import { useRouter } from 'next/router';

export default function Index({ allHowTos }) {
  const desc = 'How To? Guides @ TINEB are a collection of informative pieces of writing that instruct a reader on how to perform a task by giving step by step instructions.';
  const { asPath } = useRouter();
  const firstFourHowTos = allHowTos.slice(0, 4);
  const restHowTos = allHowTos.slice(4);

  return (
    <>
      <Layout align='left'>
        <Head>
          <title>How to? Guides | {ORG_NAME}</title>
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
          <HowToHeader />
          <HowTosList howTos={firstFourHowTos} />
          <SectionHero
            title={'What are "how to" guides?'}
            content={'A how-to guide is an informative piece of writing that instructs a reader on how to perform a task by giving step by step instructions.'}
          />
          <HowTosList howTos={restHowTos} />
          <div className='mb-10 pb-4'></div>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allHowTos = getAllHowTos([
    'title',
    'date',
    'slug',
    'redirect'
  ]);

  return {
    props: { allHowTos },
  };
}
