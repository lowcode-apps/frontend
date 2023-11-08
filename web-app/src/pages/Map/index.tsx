import "leaflet/dist/leaflet.css";
import "leaflet/dist/leaflet.js";
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Polyline } from "react-leaflet";
import AirplaneMarker from "./AirplaneMarker";
// import geopoint from "./geo-location.json"; // for vechile location marker in map

// import newGeoPoints from "./new-points.json";// for default marker in map


import { Button } from "@mui/material";
// import "./styles.css";

import TrackedLocation1 from "./coordinates/tracked-location-1.json";
import VechileLocation1 from "./coordinates/vechicle-location-1.json";

import VechileLocation2 from "./coordinates/vechicle-location-2.json";
import TrackedLocation2 from "./coordinates/tracked-location-2.json";


import VechileLocation3 from "./coordinates/vechicle-location-3.json";
import TrackedLocation3 from "./coordinates/tracked-location-3.json";


/*

Reference  https://codesandbox.io/s/github/varakalaajay/live-tracking-react-leaflet-marker/tree/main/?file=/src/AirplaneMarker.js:0-847

*/
let cursor = 0;

const Map = () => {
  const [currentTrack, setCurrentTrack] = useState<{
    lat?: number;
    lng?: number;
  }>({});
  const [count, setCount] = useState<any>(0);

  const [positions, setPositions] = useState<any>(TrackedLocation1);
  const [geopoints, setGeopoints] = useState<any>(VechileLocation1);

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
  }, [geopoints]);

  return (
    <div>
      <Button
        type="button"
        fullWidth
        onClick={() => {
          let post = TrackedLocation2;
          let geo = VechileLocation2
          if (count % 3 != 0) {
            post = TrackedLocation1;
            geo = VechileLocation1;
          }else if(count % 3 != 1){
            post = TrackedLocation3;
            geo = VechileLocation3;
          }
          setPositions(post)
          setGeopoints(geo)
          setCount((count: any) => count + 1)

        }}
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        toggle location
      </Button>
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