import Head from 'next/head';
import React from 'react';
import HowTosList from '../../components/HowTo/HowTosList';
import Container from '../../components/Container';
import HowToHeader from '../../components/HowTo/HowToHeader';
import Layout from '../../components/LayoutVariant';
import { getAllHowTos } from '../../lib/api';
import { HOME_OG_IMAGE_URL, ORG_NAME } from '../../lib/constants';
import SectionHero from '../../components/SectionHero';

export default function Index({ allHowTos }) {
  const firstFourHowTos = allHowTos.slice(0, 4);
  const restHowTos = allHowTos.slice(4);

  return (
    <>
      <Layout align='left'>
        <Head>
          <title>How to? Guides | {ORG_NAME}</title>
          <meta
            name="description"
            content={`${ORG_NAME}`}
          />
          <meta property="og:image" content={HOME_OG_IMAGE_URL} />
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
