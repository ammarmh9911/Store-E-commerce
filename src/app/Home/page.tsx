import Link from "next/link";

export default function HomePage() {
  return (
    <div>
{/* Hero Section */}
      <div className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4 fw-bold">Welcome to E-Commerce Store</h1>
          <p className="lead">
            Shop the latest fashion, electronics, jewellery, and more at the
            best prices.
          </p>

          <Link href="/products" className="btn btn-light btn-lg mt-3">
            Shop Now
          </Link>
        </div>
      </div>

      {/* Features */}
      <div className="container my-5">
        <div className="row text-center">

          <div className="col-md-4">
            <div className="card shadow-sm p-4">
              <h2>🚚</h2>
              <h4>Free Shipping</h4>
              <p>Enjoy free delivery on orders over $50.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm p-4">
              <h2>🔒</h2>
              <h4>Secure Payments</h4>
              <p>Safe and encrypted payment methods.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm p-4">
              <h2>⭐</h2>
              <h4>Top Rated Products</h4>
              <p>Explore highly rated products from our customers.</p>
            </div>
          </div>

        </div>
      </div>

      {/* Categories */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Popular Categories</h2>

        <div className="row">

          <div className="col-md-3 mb-3">
            <div className="card text-center p-4">
              <h1>👕</h1>
              <h5>Fashion</h5>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="card text-center p-4">
              <h1>💻</h1>
              <h5>Electronics</h5>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="card text-center p-4">
              <h1>💍</h1>
              <h5>Jewellery</h5>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="card text-center p-4">
              <h1>🛍️</h1>
              <h5>Accessories</h5>
            </div>
          </div>

        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">Why Choose Us?</h2>

          <div className="row text-center">

            <div className="col-md-3">
              <h3>10K+</h3>
              <p>Happy Customers</p>
            </div>

            <div className="col-md-3">
              <h3>500+</h3>
              <p>Products</p>
            </div>

            <div className="col-md-3">
              <h3>24/7</h3>
              <p>Customer Support</p>
            </div>

            <div className="col-md-3">
              <h3>100%</h3>
              <p>Secure Shopping</p>
            </div>

          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container text-center my-5">
        <h2>Ready to Start Shopping?</h2>

        <p>
          Browse hundreds of products and find your perfect choice today.
        </p>

        <Link href="/products" className="btn btn-success btn-lg">
          Explore Products
        </Link>
      </div>

    </div>
  );
}