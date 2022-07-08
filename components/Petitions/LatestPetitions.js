import PetitionLink from "./PetitionLink";

export default function LatestPetitions({ petitions }) {
  return (
    <section className="mx-auto mb-20 pb-10">
      <h2 className="mb-2.5 mt-6 text-xl text-accent-3 font-bold">
        Latest Petitions
      </h2>
      <div className="">
        {petitions.map((petition) => (
          <PetitionLink
            key={petition.slug}
            title={petition.title}
            link={petition.link}
            slug={petition.slug}
            coverImage={petition.coverImage}
            content={petition.content}
            redirect={petition.redirect}
          />
        ))}
      </div>
    </section>
  );
};
