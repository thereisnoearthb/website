import Link from 'next/link';
import { useRouter } from 'next/router';
import { ORG_NAME } from '../../lib/constants';
import markdownStyles from '../markdown-styles.module.css';
import SharingIcons from '../SharingIcons';

export default function CampaignDetail({ title, coverImage, link, button, date, content }) {
  const { asPath } = useRouter();

  return (
    <>
      <div>
        <div className='my-5 mt-6 w-11/12 mx-auto flex flex-row justify-between'>
          <div>
            <i className='bi bi-arrow-left mr-2'></i>
            <Link href='/'>Go Back</Link>
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
        </div>
        <div className="mb-8 sm:mx-0 w-full mx-auto relative flex items-center justify-center">
          <a href={link} target={'_blank'} className='button w-3/4 mx-auto text-center border border-accent-2 p-5 uppercase hover:bg-accent-2 hover:text-accent-1 font-bold text-xl'>
            {button}
          </a>
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
