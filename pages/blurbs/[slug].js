import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Container from '../../components/Container';
import Layout from '../../components/Layout';
import { getBlurbBySlug, getAllBlurbs } from '../../lib/api';
import Head from 'next/head';
import { BASE_URL, ORG_NAME } from '../../lib/constants';
import markdownToHtml from '../../lib/markdownToHtml';
import Loader from '../../components/Loader';
import BlurbDetail from '../../components/Blurbs/BlurbDetail';

export default function Blurb({ blurb, moreBlurbs, preview }) {
  const router = useRouter();

  if (!router.isFallback && !blurb?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <Loader />
        ) : (
          <>
            <Head>
              <title>
                {blurb.title} | {ORG_NAME}
              </title>
              <link rel="canonical" href={router.asPath} />
              <meta property="og:url" content={`${BASE_URL}${router.asPath}`} />
              <meta name="description" content={blurb.excerpt} />
              <meta property="og:image" content={`${BASE_URL}${blurb.coverImage}`} />
              <meta property="og:title" content={`${blurb.title} | ${ORG_NAME}`} />
              <meta property="og:description" content={blurb.excerpt} />
              <meta name="twitter:card" content="summary_large_image" />
              <meta property="twitter:title" content={`${blurb.title} | ${ORG_NAME}`} />
              <meta property="twitter:description" content={blurb.excerpt} />
              <meta property="twitter:image" content={`${BASE_URL}${blurb.coverImage}`} />
              <meta property="twitter:image:alt" content={blurb.title} />
            </Head>
            <article className="mb-32">
              <BlurbDetail
                slug={blurb.slug}
                title={blurb.title}
                coverImage={blurb.coverImage}
                date={blurb.date}
                content={blurb.content}
              />
            </article>
          </>
        )}
      </Container >
    </Layout >
  );
}

export async function getStaticProps({ params }) {
  const blurb = getBlurbBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'excerpt',
    'coverImage',
    'content',
  ]);

  const content = await markdownToHtml(blurb.content || '');

  return {
    props: {
      blurb: {
        ...blurb,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const blurbs = getAllBlurbs(['slug']);
  return {
    paths: blurbs.map((blurb) => {
      return {
        params: {
          slug: blurb.slug,
        },
      };
    }),
    fallback: false,
  };
}
