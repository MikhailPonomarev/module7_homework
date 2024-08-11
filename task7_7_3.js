const users = [
  { name: "First", age: 15 },
  { name: "Second", age: 18 },
  { name: "Third", age: 22 },
];

const adult = users.filter((user) => user.age >= 18);
console.log(adult);

const names = users.map((user) => user.name);
console.log(names);
