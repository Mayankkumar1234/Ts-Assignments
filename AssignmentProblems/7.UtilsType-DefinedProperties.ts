

// type DefinedProperties<T> = {
//   // The "-?" syntax explicitly removes the optional modifier from the key
//   [K in keyof T]-?: NonNullable<T[K]>;
//   // ?T[k] extends Object?DefinedProperties<K>:NonNullable<T[K]>;
// };

// // // --- Testing Challenge 1 ---
// // interface User {
// //   age?: number;
// //   name: string | null;
// //   address:{
// //     street:string| null,
// //     city:string | undefined

// //   }
// // }



// // type DefineExample = DefinedProperties<User>;


// //  Result: { age: number; name: string;}

// // const user1:DefineExample = {
// //     age:21,
// //     name:"Mayank",
//     // address:{

// //     // }
// // }

// // console.log(user1)




// //  --------------------------- For the nested null or undefined ---------------------------------


type DefinedProperties<T> = {
  // The "-?" syntax explicitly removes the optional modifier from the key
  [K in keyof T]-?: K extends Object?DefinedProperties<T[K]>:NonNullable<T[K]>;
  // ?T[k] extends Object?DefinedProperties<K>:NonNullable<T[K]>;
};


interface User {
  age?: number;
  name: string | null;
  address:{
    street:string| null,
    city:string | undefined

  }
}
 
// type DefineExample = DefinedProperties<User>;
 
// let user1:DefineExample = {
//   age:21,
//   name:"Mayank",
//   address:{
//     street:null,
//     city:undefined
//   }
// }


// console.log(user1)

