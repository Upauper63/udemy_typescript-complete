"use strict";
exports.__esModule = true;
var hasValue = true;
var count = 1;
var float = 3.14;
var negative = -1;
var single = 'hello';
// let hello;
// hello = 'te';
// hello = 3;
var person = {
    name: 'jack',
    age: 21
};
var fruits = ['Apple', 'Banana', 'Grape'];
var fruit = fruits[0].toUpperCase;
var book = ['business', 1500, false];
// book.push('tes');
// console.log(book[3]);
// book[3];
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "short";
    CoffeeSize["TALL"] = "tall";
    CoffeeSize["GRANDE"] = "grande";
    CoffeeSize["VENTI"] = "venti";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.TALL
};
coffee.size = CoffeeSize.TALL;
var anything = true;
var tes = 'tes';
// tes = anything;
// console.log(typeof tes)
var unionType = 10;
unionType = 'tes';
var apple = 2;
var ClothSize = 'LARGE';
var cloth = 'LARGE';
function add(num1, num2) {
    return 'tes';
}
add(1, 2);
function sayHello() {
    console.log('Hello');
}
console.log(sayHello());
var tmp = null;
var anotherAdd = function (num1, num2) {
    return num1 + num2;
};
var anotherAdd2 = function (num1, num2) { return num1 + num2; };
function double(num, cb) {
    var doubleNum = cb(num, num);
    console.log(doubleNum);
    // console.log(num * 2)
}
double(3, function (a, b) { return a + b; });
var unknownInput;
var anyInput;
var strInput;
unknownInput = 'hello';
unknownInput = 2;
anyInput = 'hello';
anyInput = unknownInput;
unknownInput = anyInput;
strInput = anyInput;
if (typeof unknownInput === 'string') {
    var text = unknownInput;
}
function error(message) {
    throw new Error(message);
}
console.log(error('new error'));
