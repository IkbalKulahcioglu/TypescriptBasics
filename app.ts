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
