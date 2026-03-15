// function greetUser(name:String):string{
//  return `Hello, ${name}`
// }

// console.log(greetUser("Mayank"))



type mathOperation = (a:number , b :number)=> number;


// const mathAdd:mathOperation = (a,b)=>a+b;

// const mathSub:mathOperation = (a,b)=> a-b;

// const stringContact:mathOperation = (str)=> str+ "!"; --> Not possible


function greetFunc(firstName:string , greeting:string , lastName?:string){

if(lastName){
      return `${greeting} , ${firstName} ${lastName}`
}

return `${greeting} , ${firstName}`
}


// console.log(greetFunc("Mayank")) An argument of greeting is not provided.



// function calcTotal(discount:number, ...prices:number[]){
//     for(let i = 0;i<prices.length;i++){
//         console.log(`${i+1} product price after, Discount`, prices[i] - discount)
//     }
// }

// // calcTotal(10 , 20 , 30 , 40);


// let mysteryBox:any = "This is a mysteryBox";

// mysteryBox = 21;  --> We can assign any value to the variable declared with any

// mysteryBox= true;


// // console.log(mysteryBox)



type User = {
    name:string,
    age:number
}

type Cart = {
    name:string,
    value:number
}

type UserCart = User&Cart

const userCart:UserCart = {
    name:"Mayank", 
    age:21,
    value:33
}

console.log(userCart)


//  unknown and any
//  Exclude in ts
//  Satisfy

