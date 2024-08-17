(()=> {
    const login = (data: {email: string, password:  number} ) => {
        console.log(data.email, data.password);
    }

   login({
    email: "pi@pi.com",
    password: 3.14
   })
})();