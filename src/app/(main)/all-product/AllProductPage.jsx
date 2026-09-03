"use client";

import DisplayProduct from "@/component/DisplayProduct";
import { useState } from "react";
import { FiGrid, FiList, FiSearch, FiX } from "react-icons/fi";

export default function CollectionProductsWrapper({ products }) {
    const [searchQuery, setSearchQuery] = useState("");

    // Simple filter by product name
    const filteredProducts = products.filter((product) =>
        product.productName.toLowerCase().includes(searchQuery.toLowerCase().trim())
    );

    return (
        <div className="space-y-8 mt-15">

            {/* Search & Layout Control Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-neutral-100 dark:bg-[#111111] p-4 rounded-xl border border-neutral-200 dark:border-neutral-800">

                {/* Search Input Field */}
                <div className="relative w-full sm:w-80">
                    <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                    <input
                        type="text"
                        placeholder="Search product name..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-10 py-2 bg-white dark:bg-[#0a0a0a] border border-neutral-300 dark:border-neutral-800 rounded-lg text-xs font-medium text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-red-500"
                    />
                    {searchQuery && (
                        <button
                            onClick={() => setSearchQuery("")}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-black dark:hover:text-white"
                        >
                            <FiX className="w-4 h-4" />
                        </button>
                    )}
                </div>



            </div>

            {/* Product List / Grid Output */}
            {filteredProducts.length > 0 ? (
                <div
                    className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-4"}
                >
                    {filteredProducts.map((product) => (
                        <DisplayProduct key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                /* Empty State */
                <div className="py-16 text-center text-sm text-neutral-500 font-mono">
                    No products match {searchQuery}
                </div>
            )}

        </div>
    );
}