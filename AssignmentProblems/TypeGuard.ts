

class Animal{

}

class Dog extends Animal{

}

class Cat{

}

let Fox = {}

function filterDogs(arr1:Object[]){
 let arr = [];
 for(let val of arr1){
  if(val instanceof Dog){
    arr.push(val)
  }
 }
 return arr
}

let dog1 = new Dog();
let cat1 = new Cat();


 
console.log(filterDogs([dog1, cat1 , Fox]))

