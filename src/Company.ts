import { address, company } from 'faker';
import { Mappable } from './Map';

export class Company implements Mappable {
    name: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.name = company.companyName();
        this.catchPhrase = company.catchPhrase();
        this.location = {
            lat: parseFloat(address.latitude()),
            lng: parseFloat(address.longitude())
        };
    }

    markerContent(): string {
        return `Company Name: ${this.name}`;
    }
}