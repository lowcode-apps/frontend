import React, { useState, useRef, useMemo, useCallback } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MapPlaceholder from '../components/Placeholder';
import CustomTile from '../components/CustomTile';

const center = {
    lat: 51.505,
    lng: -0.09,
};

function DraggableMarker() {
    const [draggable, setDraggable] = useState(false);
    const [position, setPosition] = useState(center);
    const markerRef = useRef(null);

    const eventHandlers = useMemo(
        () => ({
            dragend() {
                const marker: any = markerRef.current;
                if (marker != null) {
                    setPosition(marker.getLatLng());
                }
            },
        }),
        [],
    );

    const toggleDraggable = useCallback(() => {
        setDraggable((d) => !d);
    }, []);

    return (
        <Marker
            draggable={draggable}
            eventHandlers={eventHandlers}
            position={position}
            ref={markerRef}
        >
            <Popup minWidth={90}>
                <span onClick={toggleDraggable}>
                    {draggable
                        ? 'Marker is draggable'
                        : 'Click here to make marker draggable'}
                </span>
            </Popup>
        </Marker>
    );
}

const DraggablePin = () => {
    return (
        <MapContainer center={center} zoom={13} scrollWheelZoom={false} placeholder={<MapPlaceholder />}
        >
            <CustomTile />

            <DraggableMarker />
        </MapContainer>
    );
};

export default DraggablePin;
