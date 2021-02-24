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
      geometry: {
        type: "LineString",
        coordinates: [
          [139.63262021541595, 35.46877913664433],
          [139.6302491426468, 35.46803204224971],
          [139.62853252887726, 35.46756892761993],
          [139.62835013866425, 35.467481547202034],
          [139.62736308574677, 35.46724998863547],
          [139.6271699666977, 35.46724998863547],
          [139.62681591510773, 35.467416011826316],
          [139.62556064128876, 35.468128160046234],
          [139.6273308992386, 35.47009418067695],
          [139.6269017457962, 35.470705821736956],
          [139.62637603282928, 35.47102474701575],
          [139.62889730930328, 35.47384259348869],
          [139.62717935442924, 35.47473379879427],
        ],
      },
    },
  ],
};

const layerStyle: LayerProps = {
  id: "path",
  type: "line",
  layout: {
    "line-cap": "round",
    "line-join": "round",
  },
  paint: {
    "line-width": 8,
    "line-color": "#C62D14",
    "line-dasharray": [3, 2],
  },
};

const Map: React.FC<Props> = ({ styleUrl }) => {
  const [viewport, setViewport] = React.useState(INITIAL_VIEWPORT);

  return (
    <ReactMapGL
      {...viewport}
      width="100vw"
      height="100vh"
      mapStyle={styleUrl}
      onViewportChange={setViewport}
    >
      <Source id="points" type="geojson" data={geoJson}>
        <Layer {...layerStyle} />
      </Source>
    </ReactMapGL>
  );
};

export default Map;
