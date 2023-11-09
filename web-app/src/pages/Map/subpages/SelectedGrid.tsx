import React from 'react';
import {
  MapContainer,
  TileLayer,
  Circle,
  CircleMarker,
  Polyline,
  Polygon,
  Rectangle,
  Popup,
} from 'react-leaflet';
import MapPlaceholder from '../components/Placeholder';
import CustomTile from '../components/CustomTile';

interface AppProps { }

const SelectedGrid = () => {

  const center: [number, number] = [13.319705, 80.192496];

  const polyline: [number, number][] = [
    [13.319705, 80.192496],
    [13.32, 80.19],
    [13.32, 80.18],
  ];

  const multiPolyline: [number, number][][] = [
    [
      [13.32, 80.19],
      [13.32, 80.18],
      [13.33, 80.18],
    ],
    [
      [13.32, 80.2],
      [13.32, 80.21],
      [13.33, 80.21],
    ],
  ];

  const polygon: [number, number][] = [
    [13.325, 80.192496],
    [13.33, 80.19],
    [13.33, 80.18],
  ];

  const multiPolygon: any = [
    [
      [13.32, 80.18],
      [13.32, 80.17],
      [13.34, 80.17],
    ],
    [
      [13.32, 80.2],
      [13.32, 80.22],
      [13.34, 80.22],
    ],
  ];

  const rectangle: [number, number][] = [
    [13.31, 80.19],
    [13.32, 80.21],
  ];


  const fillBlueOptions = { fillColor: 'blue' };
  const blackOptions = { color: 'black' };
  const limeOptions = { color: 'lime' };
  const purpleOptions = { color: 'purple' };
  const redOptions = { color: 'red' };

  return (
    <MapContainer center={center} zoom={13} scrollWheelZoom={false} placeholder={<MapPlaceholder />}
    >
      <CustomTile />

      <Circle center={center} pathOptions={fillBlueOptions} radius={200} />
      <CircleMarker center={[51.51, -0.12]} pathOptions={redOptions} radius={20}>
        <Popup>Popup in CircleMarker</Popup>
      </CircleMarker>
      <Polyline pathOptions={limeOptions} positions={polyline} />
      <Polyline pathOptions={limeOptions} positions={multiPolyline} />
      <Polygon pathOptions={purpleOptions} positions={polygon} />
      <Polygon pathOptions={purpleOptions} positions={multiPolygon} />
      <Rectangle bounds={rectangle} pathOptions={blackOptions} />
    </MapContainer>
  );
};

export default SelectedGrid;
