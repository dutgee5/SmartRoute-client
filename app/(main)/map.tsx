import React from "react";
import { View, ActivityIndicator } from "react-native";
import { useMapScreenLogic } from "../../src/hooks/map/useMapScreenLogic";
import { MapBackground } from "../../src/components/map/MapBackground";
import { MapUIOverlay } from "../../src/components/map/MapUIOverlay";
import { GooglePlacesInput } from "../../src/components/map/GooglePlacesInput";
import { colors } from "../../src/theme/colors";
import { styles } from "./map.styles";

export default function MapScreen() {
  const logic = useMapScreenLogic();

  if (logic.loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MapBackground
        region={logic.region}
        location={logic.location}
        destination={logic.destination}
        onMapPress={logic.onMapPress}
      />

      {!logic.searchModalVisible && (
        <MapUIOverlay onSearchPress={logic.openSearch} />
      )}

      {logic.searchModalVisible && (
        <GooglePlacesInput
          onPlaceSelected={logic.handlePlaceSelected}
          onCancel={logic.closeSearch}
        />
      )}
    </View>
  );
}
