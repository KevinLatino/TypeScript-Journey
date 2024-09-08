import { ProductModel } from "./product.model";
import { UpdateProductDto } from "../products-dtos/product.dto";

export const arrayProducts: ProductModel[] = [];

export const addProduct = (productBody: ProductModel) => {
    arrayProducts.push(productBody);
    return arrayProducts
}


//                                here we have the type of "id" (string | number)
export const updateProduct = (id: ProductModel['id'], productUpdated: UpdateProductDto) => {
    const index = arrayProducts.findIndex(item => item.id === id)
    const prevData = arrayProducts[index];
    arrayProducts[index] = {
        ...prevData,
        ...productUpdated
    }
    return arrayProducts[index]
}

