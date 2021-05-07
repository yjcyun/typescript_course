// name should be generic and capitalized
// can be any type including functions
interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string; // function that return string
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.summary());
};

printVehicle(oldCivic);

// Refactor ============================================

interface Reportable {
  summary(): string; // function that return string
}

const oldCivic1 = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

// both are Reportable type

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic1);
printSummary(drink);
