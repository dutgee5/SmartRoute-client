import { useState } from 'react';
import { useMap } from './useMap';

export const useMapScreenLogic = () => {
    const mapData = useMap();

    const [searchModalVisible, setSearchModalVisible] = useState(false);
    const [transportMode, setTransportMode] = useState<'DRIVING' | 'WALKING' | 'TRANSIT'>('DRIVING');

    const clearDestination = () => {
        mapData.setDestination(null);
    };

    const handlePlaceSelected = (details: any) => {
        if (details?.geometry) {
            const { lat, lng } = details.geometry.location;

            mapData.setDestination({
                latitude: lat,
                longitude: lng,
            });

            setSearchModalVisible(false);
            setTransportMode('DRIVING');
        }
    };

    const handleTransportSelect = (optionId: string) => {
        if (optionId === 'Walk') setTransportMode('WALKING');
        else if (optionId === 'Bus') setTransportMode('TRANSIT');
        else setTransportMode('DRIVING');
    };

    return {
        ...mapData, // location, region, loading, onMapPress etc.
        searchModalVisible,
        openSearch: () => setSearchModalVisible(true),
        closeSearch: () => setSearchModalVisible(false),
        handlePlaceSelected,
        handleTransportSelect,
        transportMode,
        clearDestination
    };
};