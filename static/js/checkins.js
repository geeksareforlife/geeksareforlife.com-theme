ready(function() {
  if (typeof lat != "undefined") {
    showSinglePoint();
  } else if (typeof trigs != "undefined") {
    showManyPoints();
  }
});

function showSinglePoint() {
  var mymap = L.map('fullMap').setView([lat, long], 16);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(mymap);

  var gr4lIcon = L.icon({
    iconUrl: '/images/map-pin.png',
    shadowUrl: '/images/map-pin-shadow.png',

    iconSize:     [25, 45], // size of the icon
    shadowSize:   [46, 37], // size of the shadow
    iconAnchor:   [12, 45], // point of the icon which will correspond to marker's location
    shadowAnchor: [12, 33],  // the same for the shadow
    popupAnchor:  [1, -35] // point from which the popup should open relative to the iconAnchor
  });

  var marker = L.marker([lat, long], {icon: gr4lIcon}).addTo(mymap);
  marker.bindPopup(popup).openPopup();

}

function showManyPoints() {
  var mymap = L.map('fullMap').setView([52.921711, -1.472167], 10);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(mymap);

  var popup = "";
  for (point in trigs) {
    popup = '<h4>' + trigs[point]["name"] + ' (' + trigs[point]["point"] + ')</h4>';
    popup += '<p><a href="' + trigs[point]["listUrl"] + '">Visited ' + trigs[point]["visited"] + " time";
    if (trigs[point]["visited"] > 1) {
      popup += 's'; 
    }
    popup += "</a><br>Last Visited: " + trigs[point]["last"] + "</p>";
    L.circleMarker([trigs[point]["lat"], trigs[point]["long"]], 
      {
        radius: 10,
        color: "#9b2c2c"
      }).addTo(mymap).bindPopup(popup);
  }
}
