import { createReducer, on } from "@ngrx/store";
import { decrement, increament } from "./counter.action";


export const initialValue = 0;

export const counterReducer = createReducer(initialValue , 
  on(increament, (state:number)=> state +1),
    on(decrement, (state:number)=> state -1),

)

export interface AppStore {
  count:number
}

