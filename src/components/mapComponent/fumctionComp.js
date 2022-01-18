import React, { useEffect, useState } from "react";
import Map from "ol/Map";
import View from "ol/View";
import Tile from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import "ol/ol.css"
import './style.css'
function MapComponent() {
  const [map, setMap] = useState();
  //useEffect to intialize map instance
  useEffect(() => {
    let view = new View({
      center: [0, 0],
      zoom: 2,
    });
    let osmLayer = new Tile({
      source: new OSM(),
    });
    let mapInstance = new Map({
      view: view,
      layers: [osmLayer],
      target: "map",
    });
    setMap(mapInstance);
    return () => {
      setMap(null);
    };
  }, []);
  return <div id="map"></div>;
}

export default MapComponent;
