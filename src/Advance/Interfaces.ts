(() => {

    type Sizes = "S" | "M" | "L" | "XL"

    interface Product {
        id: number | string,
        title: string,
        price: number,
        size: Sizes
    }

    const handleProducts = (product: Product) => {
        return product;
    }

    console.log(handleProducts({
        id: 1,
        title: "Black Jacket",
        price: 100,
        size: "M"
    }));
    
})()