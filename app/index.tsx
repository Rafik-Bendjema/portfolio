"use client";
import Image from 'next/image';
import flutter from '@/app/images/flutterIcon.png';
import java from '@/app/images/java.png';
import figma from '@/app/images/figma.jpg';
import firebase from '@/app/images/firebase.png';
import mongodb from '@/app/images/mongoDb.png';
import sql from '@/app/images/sql.png';
import clang from '@/app/images/Clanguage.png';
import python from '@/app/images/python.jpg';
import nextjs from '@/app/images/nextJs.jpg';
import { motion } from 'framer-motion';

export default function Skills() {
  const skills = [
    { icon: flutter, name: 'Flutter' },
    { icon: python, name: 'Python' },
    { icon: firebase, name: 'Firebase' },
    { icon: java, name: 'Java' },
    { icon: mongodb, name: 'MongoDB' },
    { icon: sql, name: 'SQL' },
    { icon: figma, name: 'Figma' },
    { icon: clang, name: 'C' },
    { icon: nextjs, name: 'Next.js' },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col justify-start md:justify-center items-center p-4 pt-24 md:p-4">
      <h2 className='text-4xl md:text-6xl mb-16'>What I Use</h2>
      <div className='grid grid-cols-3 md:grid-cols-3 gap-6 md:gap-16 max-w-4xl'>
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center"
          >
            <div className="bg-white rounded-2xl p-3 md:p-4 w-[60px] h-[60px] md:w-[100px] md:h-[100px] flex items-center justify-center hover:scale-110 transition-transform duration-300">
              <Image
                src={skill.icon}
                alt={skill.name}
                width={50}
                height={50}
                className="object-contain w-[30px] h-[30px] md:w-[60px] md:h-[60px]"
              />
            </div>
            <span className="mt-2 text-sm md:text-lg">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
