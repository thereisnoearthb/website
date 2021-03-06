const SectionHero = ({ title, content }) => {
  return (
    <div className="p-5 w-full bg-accent-2 grid grid-cols4 gap-3 lg:w-3/4 mx-auto lg:rounded-md">
      <h2 className='font-bold text-white text-3xl col-span-3' style={{ alignItems: 'center' }}>{title}</h2>
      <div className="text-accent-4 lowercase flex text-sm font-bold text-sm text-right col-span-4" style={{ alignItems: 'center' }}>
        {content}
      </div>
    </div>
  );
};

export default SectionHero;
