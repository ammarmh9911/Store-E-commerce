import { ServiceBase } from "./service-base";

export class ProductServices extends ServiceBase {
  static async getProducts() {
  const response = await fetch(
    ServiceBase.getUrl("/products"),
    {
      cache: "no-store",
      headers: {
        Accept: "application/json",
      },
    }
  );

  const text = await response.text();

  console.log("API STATUS:", response.status);
  console.log(
    "API CONTENT TYPE:",
    response.headers.get("content-type")
  );
  console.log(
    "API RESPONSE:",
    text.substring(0, 500)
  );

  if (!response.ok) {
    throw new Error(
      `API failed: ${response.status} ${response.statusText} - ${text.substring(0, 200)}`
    );
  }

  const contentType = response.headers.get("content-type");

  if (!contentType?.includes("application/json")) {
    throw new Error(
      `Expected JSON but received ${contentType}. Response: ${text.substring(0, 200)}`
    );
  }

  return JSON.parse(text);
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