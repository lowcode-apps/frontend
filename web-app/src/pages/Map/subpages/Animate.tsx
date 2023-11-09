import React, { useRef } from 'react';
import { MapContainer, TileLayer, useMapEvent } from 'react-leaflet';
import MapPlaceholder from '../components/Placeholder';
import CustomTile from '../components/CustomTile';


interface SetViewOnClickProps {
    animateRef: React.MutableRefObject<boolean>;
}

function SetViewOnClick({ animateRef }: SetViewOnClickProps) {
    const map = useMapEvent('click', (e) => {
        map.setView(e.latlng, map.getZoom(), {
            animate: animateRef.current || false,
        });
    });

    return null;
}

function Animate() {
    const animateRef = useRef(false);

    return (
        <>
            <p>
                <label>
                    <input
                        type="checkbox"
                        onChange={() => {
                            animateRef.current = !animateRef.current;
                        }}
                    />
                    Animate panning
                </label>
            </p>
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} placeholder={<MapPlaceholder />}
            >
                <CustomTile />

                <SetViewOnClick animateRef={animateRef} />
            </MapContainer>
        </>
    );
}

export default Animate;
