type keysValue = number | string |boolean 

type objRecord = Record<string , keysValue>;

function deepMerge(obj1 ,obj2){
let myObj:objRecord = {};
 
}

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { b: { d: 3 }, e: 4 };

// const merged = deepMerge(obj1, obj2);

// Merged should have type { a: number; b: { c: number; d: number; }; e: number; }


console.log({...obj1 , ...obj2})