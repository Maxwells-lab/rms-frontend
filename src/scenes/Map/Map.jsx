import React, { useEffect, useRef } from "react";
// import "ol/ol.css";
import "./mapCSS.css";
import GeoJSON from 'ol/format/GeoJSON';
import Map from 'ol/Map';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import View from 'ol/View';
import Link from 'ol/interaction/Link';
import Select from "ol/interaction/Select";

export const OpenLayers = () => {
  useEffect(() => {
    console.log(`ger`)
    const map = new Map({

      target: 'map-container',
      layers: [
        new VectorLayer({
          // background: 'white',
          source: new VectorSource({
            format: new GeoJSON(),
            url: 'http://localhost:8080/geoserver/rms/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=rms%3Abuildings&outputFormat=application%2Fjson',
          }),
        }),
        new VectorLayer({
          source: new VectorSource({
            format: new GeoJSON(),
            url: 'http://localhost:8080/geoserver/rms/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=rms%3Abusinesses&outputFormat=application%2Fjson',
          }),
        }),
      ],
      view: new View({
        center: [0, 0],
        zoom: 1,
      }),
    });

    let selected = new  Select();

    map.addInteraction(new Link());
    map.addInteraction(selected);
    console.log(`no`)
  }, []);

  return (
      <div style={{width: "100%", height: "100%"}}>
        <div id="map-container">
        </div>
      </div>
  );
}









