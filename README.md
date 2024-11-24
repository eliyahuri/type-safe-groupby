# type-safe-groupby

this is a typesafe way to use groupby in ts

## Usage

```ts
import { groupBy } from "better-groupby";

const data = [
  { name: "a", age: 1 },
  { name: "b", age: 2 },
  { name: "a", age: 3 },
  { name: "b", age: 4 },
];

const grouped = groupBy(data, "name"); // you can use each key of the object as a key

console.log(grouped); // { a: [ { name: 'a', age: 1 }, { name: 'a', age: 3 } ], b: [ { name: 'b', age: 2 }, { name: 'b', age: 4 } ] }

const nestedDate = [
  { name: "a", age: 25, address: { city: "NY", country: "USA" } },
  { name: "b", age: 25, address: { city: "LA", country: "USA" } },
  { name: "a", age: 25, address: { city: "NY", country: "USA" } },
  { name: "b", age: 25, address: { city: "LA", country: "USA" } },
];

const nestedGrouped = groupBy(nestedDate, (item) => item.address.city); // you can use a function to group by

console.log(nestedGrouped); // { NY: [ { name: 'a', age: 25, address: { city: 'NY', country: 'USA' } }, { name: 'a', age: 25, address: { city: 'NY', country: 'USA' } } ], LA: [ { name: 'b', age: 25, address: { city: 'LA', country: 'USA' } }, { name: 'b', age: 25, address: { city: 'LA', country: 'USA' } } ] }
```

whats different from the original groupBy is that this one is typesafe, so you can use the keys of the object as a key to group by, and you can use a function to group by

it will help in the intelisense and in the type checking
