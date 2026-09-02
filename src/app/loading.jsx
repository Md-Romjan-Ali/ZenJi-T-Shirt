"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-[#050505] text-neutral-900 dark:text-white transition-colors duration-300 font-sans">
      
      {/* Brand Logo / Icon Animation */}
      <div className="relative flex items-center justify-center">
        
        {/* Outer Pulsing Glow */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-24 h-24 rounded-full bg-red-600/20 blur-xl"
        />

        {/* Spinning Progress Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "linear",
          }}
          className="w-16 h-16 rounded-full border-2 border-neutral-200 dark:border-neutral-800 border-t-red-600 dark:border-t-red-500"
        />

        {/* Center Brand Monogram */}
        <span className="absolute text-xs font-black font-mono tracking-widest text-neutral-900 dark:text-white uppercase">
          Z
        </span>
      </div>

      {/* Loading Text & Animated Bar */}
      <div className="mt-8 space-y-3 text-center">
        
        {/* Animated Brand Title */}
        <motion.p
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-xs font-mono font-bold tracking-[0.3em] uppercase text-neutral-600 dark:text-neutral-400"
        >
          Loading ZENJI Drop...
        </motion.p>

        {/* Progress Bar Container */}
        <div className="w-36 h-[2px] bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden mx-auto">
          <motion.div
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-full h-full bg-red-600 dark:bg-red-500 rounded-full"
          />
        </div>
        
      </div>

    </div>
  );
}