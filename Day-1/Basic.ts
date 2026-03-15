



// let username:string = "Mayank";

// let age:number = 21;
// let isMarries:boolean = true;


// function greetUser(username:string , age:number):string{
//     return `Hello , ${username} you are ${age} old!`
// }

// console.log(greetUser(username , age))


class Employee{
    name:string = "Mayank kumar";
    salary:number = 10000;
    // constructor(name , salary){
    // //   this.name = name;
    // //   this.salary = salary
    // }
    printSalary(){
        console.log(`Your name ${this.name} and current ${this.salary}`)
    }
}

// const myEmployee = new Employee();

// myEmployee.printSalary()


// const arr:(string|number)[] = ["Mayank", 21, null];  //Type 'null' is not assignable to type 'string | number'.


// const arr:(string|number)[] = ["Mayank", 21];


// console.log(arr)


// function 

const greet: {name:string , age:number}={
       name:"Mayank",
       age:21
}

// console.log(greet)


// const strs:number[] = [1,2,3,4];

// console.log(strs)


// const myArr:[] = [1,2,"Mayank"] --> Causing an error



// --> Unknown and any difference


// any : 
// 1. Can assign any value to it?

// 2. Can assign it to other types

// 3.  Can call methods / access props

// 4. Type safety -> No (bypass type safety)


// unknown

// 1. Can assign any value to it?
// 