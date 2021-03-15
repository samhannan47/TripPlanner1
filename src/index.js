import mapboxgl from "mapbox-gl";
import {makeMarker} from "./marker";

mapboxgl.accessToken = "pk.eyJ1IjoiY2hyaXNnbSIsImEiOiJja2s3YzYwNngwY2pkMm9wMnFybHczNGh3In0.W1kSj0FV8ZufASFsg1v1LQ";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

map.resize();

let marker = makeMarker("hotel", [-74.009, 40.705]);
marker.addTo(map);

marker = makeMarker("restaurant", [-74.309, 41.005]);
marker.addTo(map);

marker = makeMarker("activity", [-73.8, 40.205]);
marker.addTo(map);
