import Head from 'next/head';
import React from 'react';
import VideosList from '../../components/Videos/VideosList';
import VideosListDetail from '../../components/Videos/VideosListDetail';
import Container from '../../components/Container';
import Layout from '../../components/Layout';
import { getAllVideos } from '../../lib/api';
import { BASE_URL, ORG_NAME } from '../../lib/constants';
import { useRouter } from 'next/router';

export default function Index({ allVideos }) {
  const desc = 'Videos @ TINEB are a collection of videos that will be useful to anyone who is interested in climate action.';
  const { asPath } = useRouter();
  const latestVideos = allVideos.slice(0, 3);
  const moreVideos = allVideos.slice(3);

  return (
    <>
      <Layout>
        <Head>
          <title>Videos | {ORG_NAME}</title>
          <meta
            name="description"
            content={desc}
          />
          <link rel="canonical" href={asPath} />
          <meta property="og:url" content={BASE_URL + asPath} />
          <meta property="og:image" content={BASE_URL + '/assets/TINEB.jpeg'} />
          <meta property="og:title" content={`Videos | ${ORG_NAME}`} />
          <meta property="og:description" content={desc} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:title" content={`Videos | ${ORG_NAME}`} />
          <meta property="twitter:description" content={desc} />
          <meta property="twitter:image" content={BASE_URL + '/assets/TINEB.jpeg'} />
          <meta property="twitter:image:alt" content={ORG_NAME} />
        </Head>
        <Container>
          <div className='content-center mx-auto'>
            <h1 className="mt-5 mb-6 text-3xl text-accent-3 text-center font-bold">
              Videos
            </h1>
            {latestVideos.length > 0 && <VideosListDetail videos={latestVideos} />}
          </div>
          <div className="mx-auto uppercase text-xl font-bold my-8 text-center py-4 bg-accent-2 text-accent-1">
            Watch more videos
          </div>
          <div className='mx-auto mx-9 content-center pb-10 mb-8 lg:w-1/2 lg:pl-[7.5%]'>
            {moreVideos.length > 0 && <VideosList videos={moreVideos} />}
          </div>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allVideos = getAllVideos([
    'title',
    'date',
    'slug',
    'link',
    'excerpt'
  ]);

  return {
    props: { allVideos },
  };
}
