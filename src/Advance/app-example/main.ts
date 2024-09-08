import addProduct from "./products/product.services";

const addJacket = addProduct({
    id: "ddwddwdewd.wedwed2e12e1e.qe12312e1e",
    title: "Jacket",
    size: "M",
    price: 100,
    category: {
        id: 12,
        category: "C1"
    }
})

console.log(addJacket);