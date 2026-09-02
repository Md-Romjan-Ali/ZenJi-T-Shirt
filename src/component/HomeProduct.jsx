
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

import DisplayProduct from "./DisplayProduct";

export default async function ProductGridSection() {
    const res = await fetch(`https://zenji-t-shirt.vercel.app/product.json`)
    const products = await res.json()
    return (
        <section className="w-full bg-white dark:bg-[#050505] text-neutral-900 dark:text-white py-16 px-6 sm:px-10 lg:px-16 transition-colors duration-300 font-sans">
            <div className="max-w-7xl mx-auto space-y-10">

                {/* Header Area */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-neutral-200 dark:border-neutral-800">
                    <div className="space-y-2">
                        <span className="text-xs font-bold font-mono tracking-[0.25em] text-red-600 dark:text-red-500 uppercase">
                            Featured Drop
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight italic">
                            Latest Arrivals
                        </h2>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-md">
                            Explore our newest limited-edition apparel engineered for modern comfort and aesthetic street culture.
                        </p>
                    </div>

                    {/* Top Right "See All" Button */}
                    <Link href="/collection">
                        <div
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-black text-xs font-bold uppercase tracking-wider transition-colors shadow-md group"
                        >
                            <span>See All Products</span>
                            <FiArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {
                        products.slice(0, 4).map(product => <DisplayProduct key={product.id} product={product} />)
                    }
                </div>
            </div>
        </section>
    );
}