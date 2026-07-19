import { ServiceBase } from "./service-base";

export class ProductServices extends ServiceBase {
    static getProducts = async() => {
        const productResp = await fetch(this.getUrl('/products'), {
            // cache:'no-store',
            next:{
                revalidate:0
            }
        });

        const products = await productResp.json()
        return products;
    }

    static getProductById = async (id:number) => {
        var productResp = await fetch(this.getUrl(`/products/${id}`))
        var product = await productResp.json();
        return product;
    }
}