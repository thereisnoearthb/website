import React, { useState, useEffect } from 'react';
import AnimatedNumber from "animated-number-react";
import WasteCleanedChart from './WasteCleanedChart';
import SolidarityCard from './SolidarityCard';
import Socials from './Socials';
import AboutBrief from '../About/AboutBrief';
import { ORG_NAME } from '../../lib/constants';
import CleanUpData from "./CleanUpData.json";

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
        <h1 className='hidden'>{ORG_NAME}</h1>
        <div className='my-5 mb-2 pt-1'>
          <WasteCleanedChart data={CleanUpData} />
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
