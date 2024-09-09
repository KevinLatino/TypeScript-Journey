//with static you can use something without making an instance of the class
class MyMath {
    static PI: number = 3.14;

    static checLeapYear(year: number): boolean {
        if(year % 4 === 0){
            return true
        } else {
            return false
        }
        
    }
}

console.log(MyMath.PI);

console.log(MyMath.checLeapYear(2000));

console.log(MyMath.checLeapYear(2021));

