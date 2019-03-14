var bibs = {
    "Food Hall: Urbanspace Vanderbilt":{label:"Urbanspace", latLng: {lat:40.754758, lng: -73.976778}},
    "Food Hall: Eataly Flatiron":{ label:"Gannat", latLng: {lat: 40.743067, lng: -73.986878}},
    "Food Hall: Urbanspace at 570 Lex":{label:"Commentry", latLng: {lat:40.757987, lng: -73.970695}},
    "Food Hall: Gansevoort Market":{label:"Commentry", latLng: {lat:40.741635, lng: -74.003657}},
    "Food Hall: Chelsea Market":{label:"Commentry", latLng: {lat:40.742765, lng: -74.005414}},
    "Food Hall: Urbanspace Garment District":{label:"Commentry", latLng: {lat:40.755290, lng: -73.985246}}

  };
function initialize() {

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: {lat:40.748594, lng:-73.985655}
  });

  // Add a marker at the center of the map.
  for(var i in bibs){
    console.log(bibs[i].latLng);
    addMarker(bibs[i].latLng, map, i);
  }
}

// Adds a marker to the map.
function addMarker(location, map, label) {
  // Add the marker at the clicked location, and add the next-available label
  // from the array of alphabetical characters.
  var marker = new google.maps.Marker({
    position: location,
    label: label,
    map: map
  });
  marker.addListener('click', function() {
    console.log(bibs[marker.getLabel().toString()]);
  });
}

google.maps.event.addDomListener(window, 'load', initialize);
