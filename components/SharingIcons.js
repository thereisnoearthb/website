import { BASE_URL, ORG_NAME } from '../lib/constants';

export default function SharingIcons({ title, path }) {
  const url = `${BASE_URL}${path}`;

  return (
    <div className="flex justify-center">
      <div className="flex items-center">
        <a
          onClick={async () => {
            await navigator.share({
              url: url,
              title: title + ' | ' + ORG_NAME
            });
          }}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer text-xl text-center mx-3"
        >
          <i className="bi bi-share-fill"></i><span className='hidden'>share</span>
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer text-2xl text-center mx-3"
        >
          <i className="bi bi-facebook"></i><span className='hidden'>facebook</span>
        </a>
        <a
          href={`https://twitter.com/intent/tweet?text=${title}&url=${url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer text-2xl text-center mx-3"
        >
          <i className="bi bi-twitter"></i><span className='hidden'>twitter</span>
        </a>
        <a
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer text-2xl text-center mx-3"
        >
          <i className="bi bi-linkedin"></i><span className='hidden'>linkedin</span>
        </a>
        <a
          href={`https://www.reddit.com/submit?url=${url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer text-2xl text-center mx-3"
        >
          <i className="bi bi-reddit"></i><span className='hidden'>reddit</span>
        </a>
      </div>
    </div>
  );
};
