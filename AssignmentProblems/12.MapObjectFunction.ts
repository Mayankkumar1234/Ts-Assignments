
type keys = number | string | boolean 

type Obj = {
  [key:string]:keys
}

type myFun = (value:keys)=>string;
// let keys = [k in keyof T]
  type record = Record< PropertyKey , string>
function mapObject(obj:Obj, callback:myFun){

  let mapRecord:record = {};

for(let key in obj){
    mapRecord[key] = callback(obj[key])
 
}

return mapRecord;



 }

 const originalObject:Obj = { a: 1, b: 2, c: 3 };

 const mappedObject = mapObject(originalObject,(value) => value.toString());

 console.log(mappedObject)