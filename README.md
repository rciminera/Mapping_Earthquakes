# Mapping_Earthquakes
by Bob Ciminera

### Overview

A global map of earthquake data for the past 7 days was created using information from the US Geological Survey to portray the size and magnitude of these events by location and along the Earth's tectonic plates.

### Results

3 major deliverables were created for this analysis.  

(This is the link to the javascript code)[https://github.com/rciminera/Mapping_Earthquakes/blob/main/Earthquake_Challenge/static/js/challenge_logic.js]

#### I. Past 7 Day Global Earthquake Map

Using JavaScript, Leaflet.js, and geoJSON data, a global map of earthquake data by location and magnitude was created.  Lines showing the tectonic plates were added.

The map opens with a dropdown menu which defaults to Earthquake Data, Major Earthquake Data, and Tectonic Plate lines.  The user can deselect any of these to isolate a view according to their need.

#### II. Create Major Earthquake Selection

A new category named "Major Earthquakes" was added to the map to show events with a magnitude greater than 4.5. 

Using JavaScript, Leaflet.js, and geoJSON data, this major earthquake data was added to the map using d3.json(). In addition, the color and radius of each circle is based on the magnitude of earthquake. Finally, a popup marker was added for each earthquake to display its magnitude and location using the GeoJSON layer, geoJSON().


#### III.  A New Background Style added to the Map

Using JavaScript, Mapbox, and Leaflet.js add a third "Dark" map style was added to the map.  The user has a choice among 3 background views in a dropdown box:  "Street", "Satellite", and "Dark".

<img src="https://github.com/rciminera/Mapping_Earthquakes/blob/main/Earthquake_Map.png" width = "800" >
