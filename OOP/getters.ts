class Dates {
    constructor(
        private _day: number = 10,
        public month: number = 10,
        private year: number = 10
    ) { }

    get day(): number {
        return this._day
    }
}

const date = new Dates();

console.log(date.day);
