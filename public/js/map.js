let coords = [
    coordinates[1],
    coordinates[0],
]

const map = L.map('map').setView(coords, 9);
L.tileLayer( MAP_URL, {
    tileSize: 512,
    zoomOffset: -1,
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
}).addTo(map);

const greenIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const marker = L.marker(coords, { icon: greenIcon} ).addTo(map).bindPopup(`<h4>${title}</h4><p>Book for more details</p>`).openPopup();

// L.circleMarker(coords, {
//   radius: 8,
//   fillColor: "#f03",
//   color: "#000",
//   weight: 1,
//   opacity: 1,
//   fillOpacity: 0.8
// }).addTo(map);