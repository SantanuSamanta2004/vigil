// Initialize the map
const map = L.map('map').setView([37.7749, -122.4194], 13); // Set initial view to San Francisco

// Add a tile layer (base map)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Sample crime data (latitude, longitude, intensity)
const crimeData = [
  [37.7749, -122.4194, 0.6], // San Francisco
  [37.7849, -122.4294, 0.8], // Nearby location
  [37.7649, -122.4094, 0.4], // Another nearby location
  // Add more data points as needed
];

// Create a heatmap layer
const heatmapLayer = L.heatLayer(crimeData, {
  radius: 25,       // Adjust the radius of each heat point
  blur: 15,         // Adjust the blur of each heat point
  maxZoom: 17,      // Maximum zoom level for the heatmap
  gradient: {       // Custom gradient colors
    0.4: 'blue',
    0.6: 'lime',
    0.8: 'yellow',
    1.0: 'red'
  }
}).addTo(map);

// Optional: Add markers for specific crime locations
crimeData.forEach((crime) => {
  L.marker([crime[0], crime[1]]).addTo(map)
    .bindPopup(`Crime intensity: ${crime[2]}`); // Popup with crime intensity
});