

type NullabelProperties<T> = {

 [k in keyof T]:T[k] extends Object? NullabelProperties<T[k]> | null :T[k] | null;

}


interface User{
  age:number;
  name:string;
  adress:{
    street:number,
    area:string,
    city:string
  }
}

let implementNonNullable:NullabelProperties<User>;

let userAdress:NullabelProperties<User> = {
 age:21,
 name:"Mayank",
 adress:{
  street:null,
  area:"fr",
  city:null
 } 
}

