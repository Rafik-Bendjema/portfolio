"use client";

import Image from "next/image";
import linkedin from "./images/linkedin.png";
import insta from './images/insta.png';
import github from './images/github.png';
import whatsapp from './images/whatsapp.png';
import myImage from './images/mockup.png';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

const downloadCV = () => {
    const atag = document.createElement("a");
    atag.href = "/cv.pdf"; // Adjusted path
    atag.setAttribute("download", "cv.pdf");
    document.body.appendChild(atag);
    atag.click();
    document.body.removeChild(atag);
};

export default function MainBody() {
    return (
        <div className="relative min-h-screen w-full flex flex-col md:flex-row items-center justify-center">
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative w-full md:w-6/12 flex justify-center items-center p-4"
            >
                <div className="absolute w-64 h-64 md:w-96 md:h-96 bg-blue-500 rounded-full blur-lg opacity-30"></div>
                <Image
                    src={myImage}
                    alt="phone"
                    width={300}
                    height={600}
                    className="relative z-10 max-w-[60vw] max-h-[60vh] w-auto h-auto"
                    priority
                />
                <div className="absolute inset-0 flex items-center justify-center z-20 flex-col">
                    <div className="grid grid-cols-2 grid-rows-2 gap-4 md:gap-6 scale-50 md:scale-75">
                        <a href="https://wa.me/213542331709" className="transform hover:scale-125 transition-transform">
                            <Image src={whatsapp} alt="whatsapp" width={30} height={30} className="w-[4vw] md:w-[1.5vw] min-w-[20px]" />
                        </a>
                        <a href="https://www.linkedin.com/in/bendjema-ahmed-rafik-353bb4249/" className="transform hover:scale-125 transition-transform">
                            <Image src={linkedin} alt="linkedin" width={30} height={30} className="w-[4vw] md:w-[1.5vw] min-w-[20px]" />
                        </a>
                        <a href="https://www.instagram.com/rafik.b.a" className="transform hover:scale-125 transition-transform">
                            <Image src={insta} alt="instagram" width={30} height={30} className="w-[4vw] md:w-[1.5vw] min-w-[20px]" />
                        </a>
                        <a href="https://github.com/Rafik-Bendjema" className="transform hover:scale-125 transition-transform">
                            <Image src={github} alt="github" width={30} height={30} className="w-[4vw] md:w-[1.5vw] min-w-[20px]" />
                        </a>
                    </div>
                    <div onClick={downloadCV} 
                         className="mt-4 p-2 bg-white rounded-xl text-gray-700 hover:scale-110 cursor-pointer
                                  text-[1.5vw] md:text-[0.8vw] min-text-[10px]">
                        download CV
                    </div>
                </div>
            </motion.div>
            <div className="w-full md:w-6/12 flex justify-center items-center flex-col p-4">
                <h1 className="text-3xl md:text-5xl">i am</h1>
                <div className="scale-100 md:scale-150 p-4 md:p-10 font-mono text-xl md:text-3xl">
                    <Typewriter
                        options={{
                            strings: ['a mobile app developer', 'ui/ux designer', 'software engineer', 'visual computing student'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
