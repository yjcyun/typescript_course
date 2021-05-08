import faker from 'faker';
import { Mappable } from './CustomMap';

// "implements": Helps us make sure that User has all the properties specified by Mappable. helps us point to the true source of error
export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `User name: ${this.name}`;
  }
}
