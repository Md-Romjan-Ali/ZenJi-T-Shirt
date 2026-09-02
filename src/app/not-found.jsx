"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiHome, FiShoppingBag, FiArrowLeft } from "react-icons/fi";

export default function NotFound() {
  return (
    <main className="relative min-h-screen w-full bg-white dark:bg-[#050505] text-neutral-900 dark:text-white flex items-center justify-center px-6 overflow-hidden transition-colors duration-300 font-sans">
      
      {/* Ghost Watermark Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[30vw] font-black tracking-tighter text-neutral-200/50 dark:text-neutral-900/40 leading-none italic">
          404
        </span>
      </div>

      <div className="relative z-10 max-w-xl w-full text-center space-y-8 py-12">
        
        {/* Animated Badge & Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-3"
        >
          <span className="inline-block px-3 py-1 bg-red-600/10 text-red-600 dark:text-red-500 border border-red-600/20 text-xs font-mono font-bold uppercase tracking-[0.25em] rounded">
           ERROR 404: DROP NOT FOUND
          </span>

          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight italic">
            Lost In The Void
          </h1>

          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-md mx-auto leading-relaxed">
            The page or item you are looking for has either been sold out, moved to a secret archive, or never existed.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
        >
          {/* Back to Home Button */}
          <Link href="/" className="w-full sm:w-auto">
            <div className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-black text-xs font-bold uppercase tracking-wider transition-transform hover:scale-[1.02] shadow-lg">
              <FiHome className="w-4 h-4" />
              <span>Back To Home</span>
            </div>
          </Link>

          {/* Explore Collection Button */}
          <Link href="/collection" className="w-full sm:w-auto">
            <div className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-neutral-100 dark:bg-[#111111] border border-neutral-300 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 text-xs font-bold uppercase tracking-wider transition-colors hover:border-neutral-400 dark:hover:border-neutral-700">
              <FiShoppingBag className="w-4 h-4" />
              <span>Explore Collection</span>
            </div>
          </Link>
        </motion.div>

        {/* Footer Brand Label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-8 border-t border-neutral-200 dark:border-neutral-900 text-[10px] font-mono tracking-widest text-neutral-400 uppercase"
        >
          ZENJI STREETWEAR — LIMITED DROPS ONLY
        </motion.div>

      </div>
    </main>
  );
}