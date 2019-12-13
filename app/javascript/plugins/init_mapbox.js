import mapboxgl from 'mapbox-gl';

const initMapbox = () => {
  const mapElement = document.getElementById('map');
  const markers = JSON.parse(mapElement.dataset.markers);
  let epicentre = JSON.parse(mapElement.dataset.epicentre);
  markers.push(epicentre)
  console.log(markers)

if (mapElement) { 
    mapboxgl.accessToken = mapElement.dataset.mapboxApiKey;
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v10'
    });

    markers.forEach((marker) => {
      new mapboxgl.Marker()
        .setLngLat([ marker.lng, marker.lat ])
        .addTo(map);
    });

    const fitMapToMarkers = (map, markers) => {
      const bounds = new mapboxgl.LngLatBounds();
      markers.forEach(marker => bounds.extend([ marker.lng, marker.lat ]));
      map.fitBounds(bounds, { padding: 50, maxZoom: 30, duration: 10000 });
    };
    fitMapToMarkers(map, markers);
  }
};


export { initMapbox };