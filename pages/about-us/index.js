import Head from "next/head";
import { useRouter } from "next/router";
import AboutDetail from "../../components/About/AboutDetail";
import Container from "../../components/Container";
import Layout from "../../components/Layout";
import { getAboutContent } from "../../lib/api";
import { BASE_URL, ORG_NAME } from "../../lib/constants";
import markdownToHtml from "../../lib/markdownToHtml";

export default function AboutUs(props) {
  const { asPath } = useRouter();

  return (
    <>
      <Layout>
        <Head>
          <title>About TINEB | {ORG_NAME}</title>
          <meta
            name="description"
            content={props.excerpt}
          />
          <link rel='canonical' href={asPath} />
          <meta property="og:url" content={BASE_URL + asPath} />
          <meta property="og:image" content={BASE_URL + '/assets/TINEB.jpeg'} />
          <meta property="og:title" content={`About TINEB | ${ORG_NAME}`} />
          <meta property="og:description" content={props.excerpt} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:title" content={`About TINEB | ${ORG_NAME}`} />
          <meta property="twitter:description" content={props.excerpt} />
          <meta property="twitter:image" content={BASE_URL + '/assets/TINEB.jpeg'} />
          <meta property="twitter:image:alt" content={ORG_NAME} />
        </Head>
        <Container>
          <AboutDetail content={props.content} />
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const about = getAboutContent([
    'date',
    'excerpt',
    'content'
  ]);

  const content = await markdownToHtml(about.content) || '';

  return {
    props: {
      ...about,
      content
    },
  };
}
