import Image from "next/image";

const HowToHeader = () => {
  return (
    <>
      <div className='m-5 mt-6 mb-7'>
        <h1 className="text-4xl font-bold text-accent-3 w-40">how to? guides</h1>
        <div className='absolute right-5 top-0 lg:right-[31%]'>
          <Image
            placeholder="blur"
            blurDataURL={`/_next/image?url=${'/assets/cleanup.jpg'}&w=16&q=1`}
            src='/assets/cleanup.jpg'
            objectFit="cover"
            style={{
              borderRadius: '0px 0px 235px 235px',
            }}
            width={160}
            height={175}
            priority
            alt="How To? Guides"
          ></Image>
        </div>
      </div>
    </>
  );
};

export default HowToHeader;
