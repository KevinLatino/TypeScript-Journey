(() => {
    //Example of union type
    let userId: number | string;
    userId = 3000
    userId = "1j2h34cd3no2l3cdje3r48csd-dw9efwcn2-3diqdjqwed23";
    console.log(userId);

    const greeting = (myVarible: string | number) => {
        if (typeof myVarible === "string") {
            //here we can use methods for strings
        } else {
            //here we can use methods for numbers
        }
    }

    //we can make our own types using "aliases"

})();