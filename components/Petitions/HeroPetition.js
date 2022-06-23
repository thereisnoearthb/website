import Image from "next/image";
import { useState } from "react";
import PetitionModal from "./PetitionModal";

export default function HeroPetition({ title, coverImage, slug, link, content }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="my-2.5 mb-5 content-center">
        <h1 className="py-4 shadow bg-accent-2 text-accent-1 text-xl font-bold uppercase text-center">
          Sign the Petitions
        </h1>
        <div className="flex flex-col shadow items-center justify-center bg-white cursor-pointer" onClick={() => setShow(true)}>
          <h2 className="py-3 mt-2 mb-1 font-bold text-xl capitalize hover:underline cursor-pointer">{title}</h2>
          <div className="mx-9 mb-9 relative w-3/4">
            <Image blurDataURL={`/_next/image?url=${coverImage}&w=16&q=1`}
              priority
              height={9} width={16}
              objectFit='cover' layout='responsive'
              objectPosition="center"
              className="rounded-3xl"
              placeholder="blur"
              src={coverImage}
              alt={title} />
          </div>
        </div>
        <PetitionModal petition={{ title, coverImage, slug, link, content }} show={show} setShow={setShow} />
      </div>
    </>
  );
}
