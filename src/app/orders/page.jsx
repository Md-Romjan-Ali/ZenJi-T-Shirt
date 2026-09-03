"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "@/component/AuthContext";
import { toast } from "sonner";
import { FiTrash2 } from "react-icons/fi";

export default function OrdersPage() {
    const { orders = [], removeOrder = () => { }, clearOrders = () => { } } = useContext(AuthContext) || {};
    const itemCount = orders.reduce((total, order) => total + order.quantity, 0);
    const total = orders.reduce((sum, order) => sum + order.total, 0);

    return (
        <main className="min-h-screen bg-white px-5 pb-20 pt-32 text-neutral-900 dark:bg-[#050505] dark:text-white sm:px-10 lg:px-16">
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-wrap items-end justify-between gap-5 border-b border-neutral-200 pb-7 dark:border-neutral-800">
                    <div><p className="text-xs font-bold uppercase tracking-[0.25em] text-red-600">Your bag</p><h1 className="mt-3 text-4xl font-black uppercase italic">Order list</h1></div>
                    <p className="font-mono text-sm text-neutral-500">{itemCount} {itemCount === 1 ? "item" : "items"}</p>
                </div>
                {orders.length ? <>
                    <div className="mt-8 flex justify-end"><button onClick={() => { clearOrders(); toast.success("Order list cleared"); }} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-600 transition-colors hover:text-red-700"><FiTrash2 /> Clear all</button></div>
                    <div className="mt-3 overflow-x-auto rounded-xl border border-neutral-200 dark:border-neutral-800">
                        <table className="w-full min-w-[680px] text-left text-sm">
                            <thead className="bg-neutral-100 text-[11px] uppercase tracking-widest text-neutral-500 dark:bg-[#111111]"><tr><th className="px-5 py-4">Product</th><th className="px-5 py-4">Size</th><th className="px-5 py-4">Quantity</th><th className="px-5 py-4">Price</th><th className="px-5 py-4 text-right">Total</th><th className="px-5 py-4"><span className="sr-only">Remove</span></th></tr></thead>
                            <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">{orders.map(order => <tr key={order.id}><td className="px-5 py-4"><div className="flex items-center gap-4"><Image src={order.image} alt={order.productName} width={56} height={56} className="h-14 w-12 rounded object-cover" /><span className="font-semibold">{order.productName}</span></div></td><td className="px-5 py-4 font-mono">{order.size}</td><td className="px-5 py-4 font-mono">{order.quantity}</td><td className="px-5 py-4 font-mono">৳{order.price}</td><td className="px-5 py-4 text-right font-mono font-bold">৳{order.total}</td><td className="px-5 py-4 text-right"><button onClick={() => { removeOrder(order.id); toast.success("Order removed"); }} aria-label={`Remove ${order.productName}`} className="text-neutral-400 transition-colors hover:text-red-600"><FiTrash2 /></button></td></tr>)}</tbody>
                        </table>
                        <div className="mt-6 flex justify-end gap-8 border-t border-neutral-200 pt-6 dark:border-neutral-800"><span className="text-xs font-bold uppercase tracking-widest text-neutral-500">Order total</span><span className="font-mono text-xl font-bold">৳{total}</span></div>
                    </div>
                </> : <div className="py-20 text-center"><p className="text-sm text-neutral-500">Your order list is empty.</p><Link href="/all-product" className="mt-5 inline-block text-xs font-bold uppercase tracking-widest text-red-600">Shop the collection</Link></div>}
            </div>
        </main>
    );
}
