"use client";

import MainBody from './mainBody';
import Projects from './projects';
import WhoAmI from './whoAmI';
import Copyright from './copyright';
import Skills from './skills';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-clip snap-y snap-mandatory">
      <section className="snap-start min-h-screen flex"><MainBody /></section>
      <section className="snap-start min-h-screen flex"><WhoAmI /></section>
      <section className="snap-start min-h-screen flex"><Skills /></section>
      <section className="snap-start min-h-screen flex"><Projects /></section>
      <footer><Copyright /></footer>
    </div>
  );
}
