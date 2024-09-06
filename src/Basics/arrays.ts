(() => {
    const mixedArray: (number | boolean | string)[] = [1, 2, 3, 4, 5, 6, 7, 8, true, "hello"];

    let numbers: number[] = [1, 5, 8];
    
    numbers = numbers.map(number => number * 2)

    console.log(numbers);

})();