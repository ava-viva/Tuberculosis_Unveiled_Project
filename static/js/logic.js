// Creating the map object
let myMap = L.map("map", {
  center: [0, 0],
  zoom: 3
});

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);


// An array containing each city's name,lat, long and risk factors

let Capitals=[{"Country":"Albania","air_pollution":18.2,"co2_emissions":2.0,"lat":41.19,"lon":19.49,"safe_water":70.0,"sanitation_service":39.9},{"Country":"Andorra","air_pollution":10.3,"co2_emissions":5.8,"lat":42.3,"lon":1.31,"safe_water":90.6,"sanitation_service":100.0},{"Country":"Armenia","air_pollution":32.2,"co2_emissions":1.9,"lat":40.1,"lon":44.3,"safe_water":86.5,"sanitation_service":48.2},{"Country":"Austria","air_pollution":12.6,"co2_emissions":6.9,"lat":48.12,"lon":16.22,"safe_water":98.9,"sanitation_service":96.7},{"Country":"Bahrain","air_pollution":69.9,"co2_emissions":23.5,"lat":26.14,"lon":50.34,"safe_water":99.0,"sanitation_service":96.0},{"Country":"Belarus","air_pollution":18.9,"co2_emissions":6.7,"lat":53.54,"lon":27.34,"safe_water":94.5,"sanitation_service":80.5},{"Country":"Belgium","air_pollution":12.8,"co2_emissions":8.3,"lat":50.5,"lon":4.2,"safe_water":99.5,"sanitation_service":97.1},{"Country":"Bosnia and Herzegovina","air_pollution":27.6,"co2_emissions":6.4,"lat":43.52,"lon":18.25,"safe_water":88.8,"sanitation_service":21.6},{"Country":"Bulgaria","air_pollution":19.3,"co2_emissions":5.9,"lat":42.41,"lon":23.19,"safe_water":96.9,"sanitation_service":64.4},{"Country":"Canada","air_pollution":6.5,"co2_emissions":15.2,"lat":45.25,"lon":-75.42,"safe_water":98.9,"sanitation_service":82.3},{"Country":"Chile","air_pollution":20.9,"co2_emissions":4.6,"lat":-33.27,"lon":-70.4,"safe_water":98.6,"sanitation_service":77.5},{"Country":"Colombia","air_pollution":16.6,"co2_emissions":1.8,"lat":4.36,"lon":-74.05,"safe_water":73.2,"sanitation_service":17.0},{"Country":"Croatia","air_pollution":17.8,"co2_emissions":4.0,"lat":45.48,"lon":16.0,"safe_water":90.0,"sanitation_service":58.5},{"Country":"Cyprus","air_pollution":17.0,"co2_emissions":5.3,"lat":35.1,"lon":33.22,"safe_water":99.6,"sanitation_service":75.5},{"Country":"Czech Republic","air_pollution":16.1,"co2_emissions":9.2,"lat":50.05,"lon":14.28,"safe_water":97.9,"sanitation_service":94.5},{"Country":"Denmark","air_pollution":10.1,"co2_emissions":5.9,"lat":55.4,"lon":12.35,"safe_water":96.7,"sanitation_service":94.8},{"Country":"Ecuador","air_pollution":15.0,"co2_emissions":2.8,"lat":-0.13,"lon":-78.3,"safe_water":75.1,"sanitation_service":42.0},{"Country":"Estonia","air_pollution":6.8,"co2_emissions":14.8,"lat":59.26,"lon":24.43,"safe_water":93.3,"sanitation_service":97.4},{"Country":"Finland","air_pollution":5.9,"co2_emissions":8.7,"lat":60.1,"lon":24.56,"safe_water":99.6,"sanitation_service":99.2},{"Country":"France","air_pollution":11.9,"co2_emissions":4.6,"lat":48.52,"lon":2.2,"safe_water":97.9,"sanitation_service":88.4},{"Country":"Georgia","air_pollution":21.8,"co2_emissions":2.4,"lat":41.43,"lon":44.47,"safe_water":80.0,"sanitation_service":27.2},{"Country":"Germany","air_pollution":11.9,"co2_emissions":8.9,"lat":52.31,"lon":13.24,"safe_water":99.8,"sanitation_service":97.2},{"Country":"Greece","air_pollution":16.3,"co2_emissions":6.2,"lat":37.59,"lon":23.44,"safe_water":100.0,"sanitation_service":90.4},{"Country":"Greenland","air_pollution":11.6,"co2_emissions":9.0,"lat":64.11,"lon":-51.45,"safe_water":96.7,"sanitation_service":94.8},{"Country":"Hungary","air_pollution":15.9,"co2_emissions":4.3,"lat":47.3,"lon":19.05,"safe_water":89.6,"sanitation_service":95.7},{"Country":"Iceland","air_pollution":6.6,"co2_emissions":6.1,"lat":64.09,"lon":-21.57,"safe_water":100.0,"sanitation_service":81.8},{"Country":"Iraq","air_pollution":64.0,"co2_emissions":4.9,"lat":33.2,"lon":44.23,"safe_water":58.8,"sanitation_service":41.1},{"Country":"Ireland","air_pollution":8.3,"co2_emissions":7.3,"lat":53.19,"lon":-6.14,"safe_water":97.3,"sanitation_service":82.4},{"Country":"Israel","air_pollution":20.8,"co2_emissions":7.9,"lat":31.46,"lon":35.14,"safe_water":99.4,"sanitation_service":93.7},{"Country":"Italy","air_pollution":16.5,"co2_emissions":5.3,"lat":41.54,"lon":12.29,"safe_water":95.0,"sanitation_service":96.2},{"Country":"Japan","air_pollution":11.6,"co2_emissions":9.5,"lat":35.41,"lon":139.45,"safe_water":98.5,"sanitation_service":98.8},{"Country":"Jordan","air_pollution":33.2,"co2_emissions":3.0,"lat":31.57,"lon":35.56,"safe_water":93.8,"sanitation_service":80.6},{"Country":"Korea_Rep","air_pollution":25.1,"co2_emissions":11.6,"lat":37.33,"lon":126.59,"safe_water":98.2,"sanitation_service":99.9},{"Country":"Kuwait","air_pollution":60.8,"co2_emissions":25.8,"lat":29.22,"lon":47.58,"safe_water":100.0,"sanitation_service":100.0},{"Country":"Lao PDR","air_pollution":25.8,"co2_emissions":0.3,"lat":17.58,"lon":102.36,"safe_water":16.1,"sanitation_service":58.1},{"Country":"Latvia","air_pollution":13.4,"co2_emissions":3.5,"lat":56.57,"lon":24.06,"safe_water":95.2,"sanitation_service":85.8},{"Country":"Lebanon","air_pollution":30.2,"co2_emissions":3.8,"lat":33.52,"lon":35.3,"safe_water":47.7,"sanitation_service":21.8},{"Country":"Lithuania","air_pollution":11.8,"co2_emissions":4.4,"lat":54.41,"lon":25.19,"safe_water":92.0,"sanitation_service":91.3},{"Country":"Luxembourg","air_pollution":10.3,"co2_emissions":17.4,"lat":49.36,"lon":6.07,"safe_water":99.7,"sanitation_service":96.6},{"Country":"Madagascar","air_pollution":29.6,"co2_emissions":3.6,"lat":-18.55,"lon":47.31,"safe_water":81.0,"sanitation_service":16.6},{"Country":"Maldives","air_pollution":15.8,"co2_emissions":8.1,"lat":4.1,"lon":73.3,"safe_water":93.3,"sanitation_service":88.6},{"Country":"Marshall Islands","air_pollution":13.8,"co2_emissions":5.4,"lat":7.06,"lon":171.23,"safe_water":100.0,"sanitation_service":93.0},{"Country":"Micronesia","air_pollution":20.7,"co2_emissions":4.0,"lat":6.55,"lon":158.09,"safe_water":42.9,"sanitation_service":50.4},{"Country":"Mozambique","air_pollution":32.9,"co2_emissions":1.8,"lat":-25.57,"lon":32.35,"safe_water":70.3,"sanitation_service":38.8},{"Country":"New Caledonia","air_pollution":12.0,"co2_emissions":9.9,"lat":-22.16,"lon":166.27,"safe_water":100.0,"sanitation_service":97.5},{"Country":"Nicaragua","air_pollution":6.0,"co2_emissions":7.7,"lat":12.09,"lon":-86.17,"safe_water":100.0,"sanitation_service":88.7},{"Country":"North Macedonia","air_pollution":71.4,"co2_emissions":0.5,"lat":42.0,"lon":21.26,"safe_water":20.1,"sanitation_service":26.7},{"Country":"Norway","air_pollution":7.0,"co2_emissions":9.3,"lat":59.55,"lon":10.45,"safe_water":98.3,"sanitation_service":76.3},{"Country":"Paraguay","air_pollution":11.6,"co2_emissions":0.9,"lat":-25.16,"lon":-57.4,"safe_water":63.9,"sanitation_service":58.5},{"Country":"Peru","air_pollution":25.5,"co2_emissions":2.1,"lat":-12.03,"lon":-77.03,"safe_water":50.4,"sanitation_service":42.8},{"Country":"Philippines","air_pollution":18.2,"co2_emissions":1.1,"lat":14.35,"lon":121.0,"safe_water":46.7,"sanitation_service":51.6},{"Country":"Poland","air_pollution":21.0,"co2_emissions":7.5,"lat":52.15,"lon":21.0,"safe_water":99.2,"sanitation_service":93.3},{"Country":"Portugal","air_pollution":8.1,"co2_emissions":4.3,"lat":38.43,"lon":-9.08,"safe_water":95.3,"sanitation_service":84.7},{"Country":"Qatar","air_pollution":88.2,"co2_emissions":43.9,"lat":25.17,"lon":51.32,"safe_water":96.2,"sanitation_service":96.0},{"Country":"Romania","air_pollution":14.5,"co2_emissions":3.5,"lat":44.26,"lon":26.06,"safe_water":81.9,"sanitation_service":76.5},{"Country":"Russian Federation","air_pollution":16.2,"co2_emissions":11.9,"lat":55.45,"lon":37.35,"safe_water":76.0,"sanitation_service":61.3},{"Country":"Samoa","air_pollution":11.4,"co2_emissions":1.0,"lat":-13.5,"lon":-171.44,"safe_water":58.8,"sanitation_service":48.5},{"Country":"Serbia","air_pollution":24.8,"co2_emissions":5.3,"lat":44.5,"lon":20.3,"safe_water":74.7,"sanitation_service":24.7},{"Country":"Sierra Leone","air_pollution":21.3,"co2_emissions":0.2,"lat":8.3,"lon":13.15,"safe_water":9.9,"sanitation_service":13.3},{"Country":"Singapore","air_pollution":18.8,"co2_emissions":10.3,"lat":1.17,"lon":103.51,"safe_water":100.0,"sanitation_service":100.0},{"Country":"Slovak Republic","air_pollution":17.4,"co2_emissions":5.7,"lat":48.09,"lon":17.07,"safe_water":99.8,"sanitation_service":82.5},{"Country":"Slovenia","air_pollution":15.9,"co2_emissions":6.2,"lat":46.03,"lon":14.13,"safe_water":98.1,"sanitation_service":83.0},{"Country":"Spain","air_pollution":9.7,"co2_emissions":5.0,"lat":10.39,"lon":-61.31,"safe_water":98.4,"sanitation_service":96.6},{"Country":"Sweden","air_pollution":6.1,"co2_emissions":4.5,"lat":59.2,"lon":18.03,"safe_water":99.9,"sanitation_service":93.4},{"Country":"Switzerland","air_pollution":10.3,"co2_emissions":4.3,"lat":46.57,"lon":7.26,"safe_water":95.5,"sanitation_service":99.5},{"Country":"Tunisia","air_pollution":38.5,"co2_emissions":2.6,"lat":36.48,"lon":10.11,"safe_water":92.7,"sanitation_service":78.1},{"Country":"Ukraine","air_pollution":20.6,"co2_emissions":5.0,"lat":49.0,"lon":32.0,"safe_water":92.0,"sanitation_service":68.5},{"Country":"United Kingdom","air_pollution":10.5,"co2_emissions":6.5,"lat":51.3,"lon":-0.1,"safe_water":100.0,"sanitation_service":97.8},{"Country":"United States","air_pollution":7.4,"co2_emissions":16.5,"lat":38.53,"lon":-77.02,"safe_water":99.0,"sanitation_service":90.0}]

 
// Looping through the Capitals array, create one marker for each city, bind a popup containing its name and risk factors, and add it to the map.
for (let i = 0; i < Capitals.length; i++) {
  let city = Capitals[i];
  // console.log(city.lat)

  
  L.marker([city.lat,city.lon])
    .bindPopup(`<h1>${city.Country}</h1> <hr> 
    <h3>air_pollution ${city.air_pollution}%</h3><hr> 
    <h3>co2_emissions ${city.co2_emissions}%</h3><hr>
    <h3>safe_water ${city.safe_water}%</h3><hr> 
    <h3>sanitation_service ${city.co2_emissions}%</h3>`)
    .addTo(myMap);
}


