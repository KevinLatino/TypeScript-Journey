(() => {
    //it's recommented to use PascalCase 
    type UserId = string | number;

    type UserAge = 20 | 30 | 40;

    const typeOfParam = (userId: UserId, userAge: UserAge ) => {
        if (typeof userId === "string") {
            console.log(`${userId} is a string and the age of the user is ${userAge}`);
        } else {
            console.log(`userId is a number and the age of the user is ${userAge}`);
        }
    }

    typeOfParam("1212bncbjcwe-dwjcnwjcw-cwecjkwnec", 40)
    
})();