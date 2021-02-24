import * as React from "react";

import Map from "./map";
import StyleSelector from "./style-selector";

type StyleOptions = Record<string, string>;

const styleOptions: StyleOptions = {
  Streets: "mapbox://styles/mapbox/streets-v11",
  Outdoors: "mapbox://styles/mapbox/outdoors-v11",
  Light: "mapbox://styles/mapbox/light-v10",
  Dark: "mapbox://styles/mapbox/dark-v10",
  Satellite: "mapbox://styles/mapbox/satellite-v9",
  "Satellite Streets": "mapbox://styles/mapbox/satellite-streets-v11",
};

const App: React.FC = () => {
  const [style, setStyle] = React.useState("Streets");

  const handleChangeStyle = (styleKey: string) => {
    setStyle(styleKey);
  };

  return (
    <>
      <StyleSelector options={styleOptions} onChange={handleChangeStyle} />
      <Map styleUrl={styleOptions[style]} />
    </>
  );
};

export default App;
