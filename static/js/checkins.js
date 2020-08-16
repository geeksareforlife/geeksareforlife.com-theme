ready(function() {
  if (typeof lat != "undefined") {
    showSinglePoint();
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
