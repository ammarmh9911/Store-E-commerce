import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark text-light mt-5 pt-5 pb-3">
      <div className="container">
        <div className="row">

          <div className="col-md-3 mb-4">
            <h5>E-Commerce Store</h5>
            <p>
              Your one-stop destination for quality products at affordable
              prices. Built with Next.js and Bootstrap.
            </p>
          </div>

          <div className="col-md-3 mb-4">
            <h5>Shop</h5>

            <ul className="list-unstyled">
              <li>
                <Link href="/" className="text-light text-decoration-none">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/products" className="text-light text-decoration-none">
                  Products
                </Link>
              </li>

              <li>
                <Link href="/cart" className="text-light text-decoration-none">
                  Cart
                </Link>
              </li>
            </ul>
          </div>


          <div className="col-md-3 mb-4">
            <h5>Company</h5>

            <ul className="list-unstyled">
              <li>
                <Link href="/about" className="text-light text-decoration-none">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/contact" className="text-light text-decoration-none">
                  Contact Us
                </Link>
              </li>

              <li>
                <a href="#" className="text-light text-decoration-none">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="text-light text-decoration-none">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3 mb-4">
            <h5>Contact</h5>

            <p>📍 Kuala Lampur, Malaysia</p>
            <p>📞 +60 12-345-6789</p>
            <p>📧 support@estore.com</p>

            <div className="mt-3">
              <i className="bi bi-facebook me-3"></i>
              <i className="bi bi-instagram me-3"></i>
              <i className="bi bi-twitter-x me-3"></i>
              <i className="bi bi-linkedin"></i>
            </div>
          </div>

        </div>

        <hr className="border-secondary" />

        <div className="text-center">
          <small>
            © {new Date().getFullYear()} E-Commerce Store. All Rights Reserved.
          </small>
        </div>
      </div>
    </footer>
  );
}