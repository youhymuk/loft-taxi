import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

import css from 'app/features/map/Map.module.css';
import { useSelector } from 'react-redux';
import { selectCoordinates } from '../store/mapSelector';

const Map: React.FC = (): JSX.Element => {
    const mapContainer = useRef<HTMLDivElement>(null);

    const coordinates = useSelector(selectCoordinates);

    const drawRoute = (map: any, coordinates: Array<Array<number>>) => {
        map.flyTo({
            center: coordinates[0],
            zoom: 15,
        });

        map.addLayer({
            id: 'route',
            type: 'line',
            source: {
                type: 'geojson',
                data: {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'LineString',
                        coordinates,
                    },
                },
            },
            layout: {
                'line-join': 'round',
                'line-cap': 'round',
            },
            paint: {
                'line-color': '#ffc617',
                'line-width': 8,
            },
        });
    };

    useEffect(() => {
        mapboxgl.accessToken =
            'pk.eyJ1IjoieW91aG9vIiwiYSI6ImNreGt1aHFzajFhOTYycHViYTNweGhpNXQifQ.Y6Y6fdxT16l2DFGpUEANbQ';

        const map = new mapboxgl.Map({
            container: mapContainer.current || '',
            style: 'mapbox://styles/mapbox/dark-v9',
            center: [30.513378102508995, 50.44879488478449],
            zoom: 12,
        });

        map.on('load', () => {
            if (coordinates) {
                drawRoute(map, coordinates);
            }
        });

        return () => {
            if (map.getLayer('route')) {
                map.removeLayer('route');
            }

            if (map.getSource('route')) {
                map.removeSource('route');
            }

            map.remove();
        };
    }, [coordinates]);

    return (
        <div className={css.mapContainer}>
            <div className={css.map} ref={mapContainer} />
        </div>
    );
};

export default Map;
