"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight, FiShield, FiPackage, FiRefreshCw, FiMapPin } from "react-icons/fi";

export default function AboutSection() {
  const highlights = [
    {
      icon: <FiShield className="w-5 h-5 text-red-600 dark:text-red-500" />,
      title: "Heavyweight Quality",
      desc: "Crafted in 100% heavyweight 240gsm premium cotton built to last.",
    },
    {
      icon: <FiRefreshCw className="w-5 h-5 text-red-600 dark:text-red-500" />,
      title: "No Restocks Ever",
      desc: "Exclusive limited-edition drops. Once a piece sells out, it's gone forever.",
    },
    {
      icon: <FiPackage className="w-5 h-5 text-red-600 dark:text-red-500" />,
      title: "Australia-Wide Shipping",
      desc: "Free standard shipping on all orders over A$100 with 5–10 day delivery.",
    },
    {
      icon: <FiMapPin className="w-5 h-5 text-red-600 dark:text-red-500" />,
      title: "Born in Australia",
      desc: "Based in Australia (est. 2024), shipping to all states and territories.",
    },
  ];

  return (
    <section className="w-full bg-white dark:bg-[#050505] text-neutral-900 dark:text-neutral-100 py-20 px-6 sm:px-10 lg:px-16 transition-colors duration-300 font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Main Banner / Brand Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Readable Text Block */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-2">
              <span className="text-xs font-bold font-mono tracking-[0.25em] text-red-600 dark:text-red-500 uppercase">
                 ABOUT ZENJI
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight italic leading-tight text-neutral-950 dark:text-white">
                ANIME STREETWEAR AUSTRALIA — <br />
                <span className="text-red-600 dark:text-red-500">BORN FROM THE WARRIOR SPIRIT.</span>
              </h2>
            </div>

            {/* High Contrast Body Text */}
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-2xl font-normal">
              <p>
                ZENJI began with one belief: <strong className="text-neutral-950 dark:text-white font-semibold">what you wear should tell a story.</strong> Inspired by samurai discipline, Japanese iconography, and modern anime art, we create premium streetwear for those who choose their own path.
              </p>
              <p>
                Every ZENJI piece combines original Japanese-inspired artwork, powerful symbolism, and oversized silhouettes to express courage, creativity, and individuality.
              </p>
              <p>
                ZENJI is more than a name on a shirt. It represents the warrior within—the part of us that keeps moving forward, stays true to itself, and refuses to fade into the crowd. We design for the <strong className="text-neutral-950 dark:text-white font-semibold">dreamers, fighters, creators, and outsiders</strong> shaping their own future.
              </p>
            </div>

            <div className="pt-2">
              <Link href="/collection">
                <div className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-neutral-950 text-white dark:bg-white dark:text-black text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:bg-red-600 dark:hover:bg-red-600 dark:hover:text-white group shadow-md">
                  <span>EXPLORE THE COLLECTION</span>
                  <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            </div>
          </motion.div>

          {/* Right Philosophy / Manifesto Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 bg-neutral-100 dark:bg-[#0e0e0e] p-8 sm:p-10 rounded-2xl border border-neutral-300/70 dark:border-neutral-800 relative space-y-6 shadow-sm"
          >
            {/* Background Japanese Watermark Character */}
            <span className="text-6xl font-serif text-red-600/10 dark:text-red-500/15 absolute top-4 right-6 select-none pointer-events-none">
              侍
            </span>

            <div className="space-y-3">
              <p className="text-xs font-mono font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-widest">
                Our Manifesto
              </p>
              <blockquote className="text-xl sm:text-2xl font-black italic uppercase tracking-tight text-neutral-950 dark:text-white leading-snug">
                WEAR YOUR STORY. WEAR YOUR SPIRIT. WEAR ZENJI.
              </blockquote>
            </div>

            <p className="text-xs font-mono font-medium text-neutral-600 dark:text-neutral-400 uppercase tracking-wider border-t border-neutral-300 dark:border-neutral-800/80 pt-4">
              For the Dreamers • Fighters • Creators • Outsiders
            </p>
          </motion.div>

        </div>

        {/* Feature Cards Grid (High Contrast Light & Dark Colors) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-neutral-200 dark:border-neutral-800">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="p-6 rounded-xl bg-neutral-50 dark:bg-[#0a0a0a] border border-neutral-200 dark:border-neutral-800/90 space-y-3 transition-colors"
            >
              <div className="p-2.5 w-fit rounded-lg bg-red-100/60 dark:bg-neutral-900 border border-red-200/50 dark:border-neutral-800">
                {item.icon}
              </div>
              <h3 className="font-bold text-sm uppercase tracking-wide text-neutral-950 dark:text-white">
                {item.title}
              </h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}