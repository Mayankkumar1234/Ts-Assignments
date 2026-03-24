
 
interface User {
  id: number;
  name: string;
  email: string;
}

interface SecondArr {
  userId: number;
  [key: string]: any;
}

function mergeUserPurchases<U extends SecondArr, K extends string>(users: User[], arr2: U[], innerKey: K) {
  type innerArr = Omit<U, "userId">;

  type userData = User & Record<K, innerArr[]>;

  let mergedData: userData[] = [];
  for (const user of users) {
    const obj: userData = {
      id: user.id,
      name: user.name,
      email: user.email,
      [innerKey]: []
    };

    for (const val of arr2) {
      if (val.userId === user.id) {
        const { userId, ...data } = val;
        obj[innerKey].push(data);
      }
    }

    mergedData.push(obj);
  }

  return mergedData;
}

const users = [
  { id: 1, name: "John Doe", email: "john@example.com"},
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
  { id: 3, name: "Jim Brown", email: "jim@example.com" },
];

const purchases = [
  { userId: 1, item: "Laptop", price: 1200 },
  { userId: 2, item: "Phone", price: 800 },
  { userId: 1, item: "Mouse", price: 20 },
  { userId: 3, item: "Keyboard", price: 100 },
  { userId: 2, item: "Monitor", price: 200 },
];

const objrt={ userId: 1, item: "Laptop", price: 1200 }
type ghjh=typeof Object.keys(objrt)


const userReviews = [
  { userId: 1, review: "Not good", star: 1200 },
  { userId: 2, review: "Bad", star: 800 },
  { userId: 1, review: "Average", star: 20 },
  { userId: 3, review: "Excellent", star: 100 },
  { userId: 2, review: "Poor", star: 200 },
];


mergeUserPurchases(users , userReviews , "reviews")

