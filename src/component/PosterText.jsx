"use client";

import { motion, useTransform } from "framer-motion";
import { getPosterProgress } from "../lib/posterAnimation";

export default function PosterText({ poster, index, total, scrollYProgress }) {
    const { start, fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd } =
        getPosterProgress(index, total, 0.05);

    const opacity = useTransform(
        scrollYProgress,
        [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd],
        [0, 1, 1, 0]
    );
    const y = useTransform(
        scrollYProgress,
        [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd],
        [40, 0, 0, -40]
    );

    return (
        <motion.div style={{ opacity, y }} className="absolute inset-0 space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-red-500">
                {poster.category}
            </span>
            <h2 className="text-3xl font-black uppercase italic tracking-tight md:text-5xl">
                {poster.title}
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-neutral-400 md:text-base">
                {poster.description}
            </p>
            <span className="inline-block rounded border border-neutral-800 bg-neutral-900 px-3 py-1 font-mono text-xs text-neutral-300">
                {poster.badge}
            </span>
        </motion.div>
    );
}
