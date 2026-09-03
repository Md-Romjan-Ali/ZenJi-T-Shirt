"use client";

import Link from "next/link";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/component/AuthContext";
import { toast } from "sonner";

export default function CheckoutPage() {
    const { products = [], addOrder = () => { } } = useContext(AuthContext) || {};
    const router = useRouter();
    const params = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : null;
    const product = products.find(item => String(item.id) === params?.get("product"));
    const size = params?.get("size");
    const quantity = Number(params?.get("quantity") || 1);

    if (!product) return <main className="min-h-screen px-6 pb-20 pt-40 text-center"><h1 className="text-2xl font-black uppercase">Order details unavailable</h1><Link href="/all-product" className="mt-5 inline-block text-sm text-red-600">Return to collection</Link></main>;

    const placeOrder = () => {
        addOrder({ productId: product.id, productName: product.productName, image: product.image, size, quantity, price: product.price, total: product.price * quantity });
        toast.success("Order placed successfully");
        router.push("/orders");
    };

    return <main className="min-h-screen bg-white px-5 pb-20 pt-32 text-neutral-900 dark:bg-[#050505] dark:text-white sm:px-10 lg:px-16"><div className="mx-auto max-w-3xl"><p className="text-xs font-bold uppercase tracking-[0.25em] text-red-600">Checkout</p><h1 className="mt-3 text-4xl font-black uppercase italic">Complete your order</h1><div className="mt-10 border-y border-neutral-200 py-7 dark:border-neutral-800"><div className="flex justify-between gap-5"><div><h2 className="font-bold">{product.productName}</h2><p className="mt-2 text-sm text-neutral-500">Size {size} · Quantity {quantity}</p></div><p className="font-mono font-bold">৳{product.price * quantity}</p></div></div><button onClick={placeOrder} className="mt-8 w-full rounded-lg bg-red-600 py-4 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-red-700">Place Order</button><p className="mt-4 text-center text-xs text-neutral-500">Your order summary includes the selected size, quantity, and current product price.</p></div></main>;
}
