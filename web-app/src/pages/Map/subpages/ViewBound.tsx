import React, { useState, useMemo } from 'react';
import { MapContainer, TileLayer, Rectangle, useMap } from 'react-leaflet';
import MapPlaceholder from '../components/Placeholder';
import CustomTile from '../components/CustomTile';

const innerBounds: any = [
    [49.505, -2.09],
    [53.505, 2.09],
];

const outerBounds: any = [
    [50.505, -29.09],
    [52.505, 29.09],
];

const redColor = { color: 'red' };
const whiteColor = { color: 'white' };

function SetBoundsRectangles() {
    const [bounds, setBounds] = useState(outerBounds);
    const map = useMap();

    const innerHandlers = useMemo(
        () => ({
            click() {
                setBounds(innerBounds);
                map.fitBounds(innerBounds);
            },
        }),
        [map]
    );
    const outerHandlers = useMemo(
        () => ({
            click() {
                setBounds(outerBounds);
                map.fitBounds(outerBounds);
            },
        }),
        [map]
    );

    return (
        <>
            <Rectangle
                bounds={outerBounds}
                eventHandlers={outerHandlers}
                pathOptions={bounds === outerBounds ? redColor : whiteColor}
            />
            <Rectangle
                bounds={innerBounds}
                eventHandlers={innerHandlers}
                pathOptions={bounds === innerBounds ? redColor : whiteColor}
            />
        </>
    );
}

const ViewBound = () => {
    return (
        <MapContainer bounds={outerBounds} scrollWheelZoom={false} placeholder={<MapPlaceholder />}    >
            <CustomTile />

            <SetBoundsRectangles />
        </MapContainer>
    );
};

export default ViewBound;
