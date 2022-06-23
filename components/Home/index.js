import React, { useState, useEffect } from 'react';
import AnimatedNumber from "animated-number-react";
import WasteCleanedChart from './WasteCleanedChart';
import SolidarityCard from './SolidarityCard';
import Socials from './Socials';
import AboutBrief from '../About/AboutBrief';

const LineData = [
  { x: 319, y: 44 },
  { x: 318, y: 95 },
  { x: 317, y: 54.2 },
  { x: 316, y: 218 },
  { x: 315, y: 50 },
  { x: 314, y: 63.5 },
  { x: 313, y: 33.5 },
  { x: 312, y: 13 },
  { x: 311, y: 70 },
  { x: 310, y: 16.5 },
  { x: 309, y: 12 },
  { x: 308, y: 7.9 },
  { x: 307, y: 9 }
];

export default function Home(props) {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCounter1(11031);
      setCounter2(19545.135);
    }, 2000);
  });

  return (
    <>
      <div className='w-full min-h-screen mx-auto flex flex-col'>
        <div className='my-5 mb-2 pt-1'>
          <WasteCleanedChart data={LineData} />
        </div>
        <div className='my-4 flex flex-col items-center text-accent-2'>
          <div className='text-7xl mb-0'>
            <AnimatedNumber
              value={counter1}
              formatValue={(value) => new Intl.NumberFormat().format(Math.round(value.toFixed(0)))}
            />
          </div>
          <div className='text-2xl' style={{ marginTop: '-.5em' }}>
            people volunteered
          </div>
        </div>
        <div className='mb-2 mx-6 text-center flex flex-col items-center text-accent-2'>
          <div className='text-7xl mb-0 text-center'>
            <AnimatedNumber
              value={counter2}
              formatValue={(value) => new Intl.NumberFormat().format((value.toFixed(2)))}
            />
          </div>
          <div className='text-2xl ' style={{ marginTop: '-.5em' }}>
            kg of non-biodegradable waste removed
          </div>
        </div>
        <div className='my-6 mb-4 py-3 mx-6 text-center flex flex-col items-center text-accent-1'>
          <SolidarityCard />
        </div>
        <div className='mt-8 bg-accent-2 min-h-screen flex flex-col items-center justify-between'>
          <AboutBrief about={props.about} />
        </div>
        <div className='mx-4 bg-accent-1 my-8 mb-1' style={{ minHeight: '7em' }}>
          <div className='text-center text-3xl text-accent-2'>
            <Socials />
          </div>
        </div>
      </div>
    </>
  );
};
