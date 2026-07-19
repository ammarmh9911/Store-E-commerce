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

    return(
        <div>
            <h3>Product list</h3>
            <div>
                {products.map((p:any) => {
                    return <ProductCard key={p.id} product={p}/>
                })}
            </div>
        </div>
    )
}

