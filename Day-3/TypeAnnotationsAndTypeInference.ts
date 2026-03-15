
//  ------------------ Type Annotation -------------------

// -> In this we are explicitly telling the type of a variable , parameter or return should be.
function greet(name:String):void{  // Explicitly giving the parameter type and the return type
  console.log(`Hello , ${name}`)
}

// greet("Mayank")


const user:{id:number , name:string} = {
  id:21,
  name:"Rohit"
}

// console.log(user)

// --------------------  Type Inference -------------------

// let message = "Hello"

// // message = 21;


// function add(a:number , b:string){
//   return a+b
// }

// console.log(true, "Mayank")

