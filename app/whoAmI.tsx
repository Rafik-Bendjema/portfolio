"use client";
import worldMap from './images/world.png';
import Image from 'next/image';
import img1 from './images/me.jpg';
import img2 from './images/me2.jpg';
import img3 from './images/me3.jpg';
import flutter from './images/flutterIcon.png'; 
import java from './images/java.png'; 
import figma from './images/figma.jpg'; 
import firebase from './images/firebase.png'; 
import mongodb from './images/mongoDb.png'; 
import sql from './images/sql.png'; 
import clang from './images/Clanguage.png'; 
import python from './images/python.jpg'; 
import nextjs from './images/nextJs.jpg'; 
import { motion } from 'framer-motion';

export default function WhoAmI() {
  return (
    <div className="w-full h-auto md:h-screen flex flex-col md:flex-row">
      <div className="h-full w-full md:w-6/12 flex justify-center items-center flex-col p-4">
        <div className="flex flex-row items-center justify-center">
          <h2 className="text-4xl md:text-6xl mr-3">who is</h2>
          <h2 className="text-5xl md:text-7xl text-blue-400">rafik</h2>
        </div>
        <p className="pt-6 text-2xl md:text-3xl text-center md:text-left">I am a mobile app developer and visual computing student</p>
        <h2 className="pt-7 text-4xl md:text-6xl">where ?</h2>
        <div className="relative w-40 h-40 md:w-64 md:h-64 mb-8">
          <Image
            src={worldMap}
            alt="world map"
            layout="cover"
            objectFit="cover"
            className="pt-8"
          />
          <motion.div 
            initial={{ scale: 4 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 2 }}
            className="absolute top-[38%] left-[35%] transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 md:w-4 md:h-4 bg-red-500 rounded-full border-2 border-white"
          ></motion.div>
        </div>
        <h2 className='text-4xl md:text-6xl pt-5'>what i use ?</h2>
        <div className='pt-5 grid grid-cols-3 gap-2 md:gap-4'>
          <Image className="image-class" src={flutter} width={50} height={50} alt="flutter" />
          <Image className="image-class" src={python} width={50} height={50} alt="python" />
          <Image className="image-class" src={firebase} width={50} height={50} alt="firebase" />
          <Image className="image-class" src={java} width={50} height={50} alt="java" />
          <Image className="image-class" src={mongodb} width={50} height={50} alt="mongodb" />
          <Image className="image-class" src={sql} width={50} height={50} alt="sql" />
          <Image className="image-class" src={figma} width={50} height={50} alt="figma" />
          <Image className="image-class" src={clang} width={50} height={50} alt="clang" />
          <Image className="image-class" src={nextjs} width={50} height={50} alt="nextjs" />
        </div>
      </div>
      <div className='h-full w-full md:w-6/12 flex justify-center items-center overflow-x-clip p-4'>
        <div className="relative w-full h-full flex justify-center items-center">
          <div className="relative w-full max-w-sm h-96 flex justify-center items-center">
            <div className="group absolute w-48 h-48 md:w-64 md:h-64 left-1/3 transform -translate-x-1/2 z-10 hover:z-30 transition-all">
              <Image
                src={img3}
                alt="Image 3"
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-110 transition-transform duration-300 rounded-lg"
              />
            </div>
            <div className="group absolute w-56 h-56 md:w-72 md:h-72 left-[45%] transform -translate-x-1/3 z-20 hover:z-30 transition-all">
              <Image
                src={img1}
                alt="Image 1"
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-110 transition-transform duration-300 rounded-lg"
              />
            </div>
            <div className="group absolute w-48 h-48 md:w-64 md:h-64 left-2/3 transform hover:z-30 ">
              <Image
                src={img2}
                alt="Image 2"
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-110 transition-transform duration-300 rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
