 


function add<T extends number>(a:T, b:T):number{
  return a+b 
}

console.log(add(2,4))


// function add<T>(a:T, b:T):T{
//   return  `${a}  and ${b}`
// }

// console.log(add<string>("fg", "gf"))