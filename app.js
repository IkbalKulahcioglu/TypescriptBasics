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
function throwError(errorMsg) {
    throw new Error(errorMsg);
}
throwError("Hata");
