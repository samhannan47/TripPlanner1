import mapboxgl from "mapbox-gl";

export const makeMarker = (type, coords) => {
  const iconMap = {
    "restaurant": "http://i.imgur.com/cqR6pUI.png",
    "hotel": "http://i.imgur.com/D9574Cu.png",
    "activity": "http://i.imgur.com/WbMOfMl.png"
  }
  const markerDomEl = document.createElement('div'); // Create a new, detached DIV
  markerDomEl.style.width = '32px';
  markerDomEl.style.height = '39px';
  markerDomEl.style.backgroundImage = `url(${iconMap[type]})`;

  return new mapboxgl.Marker(markerDomEl).setLngLat(coords)
};
