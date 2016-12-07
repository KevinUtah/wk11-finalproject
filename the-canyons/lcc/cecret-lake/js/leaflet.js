// document.write("hello, from the leaflet.js file"); //scroll page to find me!!!
console.log(document.title);

"use strict";
var mymap = L.map('mapid').setView([40.5917, -111.6270], 12);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    minZoom: 12,
    id: 'mapbox.outdoors',
    accessToken: 'pk.eyJ1Ijoia2V2aW51dGFoIiwiYSI6ImNpdzVsODh6dzAxNDYyb3J0bzA5eXJwNjcifQ.niV4afmX41cnYTvo4lyLhw'
}).addTo(mymap);

//add a marker
var marker = L.marker([40.5917, -111.6270]).addTo(mymap);

//add a polygon
var polygon = L.polygon([
    [40.5931, -111.6292],//1
    [40.5931, -111.6201],//2
    [40.5818, -111.6086],//3
    [40.5674, -111.6086], //4
    [40.5674, -111.6292]//5
    // [40.575517, -111.680978] example
]).addTo(mymap);

//insert a marker popup
marker.bindPopup("<b>Gate!<br>Cecret Lake Trail.</b>").openPopup();

//insert a standalone popup
// var popup = L.popup()
//     .setLatLng([40.55, -111.6875])
//     .setContent("I am a standalone popup.")
//     .openOn(mymap);

//dealing with events
function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

mymap.on('click', onMapClick);

//use a popup instead of an alert
var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " +  e.latlng.toString())
        .openOn(mymap);
}


mymap.on('click', onMapClick);
