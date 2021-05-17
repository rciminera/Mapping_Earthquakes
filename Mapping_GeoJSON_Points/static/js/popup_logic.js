// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with center and zoom level. Geographical center of the earth
let map = L.map('map').setView([30, 30], 2);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    // id: 'mapbox/navigation-preview-night-v2',
    // tileSize: 512,
    // zoomOffset: -1,
    accessToken: API_KEY
})
// Then we add our 'streets' tile layer to the map.
streets.addTo(map);

// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/rciminera/Mapping_Earthquakes/main/majorAirports.json";

// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
    console.log(data);
    // Creating a GeoJSON layer with the retrieved data.  
// L.geoJson(data).addTo(map);
    // Creating a GeoJSON layer with the retrieved data.  
L.geoJson(data, {
  // We turn each feature into a marker on the map.
  onEachFeature: function(feature, layer) {
    console.log(layer);
    layer.bindPopup("<H3>" + "Airport code: " + feature.properties.faa + "</br>" + 
      "<hr style=height:2px;border-width:0;color:gray;background-color:gray>" + "Airport name: " 
      + feature.properties.name + "</hr>" + "<H3>");
    }
  })
.addTo(map);
});