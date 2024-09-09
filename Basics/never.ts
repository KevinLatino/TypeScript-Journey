(() => {

    //we use "never" type when we have a function that will never stop

    const neverExample = (): never => {
        while(true){
            console.log("never stop learning");
        }
    }
    
})();
