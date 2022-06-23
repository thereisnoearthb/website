import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Container from '../../components/Container';
import Layout from '../../components/LayoutVariant';
import { getHowToBySlug, getAllHowTos } from '../../lib/api';
import Head from 'next/head';
import { BASE_URL, ORG_NAME } from '../../lib/constants';
import markdownToHtml from '../../lib/markdownToHtml';
import Loader from '../../components/Loader';
import HowToDetail from '../../components/HowTo/HowToDetail.js';

export default function HowTo({ howTo, moreHowTos, preview }) {
  const desc = howTo.title + ' | ' + ORG_NAME;

  const router = useRouter();

  if (!router.isFallback && !howTo?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout align='right'>
      <Container>
        {router.isFallback ? (
          <Loader />
        ) : (
          <>
            <Head>
              <title>
                {howTo.title} | {ORG_NAME}
              </title>
              <meta
                name="description"
                content={desc}
              />
              <link rel="canonical" href={router.asPath} />
              <meta property="og:url" content={BASE_URL + router.asPath} />
              <meta property="og:image" content={BASE_URL + '/assets/TINEB.jpeg'} />
              <meta property="og:title" content={`${howTo.title} | ${ORG_NAME}`} />
              <meta property="og:description" content={desc} />
              <meta name="twitter:card" content="summary_large_image" />
              <meta property="twitter:title" content={`${howTo.title} | ${ORG_NAME}`} />
              <meta property="twitter:description" content={desc} />
              <meta property="twitter:image" content={BASE_URL + '/assets/TINEB.jpeg'} />
              <meta property="twitter:image:alt" content={ORG_NAME} />
            </Head>
            <article className="mb-32">
              <HowToDetail
                slug={howTo.slug}
                title={howTo.title}
                category={howTo.category}
                date={howTo.date}
                content={howTo.content}
              />
            </article>
          </>
        )}
      </Container >
    </Layout >
  );
}

export async function getStaticProps({ params }) {
  const howTo = getHowToBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'category',
    'content',
  ]);

  const content = await markdownToHtml(howTo.content || '');

  return {
    props: {
      howTo: {
        ...howTo,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const howTos = getAllHowTos(['slug']);
  return {
    paths: howTos.map((howTo) => {
      return {
        params: {
          slug: howTo.slug,
        },
      };
    }),
    fallback: false,
  };
}
