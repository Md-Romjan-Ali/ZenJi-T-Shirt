"use client";

import Image from "next/image";
import { useContext } from "react";
import { AuthContext } from "@/component/AuthContext";

export default function LookbookSection() {
    const { products } = useContext(AuthContext);

    return (
        <section className="w-full bg-white dark:bg-[#050505] text-neutral-900 dark:text-white py-20 px-6 sm:px-10 lg:px-16">

            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="mb-12 max-w-2xl">
                    <p className="text-xs font-bold tracking-[0.25em] text-red-600 uppercase mb-3">
                        SEASONAL LOOKBOOK
                    </p>

                    <h2 className="text-4xl sm:text-5xl font-black uppercase italic tracking-tight mb-4">
                        THE ORIGIN DROP
                    </h2>

                    <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400 leading-relaxed">
                        Explore our latest collection through a curated selection
                        of heavyweight streetwear designed for modern movement.
                    </p>
                </div>

                {/* Image Gallery */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

                    {products.map((product, index) => (
                        <div
                            key={product.id}
                            className={`
                                relative overflow-hidden rounded-xl
                                group
                                ${index % 5 === 0
                                    ? "col-span-2 row-span-2 aspect-square"
                                    : index % 3 === 0
                                        ? "row-span-2 aspect-[3/4]"
                                        : "aspect-[3/4]"
                                }
                            `}
                        >
                            <Image
                                src={product.image}
                                alt={product.productName}
                                fill
                                sizes="(max-width: 768px) 50vw, 25vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}