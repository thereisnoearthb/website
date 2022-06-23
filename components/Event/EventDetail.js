import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ORG_NAME } from '../../lib/constants';
import FormattedDate from '../FormattedDate';
import markdownStyles from '../markdown-styles.module.css';
import SharingIcons from '../SharingIcons';

export default function BlurbDetail({ title, coverImage, author, category, date, content }) {
  const { asPath } = useRouter();

  return (
    <>
      <div>
        <div className='my-5 mt-6 w-11/12 mx-auto flex flex-row justify-between'>
          <div className='cursor-pointer'>
            <Link href='/events/'>
              <a>
                <i className='bi bi-arrow-left mr-2'></i>
                Go Back
              </a>
            </Link>
          </div>
          <div onClick={async () => {
            await navigator.share({
              url: asPath,
              title: title + ' | ' + ORG_NAME
            });
          }} className="cursor-pointer">
            Share
            <a className="text-md text-center ml-2">
              <i className="bi bi-share-fill"></i>
            </a>
          </div>
        </div>
        <h1 className='text-2xl px-5 text-center mt-5 font-bold capitalize'>{title}</h1>
        <div className="mb-2 px-2 mt-1 text-sm italic text-center lowercase">
          Posted on <FormattedDate dateString={date} /> {author && `by ${author}`}
          {/* {author && <><br /><strong>{author}</strong></>} */}
        </div>
        <div className='w-full mb-5 mx-auto text-center'>
          <button className="bg-accent-2 lowercase text-accent-1 font-bold text-xs py-2 px-4 rounded-full">
            {category}
          </button>
        </div>
      </div>
      <div className="mb-8 sm:mx-0 w-full mx-auto relative">
        <Image src={coverImage} alt={title} className="" height={9} width={16}
          objectFit='cover' layout='responsive' objectPosition='center' />
      </div>
      <div className="w-3/4 text-justify mx-auto mb-8">
        <div className={markdownStyles['markdown']} dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
      <div className='my-5 text-center'>
        <div className='mt-4'>
          <SharingIcons title={title} path={asPath} />
        </div>
      </div>
    </>
  );
}
