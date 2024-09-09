(() => {

    type ProductSize = "S" | "M" | "L"

    const createProductToJson = (title: string, stock: number, size: ProductSize) => {
        return {
            title,
            stock,
            size
        }
    }

    const Jacket = createProductToJson("Jacket", 1, "S");

    //Return a number
    const totalCost = (prices: number[]): number => {
        return prices.reduce((total, price) => total + price, 0);
    }

    //Void is used in functions that don't return something
    const printTotal = (prices: number[]): void => {
        console.log("Your total is", totalCost(prices));
    }

    printTotal([1, 2, 3]);
})();