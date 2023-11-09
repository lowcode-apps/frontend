import React from 'react';
import { MapContainer, TileLayer, useMapEvent } from 'react-leaflet';

const CustomTile = () => <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap by Jagan </a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
/>


export default CustomTile;