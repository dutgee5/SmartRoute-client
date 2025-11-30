import { useState } from 'react';
import { useMap } from './useMap';

export const useMapScreenLogic = () => {
    const mapData = useMap();

    const [searchModalVisible, setSearchModalVisible] = useState(false);

    const handlePlaceSelected = (details: any) => {
        if (details?.geometry) {
            const { lat, lng } = details.geometry.location;

            mapData.setDestination({
                latitude: lat,
                longitude: lng,
            });

            setSearchModalVisible(false);
        }
    };

    return {
        ...mapData, // location, region, loading, onMapPress etc.
        searchModalVisible,
        openSearch: () => setSearchModalVisible(true),
        closeSearch: () => setSearchModalVisible(false),
        handlePlaceSelected,
    };
};