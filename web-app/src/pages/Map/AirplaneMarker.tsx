import { useEffect, useState } from "react";
import { LeafletTrackingMarker } from "react-leaflet-tracking-marker";
import L, { Popup } from "leaflet";
import React from "react";

const icon = L.icon({
  iconSize: [45, 45],
  popupAnchor: [2, -20],
  iconUrl:
    "https://mysql-backup-base.s3.amazonaws.com/New%20Project%20%281%29.png",
});

interface AirplaneMarkerProps {
  data: {
    lat?: number;
    lng?: number;
  };
}

export default function AirplaneMarker({ data }: AirplaneMarkerProps) {
  const { lat=0, lng=0 } = data;
  const [prevPos, setPrevPos] = useState<[number, number]>([lat, lng]);

  useEffect(() => {
    if (prevPos[1] !== lng && prevPos[0] !== lat) setPrevPos([lat, lng]);
  }, [lat, lng, prevPos]);

  return (
    <>
      <LeafletTrackingMarker
        icon={icon}
        position={[lat, lng]}
        previousPosition={prevPos}
        duration={1000}
        keepAtCenter={true}
      ></LeafletTrackingMarker>
    </>
  );
}
