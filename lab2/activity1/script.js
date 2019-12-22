// Activity 1

console.log("My debug message");

let debugId = 12;
console.log("Another debug message with id: " + debugId);

let person = { firstName: "John", lastName: "Doe", age: 24 };
Object.entries(person).map(([key, value]) => {
  console.log(`${key}: ${value}`);
});

let amusementRides = [
  {
    id: "T001",
    name: "Kingda Ka",
    price: 30.0,
    opening: [
      {
        sun: false,
        mon: true,
        tues: true,
        wed: true,
        thurs: true,
        fri: true,
        sat: false
      }
    ],
    limitedAccess: true
  },
  {
    id: "T002",
    name: "The Loopty Loop",
    price: 5.0,
    opening: [
      {
        sun: true,
        mon: true,
        tues: true,
        wed: true,
        thurs: true,
        fri: true,
        sat: true
      }
    ],
    limitedAccess: false
  },
  {
    id: "W001",
    name: "H-2-Oh Nooo!",
    price: 10.5,
    opening: [
      {
        sun: true,
        mon: false,
        tues: false,
        wed: false,
        thurs: false,
        fri: false,
        sat: true
      }
    ],
    limitedAccess: true
  }
];

Object.entries(amusementRides).map(([key, value]) => {
  console.log(`${key}: ${value}`);
});

// Activity 2
let amusementRidesDouble = doublePrices(amusementRides);

function doublePrices(amusementRides) {
  Object.entries(amusementRides).map(() => {});
}

console.log(amusementRidesDouble);
