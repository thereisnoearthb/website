import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../../components/Layout';
import Container from '../../components/Container';
import { BASE_URL, ORG_NAME } from '../../lib/constants';

export default function Index() {
  const desc = 'List of petitions curated by TINEB that you should sign right away! These link to microsites or petition links directly.';
  const router = useRouter();
  const { asPath } = router;
  const handleSubmit = async (e) => {
    e.preventDefault();

    const l = await fetch(`${BASE_URL}/api/certificate-slug`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: document.getElementById('email').value,
      }),
    });

    try {
      const p = await l.json();
      if (p.slug)
        router.push(`/verify/${p.slug}`);
      else
        alert('No petition found for this email address.');
    } catch (e) {
      alert('No petition found for this email address.');
    }

  };

  return (
    <>
      <Layout>
        <Head>
          <title>Certificates | {ORG_NAME}</title>
          <link rel="canonical" href={asPath} />
          <meta property="og:url" content={BASE_URL + asPath} />
          <meta property="og:image" content={BASE_URL + '/assets/TINEB.jpeg'} />
          <meta property="og:title" content={`Petitions | ${ORG_NAME}`} />
          <meta property="og:description" content={desc} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:title" content={`Petitions | ${ORG_NAME}`} />
          <meta property="twitter:description" content={desc} />
          <meta property="twitter:image" content={BASE_URL + '/assets/TINEB.jpeg'} />
          <meta property="twitter:image:alt" content={ORG_NAME} />
        </Head>
        <Container>
          <div className='content-center mx-auto mt-5 pt-3'>
            <h1 className='text-center text-3xl font-bold'>Certificates</h1>
            <form className='mt-4 pt-2' onSubmit={handleSubmit}>
              <div className='flex flex-col items-center'>
                <label className='text-lg font-bold'>
                  <input type='text' id='email' placeholder='Enter e-mail' className='w-full border border-gray-300 px-4 py-2' />
                </label>
                <input type='submit' value='Search' className='mt-4 bg-accent-2 text-accent-1 font-bold py-2 px-4 rounded-full' />
              </div>
            </form>
          </div>
        </Container>
      </Layout>
    </>
  );
};
