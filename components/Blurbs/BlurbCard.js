import Image from 'next/image';
import Link from 'next/link';

export default function BlurbCard(blurb) {
  return (
    <div className="mx-auto w-full min-w-sm lg:w-3/4 bg-accent-2 rounded-lg shadow mt-8 mb-8">
      <Link href={"/blurbs/" + blurb.slug}>
        <div className='w-full relative'>
          <Image height={9} width={16}
            objectFit='cover' layout='responsive' objectPosition='center' src={blurb.coverImage} alt={blurb.title} placeholder="blur" blurDataURL={`/_next/image?url=${blurb.coverImage}&w=16&q=1`} className='rounded-t-lg' />
        </div>
      </Link>
      <div className="p-5">
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-accent-1 dark:text-white">{blurb.title}</h2>
        <p className="mb-4 text-sm font-normal text-accent-1 dark:text-gray-400">{blurb.excerpt}</p>
        <div className="inline-flex items-center py-2 px-3 text-sm font-medium text-accent-2 bg-accent-1 rounded-lg hover:bg-accent-1 hover:text-accent-2 focus:ring-4 focus:outline-none">
          <Link href={"/blurbs/" + blurb.slug}>
            Read Article
          </Link>
          <i className='bi bi-arrow-right ml-1'></i>
        </div>
      </div>
    </div>
  );
}
