"use strict";

const app = {
    map: null, // gebruik dit om de map gemakkelijk aan te spreken doorheen de applicatie
    init() {
        // initialise de kaart
        this.map = L.map('map').setView([50.852061, 4.349322], 10);

        // voeg een tile layer toe, met URL https://a.tile.openstreetmap.org/{z}/{x}/{y}.png
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);
        // vergeet openstreetmap attributie niet
        
        // gebruik de functie "loadMarkers" om de markers toe te voegen
        this.loadMarkers();
    },
    loadMarkers() {
         this.marker = L.marker([50.852061, 4.349322]).addTo(this.map);
        fetch(
            'https://opendata.brussels.be/api/records/1.0/search/?dataset=toiletten&q=&rows=100&geofilter.distance=50.846475%2C+4.352793%2C+5000')
        .then((Response) => Response.json())

        .then((data)=> {
            console.log(data);
            for(let i = 0 ; i<80; i++){
            let lat = data.records[i].fields.wgs84_lat;
            let long = data.records[i].fields.wgs84_long;
            this.marker = L.marker([lat, long]).addTo(this.map).bindPopup('<b>Hello world!</b><br />I am a popup.').openPopup();
            ;}
            

        })

        // fetch de data van opendata.brussels.be
            // als er coordinaten beschikbaar zijn, kan je de addMarker functie gebruiken om een marker toe te voegen op de kaart
    
        
    },
    addMarker(lat, lon) {
        // voeg een marker toe op lat, lon
    }
}

app.init();
