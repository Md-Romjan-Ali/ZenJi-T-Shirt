"use client";

import Link from "next/link";
import DisplayProduct from "@/component/DisplayProduct";
import { useContext } from "react";
import { AuthContext } from "@/component/AuthContext";

export default function FavouritesPage() {
    const { products = [], favouriteIds = [] } = useContext(AuthContext) || {};
    const favourites = products.filter(product => favouriteIds.includes(product.id));

    return <main className="min-h-screen bg-white px-5 pb-20 pt-32 text-neutral-900 dark:bg-[#050505] dark:text-white sm:px-10 lg:px-16"><div className="mx-auto max-w-7xl"><p className="text-xs font-bold uppercase tracking-[0.25em] text-red-600">Your selection</p><h1 className="mt-3 text-4xl font-black uppercase italic">Favourites</h1>{favourites.length ? <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">{favourites.map(product => <DisplayProduct key={product.id} product={product} />)}</div> : <div className="mt-16 border-y border-neutral-200 py-16 text-center dark:border-neutral-800"><p className="text-sm text-neutral-500">Your favourite pieces will appear here.</p><Link href="/all-product" className="mt-5 inline-block text-xs font-bold uppercase tracking-widest text-red-600">Explore collection</Link></div>}</div></main>;
}
