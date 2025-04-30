"use client";
import worldMap from './images/world.png';
import Image from 'next/image';
import img1 from './images/me.jpg';
import img2 from './images/me2.jpg';
import img3 from './images/me3.jpg';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function WhoAmI() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [img1, img2, img3];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row">
      <div className="h-full w-full md:w-6/12 flex justify-center items-center flex-col p-4">
        <div className="flex flex-row items-center justify-center">
          <h2 className="text-4xl md:text-6xl mr-3">who is</h2>
          <h2 className="text-5xl md:text-7xl text-blue-400">rafik</h2>
        </div>
        <p className="pt-6 text-2xl md:text-3xl text-center max-w-[80%]">
          I am a mobile app developer and visual computing student
        </p>
        <h2 className="pt-7 text-4xl md:text-6xl">where ?</h2>
        <div className="relative w-40 h-40 md:w-64 md:h-64 mb-8">
          <Image
            src={worldMap}
            alt="world map"
            layout="fill"
            objectFit="contain"
            className="pt-8"
          />
          <motion.div 
            initial={{ scale: 4 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 2 }}
            className="absolute top-[38%] left-[35%] transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 md:w-4 md:h-4 bg-red-500 rounded-full border-2 border-white"
          />
        </div>
      </div>

      <div className='h-full w-full md:w-6/12 flex justify-center items-center'>
        <div className="relative w-[80vw] md:w-[30vw] aspect-square mb-20 md:mb-0">
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentImage}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={images[currentImage]}
                alt={`Image ${currentImage + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-xl shadow-2xl"
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-[-2rem] left-1/2 transform -translate-x-1/2 flex gap-2 mb-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentImage === index ? 'bg-blue-500 scale-125' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
