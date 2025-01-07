// Q1: Car Class
class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  getDetails() {
    return `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`;
  }
}

const car1 = new Car("Toyota", "Camry", 2020);
const car2 = new Car("Ford", "Focus", 2021);
const car3 = new Car("Mazda", "CX-5", 2022);

const cars = [car1, car2, car3];
for (const car of cars) {
  console.log(car.getDetails());
}

// Q2: Get First Names with for...of
const persons = [
  { firstName: "John", lastName: "Doe" },
  { firstName: "Alex", lastName: "Smith" },
  { firstName: "Alice", lastName: "Johnson" },
  { firstName: "Thor", lastName: "Odinson" },
  { firstName: "Soso", lastName: "Momo" },
];

function firstName(persons) {
  const names = [];
  for (const person of persons) {
    names.push(person.firstName);
  }
  return names;
}

console.log(firstName(persons));

// Q3: Convert Object to Array with Object.keys() and Object.values()
function objectToArray(obj) {
  return [...Object.keys(obj), ...Object.values(obj)];
}

const exampleObject = { firstName: "Moh", age: 24 };
console.log(objectToArray(exampleObject));
