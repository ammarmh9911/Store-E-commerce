import React from "react";
import ProductCard from "../components/product-card/ProductCard";
import { ProductServices } from "../services/products-services";

async function getProducts() {
    const productResp = await ProductServices.getProducts();
    return productResp;
}

// export const dynamic = 'force-dynamic'
export default async function Products() {
    console.log("product list executed")
    const products = await getProducts()

    return (
        <div style={{
            background: "#F6FBF7",
            minHeight: "100vh",
        }}>
            <div className="container mt-4">
                <div
                    className="text-center text-white rounded-4 p-5 mb-5"
                    style={{
                        background: "linear-gradient(135deg,#1B5E20,#43A047)",
                    }}
                >
                    <h1 className="fw-bold display-5">
                        Our Products
                    </h1>

                    <p className="lead mb-0">
                        Discover premium products at unbeatable prices.
                    </p>
                </div>

                <div className="row">
                    {products.map((p: any) => (
                        <ProductCard key={p.id} product={p} />
                    ))}
                </div>
            </div>
        </div>
    )
}

