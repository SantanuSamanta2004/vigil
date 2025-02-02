function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: { lat: 37.7749, lng: -122.4194 }, // Default to San Francisco
    });
  
    // Fetch crime data from the backend
    fetch('/api/reports/heatmap')
      .then(response => response.json())
      .then(data => {
        const heatmapData = data.map(report => ({
          location: new google.maps.LatLng(report.location.lat, report.location.lng),
          weight: 1,
        }));
  
        new google.maps.visualization.HeatmapLayer({
          data: heatmapData,
          map: map,
        });
      })
      .catch(err => console.error('Error fetching heatmap data:', err));
  }