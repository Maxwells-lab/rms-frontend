import React, { useEffect, useRef } from "react";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import XYZ from "ol/source/XYZ";
import "./mapCSS.css";
import OSM from "ol/source/OSM";
import "./mapCSS.css";
import { FullScreen, defaults as defaultControls } from "ol/control.js";
import Control from "ol/control/Control.js";
import { ScaleLine } from "ol/control.js";

export const OpenLayers = ({ children, zoom, center }) => {
  const mapId = useRef();
  // const key = "WdAwZy7YvC6fD4tgO9G2";
  const attributions =
    '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> ' +
    '<a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>';

useEffect(()=>{
  const fetchData = () => {
    const url =""
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "YOUR_ENDPOINT_URL");
    xhr.onload = () => {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        // Process the fetched data as needed
        console.log(data);
      }
    };
    xhr.send();
  }
},[])


  useEffect(() => {
    let map = new Map({
      controls: defaultControls().extend([new FullScreen()]),
      layers: [
        new TileLayer({
          source: new XYZ({
            attributions: attributions,
            url: "https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            // url:"https://api.maptiler.com/tiles/satellite/{z}/{x}/{y}.jpg?key=" +key,
            // url: "https://api.maptiler.com/maps/openstreetmap/?key=WdAwZy7YvC6fD4tgO9G2#0.7/22.80535/2.86559" +key,
            zoom: 12,
          }),
          zIndex: 999,
        }),
      ],
      view: new View({
        center: [0, 0],
        zoom: 2,
        zIndex: 999,
      }),
    });

    map.setTarget(mapId.current);
    map.addControl(new ScaleLine({ units: "us" }));
    return () => {
      map.setTarget(undefined);
     
    };
  }, []);

  return (
    <div ref={mapId} className="map" id="map">
      {children}
    </div>
  );
}









