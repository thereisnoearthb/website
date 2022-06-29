import EventCard from "./EventCard";

export default function EventsList({ events: events }) {
  return (
    <section className="w-full mx-auto">
      {events.map((event) => (
        <EventCard
          key={event.slug}
          title={event.title}
          slug={event.slug}
          author={event.author}
          coverImage={event.coverImage}
          excerpt={event.excerpt}
          position={event.position}
        />
      ))}
    </section >
  );
};
