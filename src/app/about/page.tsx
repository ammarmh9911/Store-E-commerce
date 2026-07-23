import Link from "next/link";

export default function AboutPage() {
  return (
    <div style={{
      background: "#F6FBF7",
      minHeight: "100vh",
    }}>
      <div className="container py-5">

        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold">About Us</h1>
          <p className="lead text-muted">
            Your trusted online shopping destination.
          </p>
        </div>

        <div className="row align-items-center">

          <div className="col-lg-6">
            <img
              src="https://media.istockphoto.com/id/1331044109/vector/us-we.jpg?s=612x612&w=0&k=20&c=jbVJSJNzOdfv1vRSVRga7lLAm9yp2dPiKATs7DfH8Nc="
              className="img-fluid rounded"
              alt="About"
            />
          </div>

          <div className="col-lg-6">

            <h2 className="fw-bold mb-3">
              Who We Are
            </h2>

            <p className="text-secondary">
              We are an online shopping platform committed to delivering
              high-quality products at affordable prices. Our mission is to
              provide customers with a smooth, secure, and enjoyable shopping
              experience.
            </p>

            <p className="text-secondary">
              Whether you're looking for electronics, fashion, jewellery, or
              accessories, our store offers carefully selected products backed
              by excellent customer service.
            </p>

            <Link href="/products" className="btn btn-primary mt-3">
              Explore Products
            </Link>

          </div>

        </div>

        <hr className="my-5" />

        <div className="row text-center">

          <div className="col-md-4">
            <div className="card shadow-sm border-0 p-4 h-100">
              <h1>🎯</h1>
              <h4>Our Mission</h4>
              <p className="text-muted">
                Deliver quality products with exceptional customer service.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm border-0 p-4 h-100">
              <h1>🚀</h1>
              <h4>Our Vision</h4>
              <p className="text-muted">
                Become the most trusted online shopping platform.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm border-0 p-4 h-100">
              <h1>❤️</h1>
              <h4>Our Values</h4>
              <p className="text-muted">
                Customer satisfaction, transparency, and innovation.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}