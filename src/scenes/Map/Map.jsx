import React from "react";
// import "ol/ol.css";
import { useEffect } from "react";
import "./mapCSS.css";
import GeoJSON from "ol/format/GeoJSON";
import Map from "ol/Map";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import View from "ol/View";
import Link from "ol/interaction/Link";
import Select from "ol/interaction/Select";
// import { toLonLat } from "ol/proj.js";
import { toStringHDMS } from "ol/coordinate.js";
import Overlay from "ol/Overlay.js";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat, toLonLat } from "ol/proj.js";
import { useRef } from "react";
import { Popover } from "@mui/material";

const container = document.getElementById("popup-container");
const content = document.getElementById("popup-content");

function showPopup() {
  const container = document.getElementById("map-container");
  container.style.display = "block";
}

const overlay = new Overlay({
  element: container,
  autoPan: {
    animation: {
      duration: 250,
    },
  },
  content: "<p>The location you clicked was:</p>",
  html: true,
  placement: "top",
  title: "Welcome to OpenLayers",
});

export const OpenLayers = () => {
  const contentRef = useRef(null);
  useEffect(() => {
    const map = new Map({
      target: "map-container",
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        new VectorLayer({
          // background: 'white',
          source: new VectorSource({
            format: new GeoJSON(),
            url: "http://localhost:8080/geoserver/rms/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=rms%3Abuildings&outputFormat=application%2Fjson",
          }),
        }),
        new VectorLayer({
          source: new VectorSource({
            format: new GeoJSON(),
            url: "http://localhost:8080/geoserver/rms/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=rms%3Abusinesses&outputFormat=application%2Fjson",
          }),
        }),
      ],
      overlays: [overlay],

      view: new View({
        center: [0, 0],
        zoom: 1,
      }),
    });

    let selected = new Select();
    map.addInteraction(new Link());
    map.addInteraction(selected);

    map.on("click", function (evt) {
      console.log("Cordination is taking place here ");
      const coordinate = evt.coordinate;
      console.log("Coordinates", coordinate);
      const lonLat = fromLonLat(coordinate);
      console.log("longlat", lonLat);
      const [lon, lat] = lonLat;
      evt.preventDefault();
      let cont = document.getElementById("popup-container");
      cont.innerHTML = `<div>
                        user_id:
                        Business
                     ${coordinate}
                      ${lonLat}

                 
                 </div> `;
      overlay.setPositioning(evt.coordinate);
    });

    // Close the popup when the user clicks outside of it
    map.on("pointermove", function (e) {
      if (!map.hasFeatureAtPixel(e.pixel)) {
        // container.style.display = "none";
      }
    });
  }, []);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div id="map-container" className="ol-popup"></div>
      <div id="popup-container" className="ol-popup">
        <div id="popup-content"></div>
      </div>
    </div>
  );
};
