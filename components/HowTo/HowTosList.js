import HowToLink from './HowToLink';

const HowTosList = ({ howTos }) => {
  return (
    <div className='ml-5 mt-5 mb-5'>
      {howTos.map(howTo => (
        <HowToLink key={howTo.title} howTo={howTo} />
      ))}
    </div>
  );
};

export default HowTosList;
