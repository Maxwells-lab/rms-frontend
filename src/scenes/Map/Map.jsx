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
import TileLayer from "ol/layer/Tile";
import {OSM} from "ol/source";
import {Overlay} from "ol";

let container = document.getElementById('popup-container');


export const OpenLayers = () => {
  const ref = useRef(0);
  const mapRef = useRef(0);
  useEffect(() => {

    console.log(container)

    const overlay = new Overlay({
      element: container,
      autoPan: false,
    });

    const map = new Map({
      target: "map-container",
      layers: [
        new TileLayer({
          source: new OSM()
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

    selected.on("select", async (event) => {


      event.preventDefault();
      const container = document.getElementById('popup-container');
      const content = document.getElementById('popup-content');
      const closer = document.getElementById('popup-closer');
      closer.onclick = function () {
        overlay.setPosition(undefined);
        closer.blur();
        return false;
      };
      // container.innerText = "selected"
      console.log(event);
      const coordinates = event.mapBrowserEvent.coordinate;
      console.log(coordinates)


      // content.innerHTML = '<p>You clicked here:</p><code>' + '</code>';
      console.log(overlay)
      if (overlay) {
        overlay.setPosition(Array.from(coordinates));

      }
      console.log("here")
      let feature = event.selected.at(0);
      console.log(feature);

      let [table, feature_id] = feature.id_.split(`.`);

      if (table === "buildings") {
        const BACKEND_ROOT_URL = "http://127.0.0.1:8000";
        const buildings = await fetch(`${BACKEND_ROOT_URL}/buildings/${feature_id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          }
        });

        const businesses = await fetch(`${BACKEND_ROOT_URL}/buildings/${feature_id}/businesses`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          }
        });


        if (buildings.ok && businesses.ok) {
          const result = await buildings.json();
          const businesses_result = await businesses.json();
          console.log(result);
          const buildings_data = `
          <div style="color: red">
            <h2>Property</h2>
            <div>ID: ${result.id} </div>
            <div>Name: ${result.name} </div>
            <div>Unique Parcel Number: ${result.unique_parcel_number} </div>
            <div>Current Value: ${result.current_value} </div>
            <div>Current Impost: ${result.current_impost} </div>
            <div>Payment Amount Due: ${result.payment_amount_due} </div>
            <div>Current Impost: ${result.current_impost} </div>
            <div>Owner ID: ${result.owner_id}</div>
          </div>
          `;

          let s = "";
          for (const business_data of businesses_result) {
              s += `<li>${business_data.id}</li>`
          }
          const businesses_data = `
          <div style="color: blue">
            <h2>Buildings on Property</h2>
            <ol>${s}</ol>
          </div>
          `;
          content.innerHTML = `${buildings_data}<hr/>${businesses_data}`;

        }

      }
      else if (table === `businesses`) {
        // let business_data = $("#businesses-data")
        const businesses = await fetch(`http://127.0.0.1:8000/businesses/${feature_id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          }
        });

        if (businesses.ok) {
          console.log(await businesses.json());
        }

      }

    });

    map.addInteraction(new Link());
    map.addInteraction(selected);
  }, []);

  return (
      <div style={{width: "100%", height: "100%"}}>
        <div id="popup-container" className="ol-popup" style={{zIndex: "999"}}>
          <a href="#" id="popup-closer" className="ol-popup-closer"></a>
          <div id="popup-content"></div>
        </div>
        <div id="map-container" style={{width: "100%", height: "100%"}}></div>
      </div>
  );
}




};
