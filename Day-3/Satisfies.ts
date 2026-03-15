

//  Normal type annotation - assig
type Config = Record<string, string | number>;

// Normal tareeka (Type Annotation)
const myConfig: Config = { 
  endpoint: "https://api.example.com",
  timeout: 5000,
};

// Yahan problem kya hai?
// Agar aap ab myConfig.endpoint ke upar koi string method (jaise .toUpperCase()) lagana chahoge, toh TypeScript error dega.

// Kyun? Kyunki aapne TypeScript ko bola: "Isko Config type maan lo". Toh TypeScript bhool gaya ki endpoint actually ek string tha. Ab wo usko string | number maan raha hai. Usko nahi pata ki uspe .toUpperCase() chalega ya nahi.

// ----------------------- Satisfies--------------------------
// The Solution: Enter satisfies 🎉
// Ab dekhte hain satisfies kaise is problem ko solve karta hai. satisfies TypeScript se kehta hai ki type check toh karo, par object ki "identity" (uske exact types) ko safe rakho.

// myConfig.endpoint.toUpperCase(); // ✅ Yeh bilkul chalega! (TS ko pata hai yeh string hai)
// myConfig.timeout.toFixed();


// typescript satisfies the type of the endpoint as string and the port as number, If we add some new property into it , it will throw an error.



//  Catching typos using satisfies :-


// type Colors = 'red' | 'green' |'blue';


// const theme = {
//   red:"#FF0000",
//   gren:"#00FF00"  // It is a typo written wrong spelling but the ts will not give any error.
// }

// const betterTheme = {
//   red:"#FF0000",
//   gren:"#00FF00"  // gives an error gren does not exists in Record<Colors , string>
// } satisfies Record<Colors , string>



// const x: Type = {} (Annotation): Type strictly check hoga, par TS object ke specific details bhool jayega (Types widen ho jayenge).

// const x = {} as Type (Assertion): Aap TS se zabardasti jhooth bolte ho ki "yeh is type ka hai", chahe actual mein na ho. Yeh thoda risky hota hai.

// const x = {} satisfies Type: Best of both worlds! Type strictness bhi check hogi (ki rule follow ho raha hai ya nahi), aur aapke variable ke exact types bhi bache rahenge.

