"use client";

import React, {useState, useEffect} from "react";
import {motion} from "framer-motion";
import Image from "next/image";
import Nav from "./nav";
import Footer from "./footer";
import Head from "next/head";
import WelcomeScreen from "./welcome-screen";
import Detail from "./detail";

export default function Home() {
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolledDown && window.scrollY < 100) setIsScrolledDown(false);
      if (!isScrolledDown && window.scrollY > 200) setIsScrolledDown(true);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolledDown]);

  return (
    <main className="font-hermit flex flex-col min-h-screen">
      {/* <Nav /> */}
      <div
        className="fixed -z-[1] top-[20%] right-[7%] bg-gradient-radial from-blue-950 to-transparent blur-2xl rotate-[30deg] w-[40rem] h-[16rem]"></div>
      <section className="px-20 min-h-screen flex-1">
        <motion.div
          key="welcome"
          initial={false}
          animate={{opacity: isScrolledDown ? 0 : 1}}
          exit={{opacity: 0, transition: {duration: 0.6}}}
          style={{ pointerEvents: isScrolledDown ? 'none' : 'auto' }}
          className="min-h-[30vh]"
        >
          <WelcomeScreen/>
        </motion.div>

        <motion.div
          key="detail"
          initial={{opacity: 0}}
          animate={{
            opacity: isScrolledDown ? 1 : 0,
            transition: {duration: 0.5},
          }}
          style={{ pointerEvents: isScrolledDown ? 'auto' : 'none' }}
        >
          <Detail/>
        </motion.div>

        {/* <WelcomeScreen /> */}
        {/* <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div> */}
      </section>
      <Footer/>
    </main>
  );
}
