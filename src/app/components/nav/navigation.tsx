"use client";

import Link from "next/link";
import { useCart } from "@/app/context/CartContext";

export default function Navigation() {
    const { cart } = useCart();

    const totalItems = cart.reduce(
        (sum: number, item: any) => sum + item.quantity,0);

    return (
        <nav
            className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top"
            style={{ borderBottom: "1px solid #e5e5e5" 
            }}>

            <div className="container">
                <Link
                    className="navbar-brand fw-bold fs-3 text-success"
                    href="/">
                    Teal
                </Link>

                <div className="navbar-collapse d-flex justify-content-between align-items-center">
                    <form className="d-flex mx-auto w-50">
                        <input
                            className="form-control rounded-pill"
                            type="search"
                            placeholder="Search products..."/>

                        <button
                            className="btn btn-success rounded-pill ms-2"
                            type="submit">
                            🔍
                        </button>
                    </form>

                    <ul className="navbar-nav ms-auto align-items-center">

                        <li className="nav-item">
                            <Link className="nav-link fw-semibold" href="/">
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link fw-semibold" href="/products">
                                Products
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link fw-semibold" href="/about">
                                About
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link fw-semibold" href="/contact">
                                Contact
                            </Link>
                        </li>

                        <li className="nav-item ms-3">
                            <Link
                                href="/carts"
                                className="btn btn-success rounded-pill px-3">
                                🛒 Cart
                                <span className="badge bg-light text-success ms-2">
                                    {totalItems}
                                </span>
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}