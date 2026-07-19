"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react"

export default function ProductCard(props: any) {
    const prod = props.product;
    const [seletedProducts, setSelectedProducts] = useState({})
    const router = useRouter();

    const selectprod = () => {
        console.log("selected product: ", prod)
        setSelectedProducts(prod);
    };

    return (
       <div>
        <button onClick={() => router.push('/products/${prod.id}')}>Details</button>
        <Link href={'/products/' +prod.id}>
        <div onClick={selectprod}>
            <img src={prod.image} width={50} alt="loading.." />
            {prod.title}
        </div>
        </Link>
       </div>
    );
}


