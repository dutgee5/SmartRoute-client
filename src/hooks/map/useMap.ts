import { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import { Alert } from 'react-native';
import { MapPressEvent } from 'react-native-maps';

export const useMap = () => {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [destination, setDestination] = useState<any>(null);
  const [region, setRegion] = useState({
    latitude: 41.0082,
    longitude: 28.9784,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        Alert.alert('İzin Gerekli', 'Harita özellikleri için konum izni vermelisin.');
        setLoading(false);
        return;
      }

      try {
        let currentLocation = await Location.getCurrentPositionAsync({});
        setLocation(currentLocation);

        setRegion({
          latitude: currentLocation.coords.latitude,
          longitude: currentLocation.coords.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        });
      } catch (error) {
        Alert.alert('Hata', 'Konum alınamadı.');
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const onMapPress = (e: MapPressEvent) => {
    setDestination(e.nativeEvent.coordinate);
  };

  return {
    location,
    region,
    loading,
    destination,
    setDestination,
    onMapPress
  };
};