/********** Number **********/

let number: number = 123;
let hexa: number = 0x45CF;
let octalNum: number = 0o377;
let binary: number = 0b111001;

console.log(number);
console.log(hexa);
console.log(octalNum);
console.log(binary);


/********** String **********/

// let studentName :string = 'Ikbal';

let studentName: string = "Ikbal";

console.log(studentName);

let studentName1: string = 'Ikbal';
let studentProgramme: string = 'Software';


// Pre-ES6
let studentDesc1: string = studentName1 + " graduated from the " + studentProgramme + " programme"

// Post-ES6 
let studentDesc2: string = `${studentName1} graduated from the ${studentProgramme} programme`

console.log(studentDesc1);
console.log(studentDesc2);

/********** Boolean **********/

let isPresent: boolean = false;

console.log(isPresent);

/********** Array **********/

let fruits: string[] = ['Apple', 'Strawberry', 'Orange'];
let fruits1: Array<string> = ['Apple', 'Strawberry', 'Orange'];
console.log(fruits);
console.log(fruits1);

let arr = [5, 7, 'Blue', true];

let ids: Array<number>;
ids = [234, 568, 89877];


let values: Array<string | number> = ['Orange', 5, 'Apple', 7];
let values1: (string | number)[] = ['Orange', 5, 'Apple', 7];

let color: Array<string>;
color = ['Red', 'Blue', 'Orange'];

console.log(color)

for (let i = 0; i < color.length; i++) {
    console.log(color[i]);
}


/********** Tuple **********/

let Id: number = 5;
let employeeName: string = 'Ayse';

let employee: [number, string] = [5, "Ayse"];

let user: [number, string, boolean, number, string];
user = [1, "Lara", false, 24, "Admin"];

console.log(user);

let instructor: [number, string][];
instructor = [[1, "Jhon"], [2, "Mary"], [3, "Jacob"]];
console.log(instructor)



/********** Object **********/

type Person = {
    firstName: string,
    lastName: string,
    age: number,
    jobTitle: string
};

let students4: Person;

students4 = {
    firstName: 'Ikbal',
    lastName: 'Kulahci',
    age: 24,
    jobTitle: 'Software Engineer'
}

let person: {
    firstName: string,
    lastName: string,
    age: number,
    jobTitle: string
}

person = {
    firstName: 'Ikbal',
    lastName: 'Kulahci',
    age: 24,
    jobTitle: 'Software Engineer'
}

console.log(person);

/********** Enum **********/

// enum Media {
//     Newspaper,
//     Newsletter,
//     Magazine,
//     Book
// }

// console.log(Media.Newsletter);
// console.log(Media[2]);

enum PrintMedia {
    Newspaper = "NEWSPAPER",
    Newsletter = "NEWSLETTER",
    Magazine = "MAGAZINE",
    Book = "BOOK"
}

console.log(PrintMedia.Magazine);
console.log(PrintMedia['Book']);

/********** Union **********/

let code: string | number | boolean;

// code=21343545;
code = false;
console.log(code);

/********** Any **********/

let someThing: any = "Hi";
someThing = 578;
someThing = true;

someThing = {
    age: 12,
    name: "Ali"
}

console.log(someThing);

let arr2: any[] = ["Ali", 12, false];
console.log(arr2);


/********** Void **********/

function sayHello(): void {
    console.log('Hello')
}

sayHello();

/********** Never **********/

// function throwError(errorMsg : string): never{
//     throw new Error(errorMsg);
// }

// throwError("Hata")

/********** If-Else **********/

let k: number = 50;
let l: number = 25;

// if(k<l){
// console.log("L is bigger than K ");
// }
// else if(k>l){
//     console.log("L is smaller than K ");
// }
// else{
//     console.log("L is equal to K");
// }

k > l ? console.log("L is smaller than K ") : console.log("L is smaller than K or equal ");

/********** Switch-Case **********/

let day: number = 5;

switch (day) {
    case 1: console.log('Monday');
        break;
    case 2: console.log('Tuesday');
        break;
    case 3: console.log('Wednesday');
        break;
    case 4: console.log('Thursday');
        break;
    case 5: console.log('Friday');
        break;
    case 6: console.log('Saturday');
        break;
    case 7: console.log('Sunday');
        break;
    default: console.log('The week consists of 7 days. Enter one day.');
        break;
}

/********** For-Loop **********/

for (let i = 0; i < 3; i++) {
    console.log("İ is", i);
}

let arr3 = [10, 20, 30, 40];
//'of' traverses each element of the array
for (let item of arr3) {
    console.log(item);
}

//'in' returns index values
for (let item in arr3) {
    console.log(item);
}

/********** While - Do While Loop **********/

let counter = 0;

while (counter < 5) {
    console.log(counter);
    counter++

    if (counter == 2) {
        break;
    }
}

do {
    console.log(counter);
    counter++;
} while (counter > 10);

/********** Function **********/

function add(a: number, b: number): number {
    return a + b;
}

let toplam = add(25, 40);
console.log(typeof (toplam));

function print() {
    console.log("Typescript");
    return 38;
}

let variable = print();
console.log(variable);

function addName(name: string, surname: string = "KLHC"): string {
    return (name + ' ' + surname);
}

let veriableName = addName("Ikbal", "Kulahcioglu")
console.log(veriableName);

/********** Arrow Function **********/

//When c is optional
function Multiplication(a: number, b: number, c?: number) {
    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}

let veriableMultiplication = Multiplication(5, 10);
console.log(veriableMultiplication);

//arrow function as well as lambda function is to write the function on a single line
let Multiplication2 = (a: number, b: number): number => { return a * b }

let veriableMultiplication2 = Multiplication2(5, 10);
console.log(veriableMultiplication2);

/********** Function Overloading **********/

function add2(a: number, b: number): number;
function add2(a: string, b: string): string;

function add2(a: any, b: any): any {
    return a + b;
}

// let addVeriable = add2(9,5);
let addVeriable = add2("Type", "Script");
console.log(addVeriable);

/********** Rest Parameters **********/

function addRest(a: string, ...numbers: number[]): number {
    console.log(a);
    let total = 0;
    numbers.forEach((num) => total += num);
    return total;
}

console.log(addRest("Ikbal", 20, 30))

function addRest2(message: string, ...names: string[]) {
    console.log(message + " " + names.join(", "));
}

addRest2("Hi everyone", "Ikbal", "Mary", "Jhon")

/********** Class **********/

class Person1 {
    id: number;
    firstName: string;
    lastName: string;

    constructor(id: number, firstName: string, lastName: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this, this.lastName}`
    }
}

let person2 = new Person1(1, "Ikbal", "Kulahcioglu");
console.log(person2);
console.log(person2.getFullName());

/********** Inheritance **********/

class Person2 {
    id: number;
    firstName: string;
    lastName: string;

    constructor(id: number, firstName: string, lastName: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

//Person parent Employee child class
//You trigger the constructor of the parent class with the super keyword

class Employee extends Person2 {
    constructor(id: number, firstName: string, lastName: string) {
        super(id, firstName, lastName)
    }
}

let employee1 = new Employee(24, "Ikbal", "Kulahcioglu"); 
console.log(employee1.getFullName())