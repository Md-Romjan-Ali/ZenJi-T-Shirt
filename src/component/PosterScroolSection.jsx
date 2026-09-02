"use client";

import { useRef } from "react";
import { FiArrowDown } from "react-icons/fi";
import { useScroll } from "framer-motion";
import PosterBackground from "./PosterBackground";
import PosterImage from "./PosterImage";
import PosterText from "./PosterText";
import posters from "../lib/posterData";

export default function PosterScrollSection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });
    const totalPosters = posters.length;

    return (
        <section
            ref={containerRef}
            className="relative h-[400vh] bg-[#0a0a0a] text-white"
        >
            <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
                {posters.map((poster, index) => (
                    <PosterBackground
                        key={poster.id}
                        poster={poster}
                        index={index}
                        total={totalPosters}
                        scrollYProgress={scrollYProgress}
                    />
                ))}

                <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 px-6 md:grid-cols-2">
                    <div className="relative min-h-[300px]">
                        {posters.map((poster, index) => (
                            <PosterText
                                key={poster.id}
                                poster={poster}
                                index={index}
                                total={totalPosters}
                                scrollYProgress={scrollYProgress}
                            />
                        ))}
                    </div>

                    <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 shadow-2xl">
                        {posters.map((poster, index) => (
                            <PosterImage
                                key={poster.id}
                                poster={poster}
                                index={index}
                                total={totalPosters}
                                scrollYProgress={scrollYProgress}
                            />
                        ))}
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 animate-bounce items-center gap-2 text-xs font-semibold uppercase tracking-widest text-neutral-400">
                    <span>Scroll To Explore</span>
                    <FiArrowDown className="h-4 w-4 text-red-500" />
                </div>
            </div>
        </section>
    );
}
