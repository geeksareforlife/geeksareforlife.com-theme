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

  var marker = L.marker([lat, long]).addTo(mymap);
  marker.bindPopup(popup).openPopup();

}

function showManyPoints() {
  var mymap = L.map('fullMap').setView([52.921711, -1.472167], 10);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 14,
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
    L.circleMarker([trigs[point]["lat"], trigs[point]["long"]], {radius: 2}).addTo(mymap).bindPopup(popup);
  }
}
