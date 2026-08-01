"use client";

import { createContext, useContext, useState } from "react";

const CartContext = createContext<any>(null);

export function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  const [cart, setCart] = useState<any[]>([]);

  function addToCart(product:any) {
    let found = false;
    let newCart = [];

    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === product.id) {
        newCart.push({
          ...cart[i], quantity: cart[i].quantity + 1,
        });
        found = true;
      } else {
        newCart.push(cart[i]);
      }
    }
                  
    if (!found) {
      newCart.push({
        ...product, quantity: 1,
      });
    }
    setCart(newCart);
  }

  function increase(id:number) {
    let newCart = [];

    for (let i = 0; i < cart.length; i++) { 
      if (cart[i].id === id) {

        newCart.push({
          ...cart[i],
          quantity: cart[i].quantity + 1,
        });

      } else {
        newCart.push(cart[i]);
      }
    }
    setCart(newCart);
  }

    function decrease(id:number) {
    let newCart = [];

    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === id) {
        if (cart[i].quantity > 1) {
          newCart.push({
            ...cart[i],
            quantity: cart[i].quantity - 1,
          });
        }
      } else {
        newCart.push(cart[i]);
      }
    }
    setCart(newCart);
  }

  
  function removeItem(id:number) {
    let newCart = [];
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id !== id) {
        newCart.push(cart[i]);
      }
    }
    setCart(newCart);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increase,
        decrease,
        removeItem,}}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
