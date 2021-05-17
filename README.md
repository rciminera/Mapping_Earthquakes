# Mapping_Earthquakes
by Bob Ciminera

### Overview

A global map of earthquake data for the past 7 days was created using information from the US Geological Survey to portray the size and magnitude of these events by location and along the Earth's tectonic plates.

### Results

3 major deliverables were created for this analysis.

#### I. Past 7 Day Global Earthquake Map

Using JavaScript, Leaflet.js, and geoJSON data, a global map of earthquake data by location and magnitude was created.  In addition, to show the earthquake activity along tectonic plate lines, this data was also added using d3.json and then formatted and labeled for clear visibility on the map.

The map opens with a dropdown menu which defaults to Earthquake Data, Major Earthquake Data, and Tectonic Plate lines.  The user can deselect any of these to isolate a view according to their need.

#### II. Create Major Earthquake Selection

A new category named "Major Earthquakes" was added to the map for those events with a magnitude greater than 4.5. 

Using JavaScript, Leaflet.js, and geoJSON data, this major earthquake data was added to the map using d3.json(). In addition, colors and radii of a circle were based on the magnitude of earthquake. Finally, a popup marker was added for each earthquake to display the magnitude and location of the earthquake using the GeoJSON layer, geoJSON().


#### III.  A New Background Style added to the Map

Using JavaScript, Mapbox, and Leaflet.js add a third "Dark" map style was added to the map.  The user has a choice among 3 background views in a dropdown box:  "Street", "Satellite", and "Dark".

<img src="https://github.com/rciminera/Mapping_Earthquakes/blob/main/Earthquake_Map.png" width = "400" >