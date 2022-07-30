import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import { BASE_URL, ORG_NAME } from '../../lib/constants';
import CertificateLayout from '../../components/Certificate/CertificateLayout';
import { getAllCSVData, getCSVDataBySlug } from '../../lib/api';

export default function Verify({ allData }) {
  return <CertificateLayout allData={allData} />;
}

export async function getStaticProps({ params }) {
  const data = getCSVDataBySlug(params.slug);
  return {
    props: {
      allData: [...data],
    },
  };
}

export async function getStaticPaths() {
  const data = getAllCSVData();
  return {
    paths: data.map((datum) => {
      return {
        params: {
          slug: datum.slug,
        },
      };
    }),
    fallback: false,
  };
}
