// Add console.log to check to see if our code is working.
console.log("working");
// Create the map object with a center and zoom level.
let map = L.map('map').setView([37.6213, -122.3790], 5);

// Coordinates for each point to be used in the polyline.
let line = [
  [33.9416, -118.4085],  // SFO
  [30.1900, -97.6687],  // AUS Austin
  [43.595310, -79.640579],  // YYZ Toronto
  [40.6398262, -73.7787443]   // JFK
];


// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  color: "blue",
  opacity: ".5",
  weight:  "4",
  dashArray: "2,7,2,7"
}).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
})


// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// // Get data from cities.js
// let cityData = cities;

// // Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//   console.log(city)
//   L.circleMarker(city.location, {
//     radius:city.population/100000
//   })
//   .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
// .addTo(map);
// });