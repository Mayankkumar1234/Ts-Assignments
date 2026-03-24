type keyValue = string | boolean | number;

// function flatNestedObject<T>(inputObj:T) {
//    type  ObjectRecord = Record<string , keyValue>;
//    const result:ObjectRecord = {}
//   for (const i in inputObj) {
//     if (inputObj[i] instanceof Object &&
//       inputObj[i] !== null){
//       const temp = flatNestedObject(inputObj[i]);

//       for (const j in temp) {
//         result[i + "." + j] = temp[j];
//       }
//     } else {
//       result[i] = inputObj[i];
//     }
//   }
//   return result;
// }


const data = {
  user: {
    id: 123,
    name: "John Doe",
    addresses: [
      {
        street: "123 Main St",
        city: "Wonderland",
        postalCode: 12345,
      },
      {
        street: "456 Elm St",
        city: "Oz",
        postalCode: 67890,
      },
    ],
    settings: {
      theme: "dark",
      notifications: {
        email: true,
        sms: false,
      },
    },
  },
};


console.log(flatNestedObject(data))