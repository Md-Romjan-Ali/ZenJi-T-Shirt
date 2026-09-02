import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import DisplayProduct from "@/component/DisplayProduct";
import AllProductPage from "./AllProductPage";

export default async function CollectionPage() {
    const res = await fetch(`https://zenji-t-shirt.vercel.app/product.json`)
    const products = await res.json()

    return (
        // <section className="w-full bg-white dark:bg-[#050505] text-neutral-900 dark:text-white min-h-screen py-16 px-6 sm:px-10 lg:px-16 transition-colors duration-300 font-sans">
        //     <div className="max-w-7xl mx-auto space-y-10">

        //         {/* Navigation Back Link */}
        //         <div>
        //             <Link
        //                 href="/"
        //                 className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-500 hover:text-black dark:hover:text-white transition-colors"
        //             >
        //                 <FiArrowLeft className="w-4 h-4" />
        //                 <span>Back to Home</span>
        //             </Link>
        //         </div>

        //         {/* Header Area */}
        //         <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-neutral-200 dark:border-neutral-800">
        //             <div className="space-y-2">
        //                 <span className="text-xs font-bold font-mono tracking-[0.25em] text-red-600 dark:text-red-500 uppercase">
        //                     Full Archive
        //                 </span>
        //                 <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight italic">
        //                     All Products ({products.length})
        //                 </h1>
        //                 <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-md">
        //                     Browse our complete lineup of anime-inspired, limited-edition streetwear crafted for modern comfort.
        //                 </p>
        //             </div>
        //         </div>

        //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        //             {
        //                 products.map(product => <DisplayProduct key={product.id} product={product} />)
        //             }
        //         </div>

        //     </div>
        // </section>
        <div>
            <AllProductPage products={products} />
        </div>
    );
}