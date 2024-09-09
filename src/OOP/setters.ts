class DateExample {

    constructor(
        private day: number = 10,
        private _month : number = 10,
        private year: number = 10
    ) { }

    set month(newMonth: number) {
        if (newMonth >= 1 && newMonth <= 12){
            this._month = newMonth
            console.log(`${newMonth} is the new month`);
        } else {
            throw new Error("month is not between 1 and 12");
        }
    }
}

const newMonth = new DateExample();

newMonth.month = 6