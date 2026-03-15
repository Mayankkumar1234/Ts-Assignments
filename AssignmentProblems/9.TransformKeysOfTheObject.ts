// function tranformKey<T> (arg:T ,value:Record<keyof T,string | number>) {
 
// }



function tranformKey<T> (arg:T,value:Partial<T>){

  type userRecord = Record<string, string>;
  let user:userRecord= {}

  for(let key in arg){
//  let val =   
   if(key in value){
      user[value[key] keyof T] =typeof arg[key]
   }else{
    user[key] = typeof arg[key]
   }
  } 
    console.log(user)
}
 
 const user = {
    firstName: "Tony",
    lastName: "Stark",
    age: 54
}

 
//  tranformKey(user,{firstName:"first",lastName:"last"})
 
 



// interface User{
//   name:string;
//   age:number;
// }

// type userkeys = keyof User;


// const key1:userkeys = "name";

// const key2:userkeys = "gender";

// const key3:userkeys= "age"


// const key3:userkeys= "age"