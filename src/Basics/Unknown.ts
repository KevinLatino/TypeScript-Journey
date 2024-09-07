(() => {

    let fruit: unknown = 14;

    if (typeof fruit === "string"){
        console.log(`${fruit} is a fruit`);
    } else {
        console.log(`${fruit} is not a string`);
    }

    //with unknown types we have to make a validation

})();