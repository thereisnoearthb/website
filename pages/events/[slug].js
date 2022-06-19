import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Container from '../../components/Container';
import Layout from '../../components/Layout';
import { getEventBySlug, getAllEvents } from '../../lib/api';
import Head from 'next/head';
import { ORG_NAME } from '../../lib/constants';
import markdownToHtml from '../../lib/markdownToHtml';
import Loader from '../../components/Loader';
import EventDetail from '../../components/Events/EventDetail';

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
              <meta property="og:image" content={event.coverImage} />
            </Head>
            <article className="mb-32">
              <EventDetail
                slug={event.slug}
                title={event.title}
                author={event.author}
                coverImage={event.coverImage}
                date={event.date}
                content={event.content}
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
    'content',
  ]);

  const content = await markdownToHtml(event.content || '');

  return {
    props: {
      event: {
        ...event,
        content,
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
