"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "../components/product-card/ProductCard";

export default function Products() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products"
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch products: ${response.status}`);
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setError("Failed to load products.");
      } finally {
        setLoading(false);
      }
    }

    getProducts();
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

        {loading && (
          <div className="text-center py-5">
            <h4>Loading products...</h4>
          </div>
        )}

        {error && (
          <div className="text-center py-5">
            <h4 className="text-danger">{error}</h4>
          </div>
        )}

        {!loading && !error && (
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