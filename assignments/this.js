/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*\
* 1. The first principle of the this keyword refers to when this refences the window or global object.
* 2. When a function is invoked, look to the left of the dot to the object and that is what the `this` keyword will reference.
* 3. The `this` keyword is bound to the object being created by the when the new keyword is used from a class constructor.
* 4. The `this` keyword is explicitly applied whenever you invoke the call, apply, or bind methods. In the example below,
the this keyword within the function house is set to the context defined within the houseAttrs object. 
*

/* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function example() {
  console.log(this);
  // the 'this' keyword will be set to the window object
  console.log("Hello!");
}
// example();

// Principle 2

// code example for Implicit Binding
const exampleObject = {
  some: "thing",
  word: function() {
    console.log(this);
    // this refers to the object which invoked the method, in this case example object
    console.log(`${this.some}`);
  }
}

// console.log(exampleObject.word());

// Principle 3
function Lizard(attributes) {
  this.species = attributes.species;
  this.color = attributes.color;
  this.size = attributes.size;
}

const anole = new Lizard({
  species: 'green anole',
  color: 'green',
  size: 'small',
  moves: function() {
    console.log(this);
    console.log('Moves fast');
  }
});
// this refers to the specific object that is created by the constructor function, in this case anole

// console.log(anole.moves());


// code example for New Binding

// Principle 4
const house = function() {
  console.log(`My house is ${this.color} with ${this.bedrooms} bedrooms`);
}

const houseAttrs = {
  color: 'blue',
  bedrooms: 3
};

// console.log(house.call(houseAttrs));

// code example for Explicit Binding