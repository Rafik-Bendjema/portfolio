"use client";

import HeaderPage from './header';
import MainBody from './mainBody';
import Projects from './projects';
import WhoAmI from './whoAmI';

export default function Home() {
  return (
    <div className='w-full h-screen flex flex-col overflow-x-auto'>
      <div className='h-screen'>
        <MainBody />
      </div>
      <div className='h-screen'>
        <WhoAmI />
      </div>
      <div className='h-screen'>
        <Projects />
      </div>
    </div>
  );
}
