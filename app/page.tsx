"use client";

import MainBody from './mainBody';
import Projects from './projects';
import WhoAmI from './whoAmI';
import Copyright from './copyright';


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-clip">
    
      <div className="flex-grow">
        <MainBody />
        <WhoAmI />
        <Projects />
      </div>
      <Copyright />
    </div>
  );
}
