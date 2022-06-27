import Link from 'next/link';
import { useRouter } from 'next/router';
import markdownStyles from '../markdown-styles.module.css';
import SharingIcons from '../SharingIcons';

const HowToDetail = ({ slug, title, category, date, author, content }) => {
  const { asPath } = useRouter();

  return (
    <div className="py-5 w-3/4 lg:w-full mx-auto flex flex-col">
      <div className='absolute font-bold top-[1.1em] left-[1.25em] lg:left-[25%] w-30 h-[2.5em] flex flex-row items-center'>
        <span className="font-bold text-accent-3 text-md ">
          {category}
        </span>
      </div>
      <h1 className="text-accent-3 font-bold text-3xl">{title}</h1>
      {author && <h2 className='mb-0 mt-2 text-sm italics font-bold'>by {author}</h2>}
      <div className={markdownStyles['markdown'] + ' ' + markdownStyles['steps']} dangerouslySetInnerHTML={{ __html: content }}></div>
      <div className='my-0'>
        <SharingIcons title={title} path={asPath} />
      </div>
      <div className="text-center text-accent-3 mt-5 text-sm mb-10 pb-5">
        <Link href='/how-to'>
          <a className="text-accent-3">Go Back</a>
        </Link>
      </div>
    </div >
  );
};

export default HowToDetail;
