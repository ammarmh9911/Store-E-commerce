"use client";

import { useCart } from "../context/CartContext";

export default function AddToCartButton({ product }: any) {
  const { addToCart } = useCart();

  return (
    <button
      className="btn btn-success btn-lg w-100 mt-3 rounded-pill"
      onClick={() => addToCart(product)}>
      🛒 Add To Cart
    </button>
  );
}



