import { ServiceBase } from "./service-base";

export class ProductServices extends ServiceBase {
  static async getProducts() {
  const response = await fetch(
    ServiceBase.getUrl("/products"),
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await response.json();
    return data;
  }

  static async getProductById(id: string) {
    const response = await fetch(
      ServiceBase.getUrl(`/products/${id}`)
    );

    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }

    return await response.json();
  }
}