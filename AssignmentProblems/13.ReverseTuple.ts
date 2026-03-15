

// let myArr:[string , number , boolean] = ["Mayank", 21, true];

// console.log(myArr)


// function reveseTup(){

// }

type TupleReverse<T> = T extends Array<infer R>?R:T;




type arr = [number , string , boolean];

let myArr1:arr = [21, "Mayank", true]

type myArr = TupleReverse<typeof myArr1>;



















































// const myArr1:[number , string , boolean] = [21, "Mayank", true];


// interface User{
//   name:string;
//   age:number
// }


// function printDetails(arg:User):string{
//   return `${arg.name} ${arg.age}`
// }

// // function printDetails<T extends User>(arg:T):string{

// // }

// const obj:User={
//   name:"abc",
//   age:20
// }
// printDetails(obj);






// function getDetail<T>(args:T):string{
//   let result;
//   result="hello";
//   return result;
// }

// getDetail({hello:10});