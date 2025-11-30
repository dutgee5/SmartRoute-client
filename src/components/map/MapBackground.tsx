import React from "react";
import MapView, {
  Marker,
  PROVIDER_GOOGLE,
  MapPressEvent,
} from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { Platform, StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

// Interface Segregation: It only asks for the data it needs.
interface MapBackgroundProps {
  region: any;
  location: any;
  destination: any;
  onMapPress: (e: MapPressEvent) => void;
  transportMode: 'DRIVING' | 'WALKING' | 'TRANSIT'; 
}

export const MapBackground: React.FC<MapBackgroundProps> = ({
  region,
  location,
  destination,
  transportMode,
  onMapPress,
}) => {
  const GOOGLE_API_KEY = process.env.EXPO_PUBLIC_GOOGLE_MAPS_KEY;

  return (
    <MapView
      style={styles.map}
      provider={Platform.OS === "android" ? PROVIDER_GOOGLE : undefined}
      region={region}
      showsUserLocation={true}
      showsCompass={false}
      showsMyLocationButton={false}
      onPress={onMapPress}
    >
      {destination && (
        <Marker coordinate={destination} pinColor="red" title="Hedef" />
      )}

      {location && destination && (
        <MapViewDirections
          origin={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          }}
          destination={destination}
          apikey={GOOGLE_API_KEY || ""}
          strokeWidth={4}
          strokeColor={colors.primary}
          mode={transportMode}
          onError={(err) => console.log("Rota Hatası:", err)}
        />
      )}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: { width: "100%", height: "100%" },
});
