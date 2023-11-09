
import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { MapContainer, TileLayer, Polyline, Popup, Marker, useMapEvents } from "react-leaflet";
import MapPlaceholder from "../components/Placeholder";
import CustomTile from "../components/CustomTile";
const position: any = [13.319535, 80.192469]


interface LocationMarkerProps {
    clicked: number
}

const LocationMarker: React.FC<LocationMarkerProps> = ({ clicked = 0 }) => {
    const [position, setPosition] = useState<null | [number, number]>(null);
    const map = useMapEvents({
        // click() {
        //   map.locate();
        // },
        locationfound(e) {
            setPosition([e.latlng.lat, e.latlng.lng]);
            map.flyTo(e.latlng, map.getZoom());
        },
    });
    useEffect(() => {
        if (clicked > 0) {
            map.locate();
        }
    }, [clicked])
    return position === null ? null : (
        <Marker position={position}>
            <Popup>You are here</Popup>
        </Marker>
    );
};


const LocateMe = () => {
    const [clicked, setClicked] = useState(0);
    return (<>

        <Button
            type="button"
            fullWidth
            onClick={() => {
                setClicked(clicked => clicked + 1)

            }}
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
        >
            locate me
        </Button>
        <MapContainer
            center={position}
            zoom={13}
            placeholder={<MapPlaceholder />}

            scrollWheelZoom={false}>
            <CustomTile />
            <LocationMarker clicked={clicked} />
        </MapContainer>
    </>)
}

export default LocateMe;
