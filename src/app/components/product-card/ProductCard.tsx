import Link from "next/link";

export default function ProductCard({ product }: any) {
  return (
    <div className="col-md-6 col-lg-3 mb-4">
      <div className="card h-100 border-0 shadow-sm rounded-4">

        <div
          className="d-flex align-items-center justify-content-center p-3"
          style={{
            height: "250px",
          }}>
            
          <img
            src={product.image}
            alt={product.title}
            style={{
              maxHeight: "220px",
              maxWidth: "100%",
              objectFit: "contain",
            }}/>
        </div>

        <div className="card-body d-flex flex-column">

          <h5
            className="fw-bold"
            style={{
              minHeight: "50px",
            }}>
            {product.title}
          </h5>

          <p className="text-success fw-bold fs-5">
            ${product.price}
          </p>

          <div className="mt-auto">
            <Link
              href={`/products/${product.id}`}
              className="btn btn-success rounded-pill w-100">
              View Product
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}
