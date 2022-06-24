import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ORG_NAME } from '../../lib/constants';
import FormattedDate from '../FormattedDate';
import markdownStyles from '../markdown-styles.module.css';
import SharingIcons from '../SharingIcons';

export default function BlurbDetail({ title, coverImage, date, content }) {
  const { asPath } = useRouter();

  return (
    <>
      <div>
        <div className='my-5 mt-6 w-11/12 mx-auto flex flex-row justify-between'>
          <div>
            <i className='bi bi-arrow-left mr-2'></i>
            <Link href='/blurbs/'>Go Back</Link>
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
        <h1 className='text-2xl px-2 text-center mt-5 font-bold capitalize'>{title}</h1>
        <div className="mb-7 px-2 mt-1 text-sm italic text-center lowercase">
          Posted on <FormattedDate dateString={date} />
        </div>
        <div className="mb-8 sm:mx-0 w-full mx-auto relative">
          <Image src={coverImage} alt={title} height={9} width={16}
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
      </div>
    </>
  );
}
