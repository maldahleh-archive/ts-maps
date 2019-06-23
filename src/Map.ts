interface Mappable {
    location: {
        lat: number,
        lng: number
    }
}

export class Map {
    private readonly googleMaps: google.maps.Map;

    constructor(divId: string, markers?: Mappable[]) {
        this.googleMaps = new google.maps.Map(document.getElementById(divId), {
            center: {
                lat: 0,
                lng: 0
            },
            zoom: 1
        });

        this.addMarkers(markers || []);
    }

    addMarker(mappable: Mappable): void {
        new google.maps.Marker({
            map: this.googleMaps,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        });
    }

    addMarkers(mappables: Mappable[]): void {
        for (const mappable of mappables) {
            this.addMarker(mappable);
        }
    }
}