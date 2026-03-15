
// //  Interface 

// interface UserProfile{
//   name:string,
//   email:string;
//   age?:number;
//   readonly id:number;
//   greet():string;
// }

// interface UserProfile {
//   name: string;
//   email: string;
//   // Question mark (?) ka matlab hai ki yeh property optional hai
//   age?: number; 
//   // 'readonly' ka matlab hai ek baar value assign ho gayi toh change nahi hogi
//   readonly id: number; 
//   // Aap functions/methods ka signature bhi define kar sakte hain
//   greet(): string; 
// }

// // Ab hum is blueprint ka use karke ek object banayenge
// const myUser: UserProfile = {
//   id: 101,
//   name: "Rahul",
//   email: "rahul@example.com",
//   // age humne chhod di, jo ki allowed hai kyunki wo optional (?) thi
//   greet() {
//     return `Hi, my name is ${this.name}`;
//   }
// };


// // Differene b/w type and interface :-

// // Interface  :-
// // 1. Used for classes and object only.
// 2. Haan. Agar aap same naam se do interface banayenge, toh wo aapas mein merge ho jayenge.
//  3. We can use extend keyword in the interface

// // interface name{

// // };

// //  Type Alias :-

// // 1. It can be used for any type (objects , union , primitive)
// 2. We cannot create two type of the same name.
//  we can use Primitives & Unions togeather.

// type Status = "pending" | "done"
// 3. Use intersection (&) to combine.

// // type name = string;


interface Car{
  brand:string
}

interface Car{
  model:string
}

const myCar:Car={  // Haan. Agar aap same naam se do interface banayenge, toh wo aapas mein merge ho jayenge.
  brand:"Tata",
  model:"Nexon"
}



// 4. Interface with Class Types & Implementing Interfaces

// Interfaces sirf plain objects check karne ke liye nahi hote. Inka asli maza Classes ke saath aata hai.

// Jab ek class kisi interface ko implements karti hai, toh wo TypeScript se ek strict wada karti hai: "Main is interface mein likhi saari properties aur methods ko zaroor apne andar define karungi." Agar class aisi nahi karti, toh error aayega. Yeh badi applications mein consistency maintain karne ke liye bahut zaroori hai.


interface printer{
  brand:string;
  printPages(content:string):void
}

class LaserPrinter implements printer{
  brand!:string;
  constructor(brand:string){
    this.brand = brand
  }
  printPages(content:string) {
     console.log(`${this.brand} printer is printing the ${content}`)
  }
}


