/********** Number **********/
var number = 123;
var hexa = 0x45CF;
var octalNum = 255;
var binary = 57;
console.log(number);
console.log(hexa);
console.log(octalNum);
console.log(binary);
/********** String **********/
// let studentName :string = 'Ikbal';
var studentName = "Ikbal";
console.log(studentName);
var studentName1 = 'Ikbal';
var studentProgramme = 'Software';
// Pre-ES6
var studentDesc1 = studentName1 + " graduated from the " + studentProgramme + " programme";
// Post-ES6 
var studentDesc2 = "".concat(studentName1, " graduated from the ").concat(studentProgramme, " programme");
console.log(studentDesc1);
console.log(studentDesc2);
/********** Boolean **********/
var isPresent = false;
console.log(isPresent);
/********** Array **********/
var fruits = ['Apple', 'Strawberry', 'Orange'];
var fruits1 = ['Apple', 'Strawberry', 'Orange'];
console.log(fruits);
console.log(fruits1);
var arr = [5, 7, 'Blue', true];
var ids;
ids = [234, 568, 89877];
var values = ['Orange', 5, 'Apple', 7];
var values1 = ['Orange', 5, 'Apple', 7];
var color;
color = ['Red', 'Blue', 'Orange'];
console.log(color);
for (var i = 0; i < color.length; i++) {
    console.log(color[i]);
}
/********** Tuple **********/
var Id = 5;
var employeeName = 'Ayse';
var employee = [5, "Ayse"];
var user;
user = [1, "Lara", false, 24, "Admin"];
console.log(user);
var instructor;
instructor = [[1, "Jhon"], [2, "Mary"], [3, "Jacob"]];
console.log(instructor);
var students4;
students4 = {
    firstName: 'Ikbal',
    lastName: 'Kulahci',
    age: 24,
    jobTitle: 'Software Engineer'
};
var person;
person = {
    firstName: 'Ikbal',
    lastName: 'Kulahci',
    age: 24,
    jobTitle: 'Software Engineer'
};
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
var PrintMedia;
(function (PrintMedia) {
    PrintMedia["Newspaper"] = "NEWSPAPER";
    PrintMedia["Newsletter"] = "NEWSLETTER";
    PrintMedia["Magazine"] = "MAGAZINE";
    PrintMedia["Book"] = "BOOK";
})(PrintMedia || (PrintMedia = {}));
console.log(PrintMedia.Magazine);
console.log(PrintMedia['Book']);
/********** Union **********/
var code;
// code=21343545;
code = false;
console.log(code);
/********** Any **********/
var someThing = "Hi";
someThing = 578;
someThing = true;
someThing = {
    age: 12,
    name: "Ali"
};
console.log(someThing);
var arr2 = ["Ali", 12, false];
console.log(arr2);
/********** Void **********/
function sayHello() {
    console.log('Hello');
}
sayHello();
/********** Never **********/
// function throwError(errorMsg : string): never{
//     throw new Error(errorMsg);
// }
// throwError("Hata")
/********** If-Else **********/
var k = 50;
var l = 25;
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
var day = 5;
switch (day) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('The week consists of 7 days. Enter one day.');
        break;
}
/********** For-Loop **********/
for (var i = 0; i < 3; i++) {
    console.log("İ is", i);
}
var arr3 = [10, 20, 30, 40];
//'of' traverses each element of the array
for (var _i = 0, arr3_1 = arr3; _i < arr3_1.length; _i++) {
    var item = arr3_1[_i];
    console.log(item);
}
//'in' returns index values
for (var item in arr3) {
    console.log(item);
}
/********** While - Do While Loop **********/
var counter = 0;
while (counter < 5) {
    console.log(counter);
    counter++;
    if (counter == 2) {
        break;
    }
}
do {
    console.log(counter);
    counter++;
} while (counter > 10);
/********** Function **********/
function add(a, b) {
    return a + b;
}
var toplam = add(25, 40);
console.log(typeof (toplam));
function print() {
    console.log("Typescript");
    return 38;
}
var variable = print();
console.log(variable);
function addName(name, surname) {
    if (surname === void 0) { surname = "KLHC"; }
    return (name + ' ' + surname);
}
var veriableName = addName("Ikbal", "Kulahcioglu");
console.log(veriableName);
/********** Arrow Function **********/
//When c is optional
function Multiplication(a, b, c) {
    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}
var veriableMultiplication = Multiplication(5, 10);
console.log(veriableMultiplication);
//arrow function as well as lambda function is to write the function on a single line
var Multiplication2 = function (a, b) { return a * b; };
var veriableMultiplication2 = Multiplication2(5, 10);
console.log(veriableMultiplication2);
function add2(a, b) {
    return a + b;
}
// let addVeriable = add2(9,5);
var addVeriable = add2("Type", "Script");
console.log(addVeriable);
/********** Rest Parameters **********/
function addRest(a) {
    var numbers = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numbers[_i - 1] = arguments[_i];
    }
    console.log(a);
    var total = 0;
    numbers.forEach(function (num) { return total += num; });
    return total;
}
console.log(addRest("Ikbal", 20, 30));
function addRest2(message) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    console.log(message + " " + names.join(", "));
}
addRest2("Hi everyone", "Ikbal", "Mary", "Jhon");
/********** Class **********/
var Person1 = /** @class */ (function () {
    function Person1(id, firstName, lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person1.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat((this, this.lastName));
    };
    return Person1;
}());
var person2 = new Person1(1, "Ikbal", "Kulahcioglu");
console.log(person2);
console.log(person2.getFullName());
