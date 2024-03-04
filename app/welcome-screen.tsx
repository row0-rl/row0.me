import { CaretDown } from "@phosphor-icons/react";
import { motion } from "framer-motion";

export default function WelcomeScreen() {
  return (
    <div className="fixed flex flex-col items-center left-0 right-0 bottom-1/2">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-5xl font-bold py-6 text-shadow-glow select-none pl-10"
      >
        Hey there,
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.0 }}
        className="flex items-center py-6 opacity-0 select-none pl-10"
      >
        <span className="text-3xl">
          I&#39;m{" "}
          <div className="inline-block">
            <span className="font-bold animate-pulse">
              Shiyuan Liu
            </span>
            {/*<div className="relative opacity-0 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 group-hover:ease-in-out duration-300">*/}
            {/*  <div className="absolute text-base font-normal left-1/2 -translate-x-1/2 whitespace-nowrap px-5 py-3 shadow-lg border-dotted border-white/10 border-2 rounded-2xl bg-gray-600/60 select-text">*/}
            {/*    Pronounced as <b>shh-ewan leo</b>*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>
        </span>
        <span className="text-xl pl-3 italic">@Row0</span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        key="scrollDownSign"
        animate={{
          opacity: 0.3,
          y: ["0%", "-15%", "0%"],
        }}
        transition={{
          opacity: {
            duration: 1.0,
            delay: 3.0,
          },
          y: {
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          },
        }}
        className="fixed bottom-12"
      >
        <CaretDown size={50} weight="regular" />
      </motion.div>
    </div>
  );
}
