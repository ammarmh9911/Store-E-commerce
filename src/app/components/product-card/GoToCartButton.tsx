'use client'
import { useRouter } from "next/navigation"
import React from "react"

export default function GoToCartButton() {
    const router = useRouter()
    return(
        <div>
            <button onClick={() => router.push('/carts')}>
                Go to cart 
            </button>
        </div>
    )
}

