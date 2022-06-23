import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Container from '../../components/Container';
import Layout from '../../components/Layout';
import { getAllCampaigns, getCampaignBySlug } from '../../lib/api';
import Head from 'next/head';
import { BASE_URL, ORG_NAME } from '../../lib/constants';
import markdownToHtml from '../../lib/markdownToHtml';
import Loader from '../../components/Loader';
import CampaignDetail from '../../components/Campaign/CampaignDetail';

export default function Campaign({ campaign, preview }) {
  const router = useRouter();

  if (!router.isFallback && !campaign?.slug) {
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
                {campaign.title} | {ORG_NAME}
              </title>
              <link rel="canonical" href={router.asPath} />
              <meta property="og:url" content={`${BASE_URL}${router.asPath}`} />
              <meta name="description" content={campaign.excerpt} />
              <meta property="og:image" content={`${campaign.coverImage}`} />
              <meta property="og:title" content={`${campaign.title} | ${ORG_NAME}`} />
              <meta property="og:description" content={campaign.excerpt} />
              <meta name="twitter:card" content="summary_large_image" />
              <meta property="twitter:title" content={`${campaign.title} | ${ORG_NAME}`} />
              <meta property="twitter:description" content={campaign.excerpt} />
              <meta property="twitter:image" content={`${campaign.coverImage}`} />
              <meta property="twitter:image:alt" content={campaign.title} />
            </Head>
            <article className="mb-32">
              <CampaignDetail
                slug={campaign.slug}
                title={campaign.title}
                link={campaign.link}
                coverImage={campaign.coverImage}
                date={campaign.date}
                button={campaign.button}
                content={campaign.content}
              />
            </article>
          </>
        )}
      </Container >
    </Layout >
  );
}

export async function getStaticProps({ params }) {
  const campaign = getCampaignBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'link',
    'excerpt',
    'coverImage',
    'button',
    'content',
  ]);

  const content = await markdownToHtml(campaign.content || '');

  return {
    props: {
      campaign: {
        ...campaign,
        content
      },
    },
  };
}

export async function getStaticPaths() {
  const campaigns = getAllCampaigns(['slug']);
  return {
    paths: campaigns.map((campaign) => {
      return {
        params: {
          slug: campaign.slug,
        },
      };
    }),
    fallback: false,
  };
}
