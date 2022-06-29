import Image from 'next/image';
import Link from 'next/link';

export default function EventCard(event) {
  return (
    <Link href={"/events/" + event.slug}>
      <div className="mx-auto w-full min-w-sm lg:w-3/4 bg-accent-2 rounded-lg shadow mb-8 cursor-pointer">
        <h2 className="p-5 text-center text-2xl font-bold tracking-tight text-accent-1 dark:text-white">{event.title}</h2>
        <div className='w-full relative'>
          <Image height={9} width={16}
            objectFit='cover' layout='responsive' objectPosition={event.position || 'center'} src={event.coverImage} alt={event.title} placeholder="blur"
            blurDataURL={`/_next/image?url=${event.coverImage}&w=16&q=1`} />
        </div>
        <div className="p-5 text-accent-2 rounded-b-lg font-bold shadow lowercase text-center text-sm bg-accent-4">
          {event.excerpt}
        </div>
      </div>
    </Link>
  );
}
