"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ProductCard({ product }: any) {
    const router = useRouter();

    return (
        <div className="col-md-3 mb-4">
            <div className="card h-100 shadow-sm">

                <img src={product.image} className="card-img-top p-3" style={{ height: "220px", objectFit: "contain" }} />

                <div className="card-body d-flex flex-column">
                    <h6>{product.title}</h6>
                    <h5 className="text-success">${product.price}</h5>
                    <div className="mt-auto">
                        
                        <Link
                            href={`/products/${product.id}`}
                            className="btn btn-outline-dark w-100">
                            View
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
}