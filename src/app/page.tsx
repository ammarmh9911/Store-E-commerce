import Link from "next/link";

export default async function HomePage() {

  return (
    <div>
      <div style={{
        background: "linear-gradient(135deg, #1B5E20, #2E7D32, #66BB6A)",
        color: "white",
        padding: "100px 0",
      }}>

        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-6">

              <span className="badge bg-light text-success px-3 py-2 mb-3">
                🌿 New Collection 2026
              </span>

              <h1 className="display-3 fw-bold">
                Discover Your Perfect Shopping Experience
              </h1>

              <p className="lead mt-4">
                Shop thousands of premium products with fast delivery,
                secure payments, and unbeatable prices. Everything you
                need is just one click away.
              </p>

              <div className="mt-4">

                <Link
                  href="/products"
                  className="btn btn-light btn-lg px-5 me-3 rounded-pill shadow">
                  Shop Now
                </Link>

                <Link
                  href="/about"
                  className="btn btn-outline-light btn-lg px-5 rounded-pill">
                  Learn More
                </Link>

              </div>

              <div className="row mt-5">
                <div className="col-4">
                  <h3 className="fw-bold">20K+</h3>
                  <small>Customers</small>
                </div>

                <div className="col-4">
                  <h3 className="fw-bold">5K+</h3>
                  <small>Products</small>
                </div>

                <div className="col-4">
                  <h3 className="fw-bold">99%</h3>
                  <small>Satisfaction</small>
                </div>

              </div>
            </div>

            <div className="col-lg-6 text-center mt-5 mt-lg-0">
              <img
                src="https://images.openai.com/static-rsc-4/gD3XDzdvfSHmPpUK95P19werkZPTGoAtCM7nS2own1efEfLtXDvoFRCJzDgEPy1L53rbAfqnEsQ0XYc9yabIGj9etcfDnH1hVxytGOoEJlj45u3vr2qtk81YPZ0rKQ6KeEWB-CIbZA_bmODki8hDrZimUNESZBfRRJ_gb5gh5Jizdhs7oCjC5DMyfDr4YcR0?purpose=fullsize"
                alt="Shopping"
                className="img-fluid rounded-4 shadow-lg"
                style={{
                  maxHeight: "500px",
                  objectFit: "cover",
                  border: "5px solid rgba(255,255,255,0.2)"
                }} />

            </div>
          </div>
        </div>
      </div>

      <div className="container py-5 mt-3">
        <div className="row text-center">
          <div className="col-md-3 mb-3">

            <div
              className="card border-0 shadow-sm rounded-4 p-4 h-100"
              style={{ backgroundColor: "#E8F5E9" }}>
              <h2 className="text-success fw-bold">20K+</h2>
              <p className="mb-0">Happy Customers</p>
            </div>
          </div>

          <div className="col-md-3">
            <h2 className="text-success fw-bold">5K+</h2>
            <p>Premium Products</p>
          </div>

          <div className="col-md-3">
            <h2 className="text-success fw-bold">150+</h2>
            <p>Trusted Brands</p>
          </div>

          <div className="col-md-3">
            <h2 className="text-success fw-bold">99%</h2>
            <p>Positive Reviews</p>
          </div>

        </div>
      </div>

      <div
        className="py-5"
        style={{ backgroundColor: "#F1F8F4" }}>
        <div className="container">

          <h2 className="text-center fw-bold mb-5 text-success">
            Why Shop With Us?
          </h2>

          <div className="row g-4">

            <div className="col-md-3">

              <div className="card border-0 shadow rounded-4 text-center p-4 h-100"
                style={{ backgroundColor: "#ffffff" }}>

                <h1>🚚</h1>
                <h4 className="mt-3">Free Shipping</h4>
                <p className="text-muted">
                  Enjoy free delivery on all orders above $50.
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div
                className="card border-0 shadow rounded-4 text-center p-4 h-100"
                style={{ backgroundColor: "#ffffff" }}>

                <h1>🔒</h1>
                <h4 className="mt-3">Secure Payments</h4>
                <p className="text-muted">
                  Your payments are protected with secure encryption.
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div
                className="card border-0 shadow rounded-4 text-center p-4 h-100"
                style={{ backgroundColor: "#ffffff" }}>

                <h1>⭐</h1>
                <h4 className="mt-3">Premium Quality</h4>
                <p className="text-muted">
                  Carefully selected products from trusted brands.
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div
                className="card border-0 shadow rounded-4 text-center p-4 h-100"
                style={{ backgroundColor: "#ffffff" }}>

                <h1>💬</h1>
                <h4 className="mt-3">24/7 Support</h4>
                <p className="text-muted">
                  Our support team is always ready to help you.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="container py-5">

        <div className="text-center mb-5">
          <h2 className="fw-bold text-success">Shop by Category</h2>
          <p className="text-muted">
            Browse products from your favourite categories.
          </p>
        </div>

        <div className="row g-4">

          <div className="col-md-3">
            <div
              className="card border-0 shadow rounded-4 text-center p-4 h-100"
              style={{ backgroundColor: "#E8F5E9" }}>

              <h1>👕</h1>
              <h4 className="mt-3">Fashion</h4>
              <p className="text-muted">
                Trendy clothing and accessories.
              </p>
            </div>
          </div>

          <div className="col-md-3">
            <div
              className="card border-0 shadow rounded-4 text-center p-4 h-100"
              style={{ backgroundColor: "#F1F8E9" }}>

              <h1>💻</h1>
              <h4 className="mt-3">Electronics</h4>
              <p className="text-muted">
                Latest gadgets and technology.
              </p>
            </div>
          </div>

          <div className="col-md-3">
            <div
              className="card border-0 shadow rounded-4 text-center p-4 h-100"
              style={{ backgroundColor: "#E8F5E9" }}>

              <h1>💍</h1>
              <h4 className="mt-3">Jewellery</h4>
              <p className="text-muted">
                Elegant jewellery for every occasion.
              </p>
            </div>
          </div>

          <div className="col-md-3">
            <div
              className="card border-0 shadow rounded-4 text-center p-4 h-100"
              style={{ backgroundColor: "#F1F8E9" }}>

              <h1>🛍️</h1>
              <h4 className="mt-3">Accessories</h4>
              <p className="text-muted">
                Bags, watches and everyday essentials.
              </p>
            </div>
          </div>

        </div>
      </div>

      <div
        className="py-5"
        style={{ backgroundColor: "#F1F8F4" }}>
        <div className="container">

          <div className="text-center mb-5">
            <h2 className="fw-bold text-success">
              Featured Products
            </h2>

            <p className="text-muted">
              Discover some of our best-selling products.
            </p>
          </div>

          {/* <div className="row">

            {products.slice(0, 4).map((product: any) => (
              <ProductCard
                key={product.id}
                product={product} />
            ))}

          </div> */}

          <div className="text-center mt-4">
            <Link
              href="/products"
              className="btn btn-success btn-lg rounded-pill px-5">
              View All Products
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
