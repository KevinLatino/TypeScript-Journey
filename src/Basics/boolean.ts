(() => {

    const randomNumber: number = Math.random();

    console.log(randomNumber);

    let checkNumber: boolean;

    checkNumber = randomNumber < 0.5 ? true : false;
    
    console.log("checkNumber", checkNumber);

})();