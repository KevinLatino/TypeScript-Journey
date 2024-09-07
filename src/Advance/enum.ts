(() => {
    enum Roles {
        Professor,
        student
    }

    type User = {
        userName: string;
        Rol: Roles;
    }

    const persona: User = {
        userName: "Kevin",
        Rol: 0
    }

    console.log(persona);

    enum State {
        Active = "Active",
        Inactive = "Inactive"
    }

    const pedido = {
        name: "Kevin Latino",
        state: State.Active
    }

    console.log(pedido);
})()



