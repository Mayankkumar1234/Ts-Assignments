const add = (a: number, b: number): number => a + b;



function loggerWrapper(functionName){


  return (a, b)=>{
    return `Calling function ${functionName} with arguments: ${b} ${b} and output :${functionName(a,b)} `
  }
}

const loggedAdd = loggerWrapper(add);

const value = loggedAdd(3, 5);

console.log(value)

