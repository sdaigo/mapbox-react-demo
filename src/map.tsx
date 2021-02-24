import * as React from "react";
import Mapbox from "mapbox-gl";

interface Props {
  styleUrl: string;
}

Mapbox.accessToken =
  "pk.eyJ1IjoiZGFpZ28zIiwiYSI6ImNrOHRpbnE5azAwb3czZW8za3d2aXkwYTcifQ.mgnG69sg5mZrpok19dLiWg";

const Map: React.FC<Props> = ({ styleUrl }) => {
  const [map, setMap] = React.useState<Mapbox.Map | null>(null);
  const mapContainer = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    map?.setStyle(styleUrl);
  }, [map, styleUrl]);

  React.useEffect(() => {
    if (!mapContainer.current) {
      return;
    }

    setMap(
      new Mapbox.Map({
        container: mapContainer.current,
        style: styleUrl,
        center: [139.6269549, 35.4745755],
        zoom: 16,
      })
    );
  }, []);

  return <div className="map-container" ref={mapContainer} />;
};

export default Map;
