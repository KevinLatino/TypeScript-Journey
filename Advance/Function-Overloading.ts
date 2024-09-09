(() => {

    function parseStr(input: string[]): string;
    function parseStr(input: string): string[];

    function parseStr(input: unknown): unknown {
        if(Array.isArray(input)){
            return input.join('')
        }
        if (typeof input === "string"){
            return input.split('')
        }
        
    }

    const rtaArray = parseStr('Kevin');
    rtaArray.toString();

    console.log(rtaArray);
    

    const rtaString = parseStr(["K","E", "V", "I", "N"]);

    rtaString.toLocaleLowerCase();

    console.log(rtaString);
    
})()