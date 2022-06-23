export default function VideoLink(video) {
  return (
    <h2 className="text-md mb-3">
      <a href={video.link} target="_blank" rel="noopener noreferrer">
        <i className="bi bi-arrow-right mr-2"></i>
        <span className="font-bold capitalize hover:underline" type="button"> {video.title}</span>
      </a>
    </h2>
  );
}
