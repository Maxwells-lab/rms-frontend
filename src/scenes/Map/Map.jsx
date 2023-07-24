import React, { useEffect, useRef } from "react";
// import "ol/ol.css";
import "./mapCSS.css";
import GeoJSON from "ol/format/GeoJSON";
import Map from "ol/Map";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import View from "ol/View";
import Link from "ol/interaction/Link";
import Select from "ol/interaction/Select";

export const OpenLayers = () => {
  useEffect(() => {
    const map = new Map({
      target: "map-container",
      layers: [
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
      view: new View({
        center: [0, 0],
        zoom: 1,
      }),
    });

    let selected = new Select();

    selected.on("select", async (item) => {
      let feature = item.selected.at(0);
      console.log(feature);

      let [table, feature_id] = feature.id_.split(`.`);

      if (table === "buildings") {
        const BACKEND_ROOT_URL = "http://127.0.0.1:8000";
        const response = await fetch(
          `${BACKEND_ROOT_URL}/buildings/${feature_id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          const result = await response.json();
          console.log(result);
        }
        const businesses = await fetch(
          `${BACKEND_ROOT_URL}/buildings/${feature_id}/businesses`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (businesses.ok) {
          console.log(await businesses.json());
        }
      } else if (table === `businesses`) {
        // let business_data = $("#businesses-data")
        const businesses = await fetch(
          `http://127.0.0.1:8000/businesses/${feature_id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (businesses.ok) {
          console.log(await businesses.json());
        }
      }
    });

    map.addInteraction(new Link());
    map.addInteraction(selected);
  }, []);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div id="map-container"></div>
    </div>
  );
};
