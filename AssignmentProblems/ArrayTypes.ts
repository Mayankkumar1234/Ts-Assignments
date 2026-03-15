function doubleArray<T extends number>(arr:T[]){
    return arr.map((e)=> (e*2))// --->   Getting the error
   
    }

console.log(doubleArray([1,2,3,4,5]))
