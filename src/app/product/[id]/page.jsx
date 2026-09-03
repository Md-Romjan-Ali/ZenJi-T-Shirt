import { notFound } from "next/navigation";
import ProductDetails from "@/component/ProductDetails";

async function getProducts() {
    const response = await fetch("https://zenji-t-shirt.vercel.app/product.json", { next: { revalidate: 3600 } });
    return response.json();
}

export default async function ProductPage({ params }) {
    const { id } = await params;
    const products = await getProducts();
    const product = products.find(item => String(item.id) === id);
    if (!product) notFound();
    return <ProductDetails product={product} />;
}
