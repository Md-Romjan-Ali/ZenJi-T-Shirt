"use client";

import Image from "next/image";
import { motion, useTransform } from "framer-motion";
import { getPosterProgress } from "../lib/posterAnimation";

export default function PosterBackground({ poster, index, total, scrollYProgress }) {
    const { start, end, fadeInStart, fadeOutStart, fadeOutEnd } =
        getPosterProgress(index, total, 0.05);

    const opacity = useTransform(
        scrollYProgress,
        [fadeInStart, start, fadeOutStart, fadeOutEnd],
        [0, 1, 1, 0]
    );
    const scale = useTransform(scrollYProgress, [start, end], [1.1, 1]);

    return (
        <motion.div
            style={{ opacity, scale }}
            className="absolute inset-0 h-full w-full pointer-events-none"
        >
            <Image
                src={poster.image}
                alt={poster.title}
                width={1200}
                height={800}
                sizes="100vw"
                className="h-full w-full object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
        </motion.div>
    );
}
