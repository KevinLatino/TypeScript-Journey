(() => {

    const product = (
        name: string,
        isNew?: boolean,
        price?: number
    ) => {
        return {
            name: name,
            //nullish coalescing example
            isNew: isNew ?? false,
            price: price ?? 10
        }
    }

    //typescript way
    const product2 = (
        name: string,
        isNew: boolean = false,
        price: number = 10,
    ) => {
        return {
            name: name,
            //nullish coalescing example
            isNew: isNew ?? false,
            price: price ?? 10
        }
    }

    console.log(product2("kevin"));
    
})();