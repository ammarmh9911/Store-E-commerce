import AddToCartButton from "@/app/components/AddToCartButton";
import { ProductServices } from "@/app/services/products-services";

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  const product = await ProductServices.getProductById(productId);

  return (
    <div    
      style={{
        background: "#F6FBF7",
        minHeight: "100vh",
        padding: "50px 0",
      }}>

      <div className="container ">
        <div className="card shadow-lg border-0 p-4">
          <div className="row">
            <div className="col-lg-5 text-center">
              <img
                src={product.image}
                alt={product.title}
                className="img-fluid"
                style={{
                  maxHeight: "420px",
                  objectFit: "contain",
                }}/>
            </div>

            <div className="col-lg-7 ps-lg-5">
              <p className="text-success fw-semibold text-uppercase mb-2">
                {product.category}
              </p>

              <h2 className="fw-bold">{product.title}</h2>

              <h2 className="text-success fw-bold my-3">${product.price}</h2>

              <p className="text-warning fs-5">
                ⭐ {product.rating?.rate} / 5
                <span className="text-secondary fs-6">
                  {" "}
                  ({product.rating?.count} Reviews)
                </span>
              </p>

              <hr />

              <h5>Description</h5>

              <p className="text-secondary">{product.description}</p>

              <div className="mt-4">
                <AddToCartButton product={product} />
              </div>

              <hr className="my-4" />
              <div className="row text-center">
                <div className="col-md-4">
                  <h2>🚚</h2>
                  <h6>Free Shipping</h6>
                  <small>Orders above $50</small>
                </div>

                <div className="col-md-4">
                  <h2>🔒</h2>
                  <h6>Secure Payment</h6>
                  <small>100% Protected Checkout</small>
                </div>

                <div className="col-md-4">
                  <h2>↩️</h2>
                  <h6>Easy Returns</h6>
                  <small>30-Day Return Policy</small>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
