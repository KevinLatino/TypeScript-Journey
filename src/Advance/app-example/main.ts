import addProduct from "./products/product.services";

const addJacket = addProduct({
    id: 1,
    title: "Jacket",
    size: "M",
    price: 100,
    category: {
        id: 12,
        category: "C1"
    }
})

console.log(addJacket);