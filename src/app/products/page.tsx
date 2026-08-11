"use client";

import { useEffect, useState } from "react";
import ProductCard from "../components/product-card/ProductCard";

export default function Products() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div
      style={{
        background: "#F6FBF7",
        minHeight: "100vh",
      }}
    >
      <div className="container mt-4">

        <div
          className="text-center text-white rounded-4 p-5 mb-5"
          style={{
            background:
              "linear-gradient(135deg,#1B5E20,#43A047)",
          }}
        >
          <h1 className="fw-bold display-5">
            Our Products
          </h1>

          <p className="lead mb-0">
            Discover premium products at unbeatable prices.
          </p>
        </div>

        {loading ? (
          <div className="text-center py-5">
            <h4>Loading products...</h4>
          </div>
        ) : (
          <div className="row">
            {products.map((p: any) => (
              <ProductCard
                key={p.id}
                product={p}
              />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}