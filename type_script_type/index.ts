export {};

let hasValue: boolean = true;

let count: number = 1;
let float: number = 3.14;
let negative: number = -1;

let single = 'hello';

// let hello;
// hello = 'te';
// hello = 3;

const person: {name: string; age: number;} = {
    name: 'jack',
    age: 21
}

const fruits: string[] = ['Apple', 'Banana', 'Grape']
const fruit = fruits[0].toUpperCase;

const book: [string, number, boolean] = ['business', 1500, false];
// book.push('tes');
// console.log(book[3]);
// book[3];

enum CoffeeSize {
    SHORT = 'short',
    TALL = 'tall',
    GRANDE = 'grande',
    VENTI = 'venti'
}

const coffee = {
    hot: true,
    size: CoffeeSize.TALL
}
coffee.size = CoffeeSize.TALL


let anything: any = true;
let tes = 'tes';
// tes = anything;
// console.log(typeof tes)

let unionType: number | string = 10;
unionType = 'tes';

const apple = 2
const ClothSize: 'SMALL' | 'MEDIUM' | 'LARGE' = 'LARGE'

type ClothSize = 'SMALL' | 'MEDIUM' | 'LARGE'
let cloth: ClothSize = 'LARGE'

function add(num1: number, num2: number){
    return 'tes'
}

add(1, 2)

function sayHello(): void{
    console.log('Hello')
}
console.log(sayHello());


let tmp: null = null;

const anotherAdd: (num1: number, num2: number) => number  = function(num1, num2){
    return num1 + num2
};

const anotherAdd2: (num1: number, num2: number) => number = (num1, num2) => num1 + num2;

function double(num: number, cb: (num1: number, num2: number) => number): void{
    const doubleNum = cb(num, num)
    console.log(doubleNum)
    // console.log(num * 2)
}
double(3, (a, b) => a + b)

let unknownInput: unknown;
let anyInput: any;
let strInput: string;
unknownInput = 'hello';
unknownInput = 2
anyInput = 'hello'
anyInput = unknownInput
unknownInput = anyInput
strInput = anyInput
if (typeof unknownInput === 'string') {
    let text = unknownInput
}

function error(message: string): never{
    throw new Error(message);
}
console.log(error('new error'))
