const person = {
  name: "Name",
  age: 0,
};

function printInfo() {
  console.log(`Name: ${this.name}, Age: ${this.age}`);
}

printInfo.call(person);
