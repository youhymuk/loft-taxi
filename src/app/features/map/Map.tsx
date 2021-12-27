import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

import css from './Map.module.css';

const Map: React.FC = (): JSX.Element => {
    const mapContainer = useRef<HTMLDivElement>(null);

    useEffect(() => {
        mapboxgl.accessToken =
            'pk.eyJ1IjoieW91aG9vIiwiYSI6ImNreGt1aHFzajFhOTYycHViYTNweGhpNXQifQ.Y6Y6fdxT16l2DFGpUEANbQ';

        const map = new mapboxgl.Map({
            container: mapContainer.current || '',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [30.513378102508995, 50.44879488478449],
            zoom: 12,
        });

        return () => {
            map.remove();
        };
    }, []);
    return (
        <div className={css.mapContainer}>
            <div className={css.map} ref={mapContainer} />
        </div>
    );
};

export default Map;
