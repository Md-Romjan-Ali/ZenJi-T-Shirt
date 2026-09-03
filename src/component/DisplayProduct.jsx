"use client"
import { motion } from "framer-motion";
import { FiHeart, FiArrowUpRight } from "react-icons/fi";
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { toast } from 'sonner';
const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
const DisplayProduct = ({ product }) => {
    const { favouriteIds = [], toggleFavourite = () => { } } = useContext(AuthContext) || {};
    const isFavourite = favouriteIds.includes(product.id);
    const discountPercentage = Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
    );
    return (
        <div>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}

            >

                <motion.div
                    key={product.id}
                    variants={cardVariants}
                    whileHover={{ y: -8 }}
                    className="group relative rounded-xl overflow-hidden bg-neutral-100 dark:bg-[#111111] border border-neutral-200 dark:border-neutral-800 flex flex-col justify-between transition-shadow duration-300 hover:shadow-2xl"
                >
                    {/* Image & Badges Container */}
                    <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-200 dark:bg-neutral-900">
                        <Image
                            width={500}
                            height={500}
                            src={product.image}
                            alt={product.productName}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />

                        {/* Top Left Category Badge */}
                        <span className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-white text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded border border-white/10">
                            {product.category || 'ZENJI ESSENTIAL'}
                        </span>

                        {/* Top Right Wishlist Quick Button */}
                        <button
                            aria-label={isFavourite ? `Remove ${product.productName} from favourites` : `Add ${product.productName} to favourites`}
                            onClick={() => {
                                toggleFavourite(product.id);
                                toast.success(isFavourite ? 'Removed from favourites' : 'Added to favourites');
                            }}
                            className={`absolute top-3 right-3 p-2 rounded-full bg-black/40 hover:bg-black/80 backdrop-blur-md text-white transition-colors ${isFavourite ? 'text-red-400' : ''}`}
                        >
                            <FiHeart className={`w-4 h-4 ${isFavourite ? 'fill-current' : ''}`} />
                        </button>
                    </div>

                    {/* Details Section */}
                    <div className="p-4 space-y-2">
                        <h3 className="font-semibold text-sm truncate group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                            {product.productName}
                        </h3>
                        <p className="text-xs leading-relaxed text-neutral-500 dark:text-neutral-400 line-clamp-2">
                            {product.description || `A considered ${product.productName.toLowerCase()} made for everyday rotation.`}
                        </p>

                        {/* Pricing */}
                        <div className="flex items-center gap-2 font-mono">
                            <span className="text-2xl text-gray-900 font-bold ">
                                ৳{product.price}
                            </span>
                            <span className="text-lg text-neutral-400 line-through">
                                ৳{product.originalPrice}
                            </span>
                            <span className="text-[14px] font-bold text-red-500 ml-auto">
                                -{discountPercentage}%
                            </span>
                        </div>
                        <Link href={`/product/${product.id}`} className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-neutral-900 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-red-600 dark:bg-white dark:text-black dark:hover:bg-red-500 dark:hover:text-white">
                            View Details
                            <FiArrowUpRight className="h-4 w-4" />
                        </Link>
                    </div>
                </motion.div>

            </motion.div>
        </div>
    );
};

export default DisplayProduct;