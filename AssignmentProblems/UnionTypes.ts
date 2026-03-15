
// Create a function that takes a parameter which can either be a string or a number. The function should return the parameter as a string.

// Complete stringify method :

// console.log(stringify(123));
// Output: "123"

// console.log(stringify('hello'));
// Output: "hello"

function stringify<T>(val:T):string{
             
  //  Satisfies
  let value =  `${val}`.toLocaleLowerCase()
  
  return value
}


console.log(stringify<number | string>("hello"))