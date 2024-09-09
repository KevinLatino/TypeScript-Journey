class Animals {
    constructor(
        public name: string,
        //if something is protected it means that it is private but it can be inherited
        protected age: number
    ) { }

    greeting(): string {
        return `Hi my name is ${this.name}`
    }
}

class Dog extends Animals {
    constructor(
        name: string,
        age: number,
        public color: string
    ) {
        super(name, age)
    }

    myColor(): string {
        const greeting = this.greeting();
        console.log(greeting);
        return `My color is ${this.color}`
    }

    get dogAge():number {
        return this.age
    }
}

const chase = new Dog("Chase", 14, "Red");

console.log(chase.myColor());
console.log(chase.dogAge);
