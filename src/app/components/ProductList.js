import { resolve } from "node:dns";

async function getProducts() {
    const response = await fetch("https://fakestoreapi.com/products")
    await new Promise((resolve) => setTimeout(resolve,3000));

    return response.json()
}

export default async function ProductsPage() {
    const products = await getProducts();

    return (
        <div>
            <h1>Products</h1>

            {products.map((product) => (
                <p key={product.id}>{product.title}</p>
            ))}
        </div>
    )
} 