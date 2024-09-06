(() => {

    enum Roles {
        Professor = "professor",
        student = "student"
    }

    type User = {
        userName: string;
        Rol: Roles;
    }

    const persona: User = {
        userName: "Kevin",
        Rol: Roles.student
    }

    console.log(persona);
})()



