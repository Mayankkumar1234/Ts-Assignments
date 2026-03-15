
interface Point{
  x:number,
  y:number
}

// ----------------------- Partial -------------------------------

const pointPart:Partial<Point>= {
 x:21
}

console.log(pointPart)


// let user:string = "Mayank";

// console.log(user)

// interface User {
//   id: string;
//   name: string;
//   email: string;
//   role?: string; // Optional property
// }


// --------------------- ReadOnly ---------------------------

// const user1:Readonly<User>={
//     id:"21",
//     name:"Mayank",
//     email:"mk123@gmail.com"
// }


// ------------------------ Required ------------------------

// type user2 = Required<User>;

// const user2 ={
//         id:"21",
//     name:"Mayank",
//     email:"rohit123@gmail.com",
//     role:"developer"
// }
// user2.name = "Rohit"
// console.log(user2)

// user1.name = "Mukul";

// ------------------- Record ----------------------------

// type UserDictionery =Record<string,User>

// let userDictionery:UserDictionery= {
//     "first":{
//         id:"21",
//     name:"Mayank",
//     email:"rohit123@gmail.com",
//     role:"developer"
// },
// "second":{
//         id:"21",
//     name:"Mayank",
//     email:"rohit123@gmail.com",
//     role:"developer"
// }
// }


// console.log(userDictionery)

// Exclude ->Exclude removes types from a union.


// type AvailableRoles = 'admin' | 'editor' | 'viewer' | 'guest';

// type EmployeeRoles= Exclude<AvailableRoles , "guest">;

// let myRole:EmployeeRoles = "admin"


// function greet(name: string): string {
//   return `Hello, ${name}!`;
// }

// Return type :- ReturnType extracts the return type of a function type.
//  It works only the function return type
 
// type GreetReturnType = ReturnType<typeof greet>;
 
// const greeting: GreetReturnType = "Hello, TypeScript!"; 


function multiply(a: number, b: number): number {    return a * b;}
type MultiplyFunctionReturnType = ReturnType<typeof multiply>;