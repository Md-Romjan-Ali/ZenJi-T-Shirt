"use client";

import { motion, useTransform } from "framer-motion";
import { getPosterProgress } from "../lib/posterAnimation";

export default function PosterImage({ poster, index, total, scrollYProgress }) {
    const { fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd } =
        getPosterProgress(index, total, 0.05);
    const opacity = useTransform(
        scrollYProgress,
        [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd],
        [0, 1, 1, 0]
    );

    return (
        <motion.img
            src={poster.image}
            alt={poster.title}
            style={{ opacity }}
            className="absolute inset-0 h-full w-full object-cover"
        />
    );
}
