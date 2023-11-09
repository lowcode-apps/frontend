import React, { useCallback, useMemo, useState } from 'react';
import {
    MapContainer,
    TileLayer,
    Rectangle,
    useMapEvent,
    useMap,
} from 'react-leaflet';
import MapPlaceholder from '../components/Placeholder';
import CustomTile from '../components/CustomTile';

// Classes used by Leaflet to position controls
const POSITION_CLASSES: Record<string, string> = {
    bottomleft: 'leaflet-bottom leaflet-left',
    bottomright: 'leaflet-bottom leaflet-right',
    topleft: 'leaflet-top leaflet-left',
    topright: 'leaflet-top leaflet-right',
};


const BOUNDS_STYLE = { weight: 1 };

function MinimapBounds({ parentMap, zoom }: { parentMap: any; zoom: number }) {
    const minimap = useMap();

    // Clicking a point on the minimap sets the parent's map center
    const onClick = useCallback(
        (e: any) => {
            parentMap.setView(e.latlng, parentMap.getZoom());
        },
        [parentMap]
    );
    useMapEvent('click', onClick);

    // Keep track of bounds in state to trigger renders
    const [bounds, setBounds] = useState(parentMap.getBounds());
    const onChange = useCallback(() => {
        setBounds(parentMap.getBounds());
        // Update the minimap's view to match the parent map's center and zoom
        minimap.setView(parentMap.getCenter(), zoom);
    }, [minimap, parentMap, zoom]);

    // Listen to events on the parent map
    //   const handlers = useMemo(() => ({ move: onChange, zoom: onChange }), []) ;

    //   useMapEvent(handlers);


    useMapEvent('move', onClick);
    useMapEvent('zoom', onClick);

    return <Rectangle bounds={bounds} pathOptions={BOUNDS_STYLE} />;
}

function MinimapControl({ position, zoom }: { position: string; zoom: number }) {
    const parentMap = useMap();
    const mapZoom = zoom || 0;

    // Memoize the minimap so it's not affected by position changes
    const minimap = useMemo(
        () => (
            <MapContainer
                style={{ height: 80, width: 80 }}
                center={parentMap.getCenter()}
                zoom={mapZoom}
                dragging={false}
                doubleClickZoom={false}
                scrollWheelZoom={false}
                attributionControl={false}
                zoomControl={false}
                placeholder={<MapPlaceholder />}

            >
                <CustomTile />

                <MinimapBounds parentMap={parentMap} zoom={mapZoom} />
            </MapContainer>
        ),
        [parentMap, mapZoom]
    );

    const positionClass =
        (position && POSITION_CLASSES[position]) || POSITION_CLASSES.topright;
    return (
        <div className={positionClass}>
            <div className="leaflet-control leaflet-bar">{minimap}</div>
        </div>
    );
}

function ZoomOut() {
    return (
        <MapContainer center={[51.505, -0.09]} zoom={6} scrollWheelZoom={false}>
            <CustomTile />
            <MinimapControl position="topright" zoom={6} />
        </MapContainer>
    );
}

export default ZoomOut;
