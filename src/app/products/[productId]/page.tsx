import { ProductServices } from "@/app/services/products-services";
import React from "react";

export default async function ProductDetail(props: any) {
    const { productId } = await props.params;
    const product = await ProductServices.getProductById(productId);
    return (

        <div className="container mt-4">
            <img
                src={product.image}
                alt={product.title}
                style={{ width: 200 }}/>

            <h2>{product.title}</h2>
            <h4>${product.price}</h4>
            <p>{product.description}</p>
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Rating:</strong> ⭐ {product.rating?.rate}</p>

        </div>
    );
}