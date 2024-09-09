import { addProduct, updateProduct, arrayProducts } from "./products/product.services";
import { ProductModel } from "./products/product.model";
import { faker } from "@faker-js/faker";

for (let index = 0; index < 5; index++) {
    addProduct({
        id: faker.number.int(),
        title: faker.commerce.product(),
        size: faker.helpers.arrayElement(["S", "M", "L", "XL", "XXL"]),
        price: faker.commerce.price(),
        updatedAt: faker.date.soon(),
        createdAt: faker.date.soon(),
        category: {
            id: faker.number.int(),
            category: faker.helpers.arrayElement(["C1", "C2", "C3"])
        }
    })
}

console.log(arrayProducts);

const product1 = arrayProducts[0];


console.log(updateProduct(product1.id, {
    title: "New product",
}));
