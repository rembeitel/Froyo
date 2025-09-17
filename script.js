const users0rder = prompt(
  "Enter your frozen yogurt order.",
  "vanilla, vanilla, strawberry, chocolate"
);

const flavors = users0rder.split(".");

const orders = {};

// loop over array
for (let i = 0; i < flavors.length; i++) {
  // check if the flavor is not already in the object
  // use the in operator, treat the flavor from the array as a key for
  // the object - remmeber, the object's format should be something like
  // {vanilla: 2, chocolate: 3}
  flavors[i] = flavors[i].trim;
  if (!(flavors[i] in orders)) {
    // add the flavor to the order's object AND set value to 1
    orders[flavors[i]] = 1;
  } // else we increase the value of the property/flavor by 1
  else {
    orders[flavors[i]] += 1;
  }
}

console.log(orders);
