let response: any = " 42";

let numericLength: number = (response as string).length; // Using 'as' for forceful type assertion

type Book = {
    name:string;
}

let bookString = '{"name":"TypeScript Basics"}';
let bookObject = JSON.parse(bookString) as Book;

console.log(bookObject.name)

const inputElement = document.getElementById("user-input") as HTMLInputElement;

let value:any 
value = "chai"
value =[1,2,3]
value = 2.5

value.toUpperCase() // This will cause a runtime error if value is not a string

let newValue :unknown
newValue = "hello"
newValue = 123
newValue = true

if (typeof newValue === "string") {
    newValue.toUpperCase() // Safe to use string methods
}

// Example of using 'unknown' in a  catch block
try {
    
} catch (error) {
    if (error instanceof Error) { // Type guard for Error type
        console.log(error.message)
    }
    console.log("Unknown error", error)
}

// Converting from unknown to a specific type
const data: unknown = "Sample data";
const strData: string = data as string;

type Role = "admin" | "user" ;

function redirectBasedOnRole(role:Role): void{
    if(role === "admin"){
        console.log("Redirect to admin dashboard")
        return
    }
    if(role === "user"){
        console.log("Redirect to user homepage")
        return
    }
    role; // This will cause a compile-time error if a new role is added and not handled
}

function neverReturn(): never {
    while(true){}
}