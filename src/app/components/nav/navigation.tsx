import Link from 'next/link'

export default function Navigation(){
    return (
        <div>
            <ul className="nav justify-content-end bg-info h-100">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" href="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" href="/Contact">Contact</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" href="/About">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" href="/products">Products</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" href="/carts">Cart</Link>
                </li>
            </ul>
        </div>
    )
}
