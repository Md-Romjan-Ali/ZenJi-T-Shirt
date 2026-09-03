"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { FiArrowLeft, FiHeart, FiMinus, FiPlus, FiShoppingBag } from "react-icons/fi";
import { AuthContext } from "./AuthContext";
import { toast } from "sonner";

const sizes = ["S", "M", "L", "XL", "XXL"];

export default function ProductDetails({ product }) {
    const { favouriteIds = [], toggleFavourite = () => { } } = useContext(AuthContext) || {};
    const router = useRouter();
    const [selectedSize, setSelectedSize] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [error, setError] = useState("");
    const isFavourite = favouriteIds.includes(product.id);
    const discountPercentage = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
    const description = product.description || `A considered ${product.productName.toLowerCase()} made for everyday rotation. Cut for comfort and finished with the unmistakable ZENJI point of view.`;

    const handleBuyNow = () => {
        if (!selectedSize) {
            setError("Please select a size before continuing.");
            return;
        }
        setError("");
        router.push(`/checkout?product=${product.id}&size=${selectedSize}&quantity=${quantity}`);
    };

    return (
        <main className="min-h-screen bg-white px-5 pb-20 pt-32 text-neutral-900 dark:bg-[#050505] dark:text-white sm:px-10 lg:px-16">
            <div className="mx-auto max-w-7xl">
                <Link href="/all-product" className="mb-8 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-500 transition-colors hover:text-red-600">
                    <FiArrowLeft /> Back to collection
                </Link>
                <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-16">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-900">
                        <Image src={product.image} alt={product.productName} fill priority sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" />
                    </div>
                    <div className="pt-2 lg:pt-10">
                        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-red-600">{product.category || "ZENJI ESSENTIAL"}</p>
                        <div className="flex items-start justify-between gap-5">
                            <h1 className="text-3xl font-black uppercase italic tracking-tight sm:text-5xl">{product.productName}</h1>
                            <button onClick={() => { toggleFavourite(product.id); toast.success(isFavourite ? "Removed from favourites" : "Added to favourites"); }} aria-label={isFavourite ? "Remove from favourites" : "Add to favourites"} className={`shrink-0 rounded-full border border-neutral-200 p-3 transition-colors hover:border-red-500 dark:border-neutral-800 ${isFavourite ? "text-red-500" : "text-neutral-500"}`}>
                                <FiHeart className={`h-5 w-5 ${isFavourite ? "fill-current" : ""}`} />
                            </button>
                        </div>
                        <div className="mt-6 flex items-center gap-3 font-mono">
                            <span className="text-3xl font-bold">৳{product.price}</span>
                            <span className="text-lg text-neutral-400 line-through">৳{product.originalPrice}</span>
                            <span className="text-sm font-bold text-red-500">-{discountPercentage}%</span>
                        </div>
                        <p className="mt-7 max-w-xl text-sm leading-7 text-neutral-600 dark:text-neutral-400">{description}</p>
                        <div className="mt-8 border-t border-neutral-200 pt-7 dark:border-neutral-800">
                            <div className="mb-3 flex items-center justify-between"><span className="text-xs font-bold uppercase tracking-widest">Select size</span><span className="text-xs text-neutral-500">Available in S - XXL</span></div>
                            <div className="grid grid-cols-5 gap-2">
                                {sizes.map(size => <button key={size} onClick={() => { setSelectedSize(size); setError(""); }} className={`h-11 border text-xs font-bold transition-colors ${selectedSize === size ? "border-red-600 bg-red-600 text-white" : "border-neutral-200 hover:border-red-500 dark:border-neutral-800"}`}>{size}</button>)}
                            </div>
                            {error && <p role="alert" className="mt-3 text-xs font-semibold text-red-600">{error}</p>}
                        </div>
                        <div className="mt-7 flex items-center gap-4">
                            <span className="text-xs font-bold uppercase tracking-widest">Quantity</span>
                            <div className="flex items-center border border-neutral-200 dark:border-neutral-800">
                                <button aria-label="Decrease quantity" disabled={quantity === 1} onClick={() => setQuantity(value => Math.max(1, value - 1))} className="p-3 text-neutral-500 transition-colors hover:text-red-600 disabled:opacity-30"><FiMinus /></button>
                                <span className="min-w-10 text-center text-sm font-bold">{quantity}</span>
                                <button aria-label="Increase quantity" onClick={() => setQuantity(value => value + 1)} className="p-3 text-neutral-500 transition-colors hover:text-red-600"><FiPlus /></button>
                            </div>
                        </div>
                        <button onClick={handleBuyNow} className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-lg bg-neutral-900 py-4 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-red-600 dark:bg-white dark:text-black dark:hover:bg-red-500 dark:hover:text-white"><FiShoppingBag /> Buy Now</button>
                    </div>
                </div>
            </div>
        </main>
    );
}
