//just a random example of how to use interfaces with classes

interface Drivers {
    database: string,
    schema: string,
    password: string,
    connection(url: string): void
}

class PostgresConnection implements Drivers {
    constructor(
        public database: string,
        public schema: string,
        public password: string,
    ){ }

    connection(url: string): void {
        console.log("Connected");   
    }
}