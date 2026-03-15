
type TransformObject<O , P> = {

  [k in keyof O]:O[k] extends Object?TransformObject<O[k] ,P>:O[k]

}


type MyObject = {
  a: {
    b: number,
    c: {
      d: string;
    },
  };
  e: boolean;
};


type Transformed = TransformObject<MyObject, 'prefixed_'>;


/* 
Transformed will be:

{
  prefixed_a: {
    prefixed_b: number;
    prefixed_c: {
      prefixed_d: string;
    };
  };
  prefixed_e: boolean;
}
*/
