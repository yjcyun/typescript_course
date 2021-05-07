/**
 * Public: method that can be called any where any time (default)
 * Private: method that can only be called by other methods in this class
 * Protected: method that can be called by other methods in this class, or by other methods in child classes
 */

class Vehicle {
  // public drive(): void {
  //   console.log('chugga chugga');
  // }

  /** linke 13 - 16 is equivalient to line 17 */
  // color: string;
  // constructor(color: string) {
  //   this.color = color;
  // }
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  // child class can override parent methods
  // private methods cannot be called outside of its class
  // get an error in Car because you cannot modify a public method to private method
  // to resolve the error, simply remove the public method in the parent class
  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, 'red');
car.startDrivingProcess();
