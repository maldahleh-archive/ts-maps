import { address, company } from 'faker';

export class Company {
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
}