type keys = number | boolean | string;


type myObj = {
  [key:string] : keys
}


function updateObject(obj:myObj , key:string , value:keys){
  if(obj[key]){
  obj[key] = value
  }
  return obj
}

const obj:myObj = { a: 1, b: 'hello', c: true };


const updated = updateObject(obj, 'b', 'world')

console.log(updated)

