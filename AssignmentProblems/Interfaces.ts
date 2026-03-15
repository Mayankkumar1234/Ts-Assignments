interface Person{
    name:string,
    age:number
}

function describePerson<P extends Person>(user:P):string{
 return `Name:${user.name} Age:${user.age}`   // ---> How to fix this
}



console.log(describePerson({ name: 'Alice', age: 30 }))
