import * as React from "react";
import ReactMapGL, {
  Source,
  Layer,
  ViewportProps,
  LayerProps,
} from "react-map-gl";
import * as GeoJSON from "geojson";

interface Props {
  styleUrl: string;
}

const INITIAL_VIEWPORT: ViewportProps = {
  longitude: 139.6269549,
  latitude: 35.4745755,
  zoom: 16,
};

const geoJson: GeoJSON.FeatureCollection<GeoJSON.Geometry> = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {},
      geometry: { type: "Point", coordinates: [139.6269549, 35.4745755] },
    },
  ],
};

const layerStyle: LayerProps = {
  id: "point",
  type: "circle",
  paint: {
    "circle-radius": 10,
    "circle-color": "#007cbf",
  },
};

const Map: React.FC<Props> = ({ styleUrl }) => {
  const [viewport, setViewport] = React.useState(INITIAL_VIEWPORT);

  const handleViewportChange = (viewport: ViewportProps) => {
    setViewport(viewport);
  };

  return (
    <ReactMapGL
      {...viewport}
      width="100vw"
      height="100vh"
      mapStyle={styleUrl}
      onViewportChange={handleViewportChange}
    >
      <Source id="points" type="geojson" data={geoJson}>
        <Layer {...layerStyle} />
      </Source>
    </ReactMapGL>
  );
};

export default Map;
