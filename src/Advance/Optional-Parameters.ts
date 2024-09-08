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

    console.log(product("kevin"));
    
})();