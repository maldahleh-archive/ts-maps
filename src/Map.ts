interface Mappable {
    location: {
        lat: number,
        lng: number
    }
}

export class Map {
    private readonly googleMap: google.maps.Map;

    constructor(divId: string, markers?: Mappable[]) {
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            center: {
                lat: 0,
                lng: 0
            },
            zoom: 1
        });

        this.addMarkers(markers || []);
    }

    addMarker(mappable: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        });

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: 'test'
            });

            infoWindow.open(this.googleMap, marker)
        });
    }

    addMarkers(mappables: Mappable[]): void {
        for (const mappable of mappables) {
            this.addMarker(mappable);
        }
    }
}