/**
 * is similar to arrays but order is important!
 */

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// Type alias
type Drink = [string, boolean, number];

// order is important so must be annotated
const pepsi: [string, boolean, number] = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

// error
pepsi[0] = 40;

// tuples - not very meaningful
const carSpecs: [number, number] = [400, 3354];

// object - key-value makes it meaningful
const carStats = {
  horsepower: 400,
  weight: 3354,
};
