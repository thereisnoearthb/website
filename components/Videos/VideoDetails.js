const VideoDetails = ({ title, description }) => {
  return (
    <div className="mx-9 mt-4 md:w-3/4">
      <h2 className="font-bold text-lg text-accent-3">{title}</h2>
      <p className="mt-1 text-md text-justify">{description}</p>
    </div>
  );
};

export default VideoDetails;
