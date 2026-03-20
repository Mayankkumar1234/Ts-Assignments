import { Component } from '@angular/core';
import { from, interval, Observable, of, timer , map , filter} from 'rxjs';


interface User{
  id:number,
  firstName:string,
  lastName:string,
  email:string,
  age:number,
  role:String
}

@Component({
  selector: 'app-rx-js-basics',
  imports: [],
  templateUrl: './rx-js-basics.html',
  styleUrl: './rx-js-basics.css',
})
export class RxJsBasics {

  // cityList:string[] = ["Delhi", "Meerut", "Duhai", "Nagpur"];

  // cityList1$ = of(["Delhi", "Meerut", "Duhai", "Nagpur"]);

  // cityList2$ = from(["Delhi", "Meerut", "Duhai", "Nagpur"]);

  // myInterval$ = interval(2000)


    //  of : Any number of arguments it tak
    // Emits each arguments separately as individual values.  
    //  source1$ = from([1])

    //   from : One single argument(array , iterable , Promise , Objservable-like etc.)
    // Iterate or unwrap the input ad emit each item one by one

  //  form and of observable in angular


    

  // timer$ = timer(3000)

    //  source$= of(1,2,3,4,5)

  // Using Map on the object

  // user$ = of<User[]>([ { id: 1, firstName: 'John', lastName: 'Doe', email: 'john@email.com', age: 30, role: 'admin' },
  // { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane@email.com', age: 25, role: 'user' },
  // { id: 3, firstName: 'Bob', lastName: 'Johnson', email: 'bob@email.com', age: 35, role: 'user' }])
  
   noList$  = from([11,12,13,14,15,16,17,18,20])




  //  Tap Operator : 


  constructor(){
    // debugger
    // const myObs$ = new Observable(value=>{
    //   value.next("This is a Demo Text")
    // })

    // this.myInterval$.subscribe((res)=>{
      // console.log("Interval Observable", res)
    // })
    //  debugger
  //   myObs$.subscribe(message=>{
  //     console.log(message)
  //   })
  //   //  debugger
  //  this.cityList1$.subscribe(res=>{
  //   // debugger

  //  })
  // this.cityList2$.subscribe(res=>{
  //   // debugger
  //   console.log(res)
  // })

  // this.timer$.subscribe(res=>{
  //   console.log("Working on timer",res)
  // })

    //  Pipe Operator :-
    
  // this.source$.subscribe(res=>{
  //   console.log(res)
  // })

  // const result$ = this.source$.pipe(
  //   filter(x=> x%2==0),


  // )
    // const result$ = this.source$.pipe(
    //   filter(x=>x%2==0),
    //   map(x=>x*2)
    // )

    // result$.subscribe(res=>{
    //   console.log(res)
    // })
  //  this.source$.pipe(
  //     map(x=>x*2)
  //   ).subscribe(res=> console.log(res))

  this.noList$.pipe(
    filter(num=> num%2==0)

  ).subscribe(res=> console.log(res))
}

}
