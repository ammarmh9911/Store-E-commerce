"use client";

import { useCart } from "../context/CartContext";

export default function CartPage() {
    const { cart, increase, decrease, removeItem } = useCart();

    const total = cart.reduce(
        (sum: number, item: any) =>
            sum + item.price * item.quantity,
        0
    );

    return (
        <div style={{
            background: "#F6FBF7",
            minHeight: "100vh",
        }}>

            <div className="container py-5">
                <h2>Shopping Cart</h2>
                {cart.length === 0 && (
                    <h4>Your Cart is Empty</h4>
                )}

                {cart.map((item: any) => (
                    <div
                        key={item.id}
                        className="card p-3 mb-3">

                        <div className="row align-items-center">
                            <div className="col-md-2">
                                <img src={item.image} width={80} />
                            </div>

                            <div className="col-md-4">
                                <h5>{item.title}</h5>
                                <p>${item.price}</p>
                            </div>

                            <div className="col-md-3">
                                <button className="btn btn-danger" onClick={() => decrease(item.id)}>
                                    -
                                </button>

                                <span className="mx-3">{item.quantity}</span>

                                <button className="btn btn-success" onClick={() => increase(item.id)}>
                                    +
                                </button>
                            </div>

                            <div className="col-md-3">
                                <button className="btn btn-dark" onClick={() => removeItem(item.id)}>
                                    Remove
                                </button>
                            </div>

                        </div>
                    </div>
                ))}

                <h3>Total : ${total.toFixed(2)}</h3>
            </div>
        </div>
    );
}