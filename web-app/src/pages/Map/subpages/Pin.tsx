import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Polyline, Popup, Marker } from "react-leaflet";
import MapPlaceholder from "../components/Placeholder";
import CustomTile from "../components/CustomTile";
const position: any = [13.319535, 80.192469]

const PinPage = () => <MapContainer center={position} zoom={13} scrollWheelZoom={false} placeholder={<MapPlaceholder />}
>
    <CustomTile />

    <Marker position={position}>
        <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
    </Marker>
</MapContainer>;
export default PinPage;