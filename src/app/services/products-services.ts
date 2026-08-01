import { ServiceBase } from "./service-base";

export class ProductServices extends ServiceBase {
  static async getProducts() {
    const response = await fetch(ServiceBase.getUrl("/products"),
    { cache: "no-store", });

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    return await response.json();
  }

  static async getProductById(id: string) {
    const response = await fetch(ServiceBase.getUrl(`/products/${id}`),
      { cache: "no-store", }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }

    return await response.json();
  }
}