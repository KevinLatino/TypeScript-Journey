(() => {

    enum Roles {
        Admin = "Admin",
        client = "client"
    }

    const checkRol = (...roles: string[]) => {
        if (roles.includes(Roles.Admin)){
            return true
        }
        return false
    }

    console.log(checkRol(Roles.Admin));
    
})();