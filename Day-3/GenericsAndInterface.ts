
interface Chai{
  flavor:string,
  price:number,
  milk?:boolean
}

const masala:Chai = {
  flavor:"masala",
  price:21
}

masala.price = 33;


interface Shop{
 readonly id:number,
  name:string
}

const myShop:Shop= {
  id:21,
  name:"Dubey"
}

// myShop.id = 22;