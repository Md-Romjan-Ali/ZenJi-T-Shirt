
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";
import Image from "next/image";

// Poster content generated from video topic: 18 Types of T-Shirts for Men
const posters = [
  {
    id: 1,
    category: "Classic Necklines",
    title: "The Essential Crew & V-Neck",
    description:
      "A timeless classic perfect for almost any occasion. Offers clean lines and versatile style options.",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200&auto=format&fit=crop",
    badge: "01 / 04",
  },
  {
    id: 2,
    category: "Rugged & Polished",
    title: "Henleys & Smart Polos",
    description:
      "Henleys provide a rugged outdoorsy vibe with button plackets, while Polos offer a tailored, smart-casual finish.",
    image:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1200&auto=format&fit=crop",
    badge: "02 / 04",
  },
  {
    id: 3,
    category: "Statement & Streetwear",
    title: "Graphic & Oversized Fits",
    description:
      "Express your personal style with bold artwork or comfortable, oversized streetwear silhouettes.",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&auto=format&fit=crop",
    badge: "03 / 04",
  },
  {
    id: 4,
    category: "Athletic & Functional",
    title: "Performance & Raglan Sleeve",
    description:
      "Moisture-wicking base layers and raglan diagonal sleeve cuts tailored for active workouts and mobility.",
    image:
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1200&auto=format&fit=crop",
    badge: "04 / 04",
  },
];


/* ================================
   Background Poster Component
================================ */

function BackgroundPoster({
  poster,
  index,
  scrollYProgress,
}) {
  const step = 1 / posters.length;

  const start = index * step;
  const end = (index + 1) * step;

  const opacity = useTransform(
    scrollYProgress,
    [start - 0.05, start, end - 0.05, end],
    [0, 1, 1, 0]
  );

  const scale = useTransform(
    scrollYProgress,
    [start, end],
    [1.1, 1]
  );

  return (
    <motion.div
      style={{
        opacity,
        scale,
      }}
      className="absolute inset-0 w-full h-full pointer-events-none"
    >
      <Image
        width={600}
        height={600}
        src={poster.image}
        alt={poster.title}
        className="w-full h-full object-cover opacity-35"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
    </motion.div>
  );
}


/* ================================
   Poster Text Component
================================ */

function PosterText({
  poster,
  index,
  scrollYProgress,
}) {
  const step = 1 / posters.length;

  const start = index * step;
  const end = (index + 1) * step;

  const opacity = useTransform(
    scrollYProgress,
    [start - 0.02, start + 0.05, end - 0.05, end],
    [0, 1, 1, 0]
  );

  const translateY = useTransform(
    scrollYProgress,
    [start - 0.02, start + 0.05, end - 0.05, end],
    [40, 0, 0, -40]
  );

  return (
    <motion.div
      style={{
        opacity,
        y: translateY,
      }}
      className="absolute inset-0 space-y-4"
    >
      <span className="text-red-500 text-xs font-bold tracking-[0.3em] uppercase">
        {poster.category}
      </span>

      <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight italic">
        {poster.title}
      </h2>

      <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-md">
        {poster.description}
      </p>

      <span className="inline-block px-3 py-1 bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300 rounded">
        {poster.badge}
      </span>
    </motion.div>
  );
}


/* ================================
   Foreground Image Component
================================ */

function PosterImage({
  poster,
  index,
  scrollYProgress,
}) {
  const step = 1 / posters.length;

  const start = index * step;
  const end = (index + 1) * step;

  const opacity = useTransform(
    scrollYProgress,
    [start - 0.02, start + 0.05, end - 0.05, end],
    [0, 1, 1, 0]
  );

  return (
    <motion.img
      src={poster.image}
      alt={poster.title}
      style={{
        opacity,
      }}
      className="absolute inset-0 w-full h-full object-cover"
    />
  );
}


/* ================================
   Main Component
================================ */

export default function PosterScrollSection() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={containerRef}
      className="relative h-[400vh] bg-[#0a0a0a] text-white"
    >

      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">


        {/* ================================
            Background Images
        ================================= */}

        {posters.map((poster, index) => (
          <BackgroundPoster
            key={poster.id}
            poster={poster}
            index={index}
            scrollYProgress={scrollYProgress}
          />
        ))}


        {/* ================================
            Main Content
        ================================= */}

        <div className="relative z-10 max-w-6xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">


          {/* ================================
              Text Section
          ================================= */}

          <div className="relative min-h-[300px]">

            {posters.map((poster, index) => (
              <PosterText
                key={poster.id}
                poster={poster}
                index={index}
                scrollYProgress={scrollYProgress}
              />
            ))}

          </div>


          {/* ================================
              Foreground Image Card
          ================================= */}

          <div className="relative aspect-[3/4] w-full max-w-sm mx-auto rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl">

            {posters.map((poster, index) => (
              <PosterImage
                key={poster.id}
                poster={poster}
                index={index}
                scrollYProgress={scrollYProgress}
              />
            ))}

          </div>

        </div>


        {/* ================================
            Scroll Indicator
        ================================= */}

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-neutral-400 animate-bounce">

          <span>
            Scroll To Explore
          </span>

          <FiArrowDown className="w-4 h-4 text-red-500" />

        </div>

      </div>
    </section>
  );
}

