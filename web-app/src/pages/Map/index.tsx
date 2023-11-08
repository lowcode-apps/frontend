import "leaflet/dist/leaflet.css";
import "leaflet/dist/leaflet.js";
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Polyline } from "react-leaflet";
import AirplaneMarker from "./AirplaneMarker";
import geopoints from "./geo-location.json";
import newGeoPoints from "./new-points.json";
// import "./styles.css";

/*

Reference  https://codesandbox.io/s/github/varakalaajay/live-tracking-react-leaflet-marker/tree/main/?file=/src/AirplaneMarker.js:0-847

*/
const dataStory = [
  {
    lat: 53.22376666666667,
    lng: 50.745841666666664,
  },
  {
    lat: 53.22376666666667,
    lng: 50.745841666666664,
  },
  {
    lat: 53.223728333333334,
    lng: 50.74598666666667,
  },
  {
    lat: 53.223705,
    lng: 50.746021666666664,
  },
  {
    lat: 53.22365166666667,
    lng: 50.746075,
  },
];

let cursor = 0;

const Map=() =>{
  const [currentTrack, setCurrentTrack] = useState<{
    lat?: number;
    lng?: number;
  }>({});
  const [positions, setPositions] = useState<any>(newGeoPoints);
  useEffect(() => {
    setCurrentTrack(geopoints[cursor]);

    const interval = setInterval(() => {
      if (cursor === geopoints.length - 1) {
        cursor = 0;
        setCurrentTrack(geopoints[cursor]);
        return;
      }

      cursor += 1;
      setCurrentTrack(geopoints[cursor]);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <MapContainer
        style={{ height: "calc(100vh - 52px)" }}
        center={[22.2974883, 73.2067383]}
        zoom={17}
        minZoom={5}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Polyline positions={positions} color="red" />
        <AirplaneMarker data={currentTrack ?? {}} />
      </MapContainer>
    </div>
  );
}
export default Map;