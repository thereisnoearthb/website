export default function SolidarityCard(props) {
  return (
    <div className="max-w-sm px-6 bg-accent-2 rounded-lg border border-accent-2 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="p-5">
        <h2 className="mb-2 text-2xl font-bold tracking-tight dark:text-white">Tweet in Solidarity</h2>
        <a href="https://twitter.com/intent/tweet?url=https://thereisnoearthb.org&text=I+stand+in+solidarity+with+@thereisnoearthb.&hashtags=ThereIsNoEarthB" className="cursor-pointer inline-flex items-center mt-3 py-2 px-3 text-lg font-bold text-center text-accent-2 bg-accent-1 rounded-lg focus:ring-4 focus:outline-none focus:ring-accent-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-3">
          <i className='bi bi-twitter mr-2'></i> #ThereIsNoEarthB
        </a>
      </div>
    </div>
  );
}
