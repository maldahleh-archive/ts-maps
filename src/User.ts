import { name, address } from 'faker';
import { Mappable } from "./Map";

export class User implements Mappable {
    name: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.name = name.firstName();
        this.location = {
            lat: parseFloat(address.latitude()),
            lng: parseFloat(address.longitude())
        }
    }

    markerContent(): string {
        return `User Name: ${this.name}`;
    }
}