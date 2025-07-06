'use client'
import Head from "next/head";
import {motion} from 'framer-motion';
import { useState,useEffect } from "react";

export default function Home() {
  const[mounted, setMounted]=useState(false);

  useEffect(()=>{
    setMounted(true);
  },[]);

  if(!mounted) return null;
  return (
    <div className="bg-gray-900 min-h-screen">
      <Head>
        <title>Udith | Portfolio</title>
        <meta
          name="description"
          content="Personal portfolio showcasing my work and skills"/>
          <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          {/*Background animated dots  */}  
            <div className="absolute inset-0 opacity-90 ">
              {[...Array(100)].map((_,i)=>(
                
                <div 
                key={i}
                className="absolute h-1 w-1 rounded-full bg-blue-400"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${5 + Math.random() * 10}s`,
                }}
                />
              ))}
            </div>

            {/* content */}
            <div className=" relative z-10 max-w-6xl mx-auto px-4 text-center mt-2">
              <motion.h2 
              className="text-blue-400 font-mono mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              >
                Hello, I'm
              </motion.h2>

              <motion.h1
              className="text-5xl md:text-7xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              >
                Udith Weerakkody
              </motion.h1>

              <motion.div 
              className="text-xl md:text-2xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              >
                <span className="block">Full-Stack Developer</span>
                <span className="block">Turning ideas into digital reality</span>
              </motion.div>

              <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              >
                <a href="#about"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium incline-block mr-4 transition-all duration-300"
                >
                  About Me 
                </a>

                <a href="#work"
                className="bg-transparent border border-blue-600 text-blue-400  hover:bg-blue-900 hover:bg-opacity-30 px-8 py-3 rounded-full font-medium incline-block transition-all duration-300"
                >View My Work</a>
              </motion.div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
              <div className="flex flex-col items-center">
                <span className="text-gray-400 text-sm mb-2">Scroll Down</span>
                <div>
                  <div></div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
