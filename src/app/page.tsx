
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="container text-center mt-5 flex-1">
      <h1 className="display-4">Welcome to E-Commerce Store</h1>

      <p className="lead mt-3">
        Shop the latest products at affordable prices.
      </p>

      <img
        src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45f?w=800"
        alt="E-Commerce"
        className="img-fluid rounded mt-4"
        style={{ maxWidth: "600px" }}/>

      <div className="mt-4">
        <Link href="/products">
          <button className="btn btn-primary btn-lg">
            Shop Now
          </button>
        </Link>
      </div>

      <div className="row mt-5">
        <div className="col-md-4">
          <h4>Quality Products</h4>
          <p>Browse a wide range of quality products.</p>
        </div>

        <div className="col-md-4">
          <h4>Fast Delivery</h4>
          <p>Get your orders delivered quickly and safely.</p>
        </div>

        <div className="col-md-4">
          <h4>Affordable Prices</h4>
          <p>Enjoy the best prices on all our products.</p>
        </div>
      </div>
    </div>
  );
}