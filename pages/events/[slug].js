import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Container from '../../components/Container';
import Layout from '../../components/Layout';
import { getEventBySlug, getAllEvents } from '../../lib/api';
import Head from 'next/head';
import { BASE_URL, ORG_NAME } from '../../lib/constants';
import markdownToHtml from '../../lib/markdownToHtml';
import Loader from '../../components/Loader';
import EventDetail from '../../components/Event/EventDetail';

export default function Event({ event, moreEvents, preview }) {
  const router = useRouter();

  if (!router.isFallback && !event?.slug) {
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
                {event.title} | {ORG_NAME}
              </title>
              <link rel="canonical" href={router.asPath} />
              <meta property="og:url" content={`${BASE_URL}${router.asPath}`} />
              <meta name="description" content={event.excerpt} />
              <meta property="og:image" content={`${BASE_URL}${event.coverImage}`} />
              <meta property="og:title" content={`${event.title} | ${ORG_NAME}`} />
              <meta property="og:description" content={event.excerpt} />
              <meta name="twitter:card" content="summary_large_image" />
              <meta property="twitter:title" content={`${event.title} | ${ORG_NAME}`} />
              <meta property="twitter:description" content={event.excerpt} />
              <meta property="twitter:image" content={`${BASE_URL}${event.coverImage}`} />
              <meta property="twitter:image:alt" content={event.title} />
            </Head>
            <article className="mb-32">
              <EventDetail
                slug={event.slug}
                title={event.title}
                author={event.author}
                coverImage={event.coverImage}
                date={event.date}
                category={event.category}
                content={event.content}
                link={event.link}
                button={event.button}
              />
            </article>
          </>
        )}
      </Container >
    </Layout >
  );
}

export async function getStaticProps({ params }) {
  const event = getEventBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'excerpt',
    'coverImage',
    'category',
    'content',
    'link',
    'button'
  ]);

  const content = await markdownToHtml(event.content || '');

  return {
    props: {
      event: {
        ...event,
        content
      },
    },
  };
}

export async function getStaticPaths() {
  const events = getAllEvents(['slug']);
  return {
    paths: events.map((event) => {
      return {
        params: {
          slug: event.slug,
        },
      };
    }),
    fallback: false,
  };
}
