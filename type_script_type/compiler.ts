let hi = 'hello';
console.log(hi.toUpperCase());

let impli;
impli = 'hello';
impli = 32;

let nullableMs: string = undefined;
let onlynull: null = undefined;

function echo(message: string): string  | undefined{
    if (message){
        return message;
    }
    return undefined;
}