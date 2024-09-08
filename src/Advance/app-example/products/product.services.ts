import { ProductModel } from "./product.model";

const arrayProducts: ProductModel[] = [];

export default function addProduct(productBody: ProductModel) {
    arrayProducts.push(productBody);
    return arrayProducts
}

