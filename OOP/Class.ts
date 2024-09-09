class Car {

    constructor(
        public name: string,
        public color: string,
        public price: number
    ) { }

    public addACar(name: string, color: string, price: number): string {
        return `${name}, ${color}, ${price}`
    }

}

const car1 = new Car("Toyota", "Red", 1000);

console.log(car1.addACar("Toyota", "Red", 1000));

