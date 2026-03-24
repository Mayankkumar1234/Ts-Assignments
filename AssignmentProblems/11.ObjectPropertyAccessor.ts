// function flatGet<T , k extends keyof T >(Obj:T , key:k){
//   return Obj[key]
// }



// let simpleObj = {
//   name:"Mayank",
//   ge:21
// }


// console.log(flatGet(simpleObj ,"name"))

// type Path<T> = T extends object 
//   ? { [K in keyof T]: 
//       K extends string 
//         ? T[K] extends object 
//           ? `${K}` | `${K}.${Path<T[K]>}` 
//           : `${K}`        : never 
//     }[keyof T] 
//   : never;

//   type DeepKeys<T> = T extends object
//   ? {
//       [K in keyof T & string]: T[K] extends object
//         ? `${K}` | `${K}.${DeepKeys<T[K]>}`
//         : `${K}`;
//     }[keyof T & string]
//   : never;

//   type DeepValue<T, P extends string> = P extends `${infer Key}.${infer Rest}`
//   ? Key extends keyof T
//     ? DeepValue<T[Key], Rest>
//     : never
//   : P extends keyof T
//   ? T[P]
//   : never;
 
// function deepGet<T, U>(obj:object ,keys:DeepKeys<T>){

//      let objKeys = Array.isArray(keys)?keys:keys.split(".");
    
//     console.log(objKeys)
//      let curr = obj
//     for(let i = 0;i<objKeys.length;i++){
//         if(curr[objKeys[i]]  instanceof Object){
//             curr = curr[objKeys[i]]
//         }else{
//             return curr[objKeys[i]]
//         }
//     }
// }

// let obj = {
//   foo:{
//     bar:{
//       baz:"Rohit"
//     }
//   }
// }

// const value = deepGet(obj ,"foo.bar.baz");
// console.log(obj.foo.bar.baz)

// // const value = deepGet(obj, ['foo','bar','baz'];


type Path<T> = T extends object
? {
      [K in keyof T & string]:
        T[K] extends object
          ? K | `${K}.${Path<T[K]>}`
          : K
    }[keyof T & string]
  : never;
 
type PathArray<T> =T extends object? {
        [K in keyof T & string]:
          T[K] extends object
            ? [K] | [K, ...PathArray<T[K]>]
            : [K]
      }[keyof T & string]
    : never;
 
function deepGet<T, P extends Path<T>|PathArray<T>>(obj: T,path: P | string[]){
  const keys = Array.isArray(path) ? path : path.split(".");
 
  let result: unknown = obj;
 
  for (const key of keys) {
    if (typeof result === "object" && result !== null) {
      result = (result as Record<string, unknown>)[key];
    }
  }
 
  return result;
}
 
const obj = {
  foo: {
    bar: {
      baz: 42
    }
  }
};
 
const value = deepGet(obj,['']);
console.log(value);