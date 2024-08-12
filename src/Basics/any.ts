(() => {
    //Is not recommended to use "any" in TypeScript files
    //AVOID this:  let anyVariable: any;

    //if you do not have another option, we can use cast, like this: 

    let myVariable: any;

    const number = (<number>myVariable);

    //other way to use cast:

    const number2 = (myVariable as string);

    //the best way to use flexibility in TypeScript files is using Union-Types
})();