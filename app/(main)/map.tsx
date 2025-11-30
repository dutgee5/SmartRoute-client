import React from "react";
import { View, ActivityIndicator } from "react-native";
import { useMapScreenLogic } from "../../src/hooks/map/useMapScreenLogic";
import { MapBackground } from "../../src/components/map/MapBackground";
import { MapUIOverlay } from "../../src/components/map/MapUIOverlay";
import { GooglePlacesInput } from "../../src/components/map/GooglePlacesInput";
import { colors } from "../../src/theme/colors";
import { styles } from "./map.styles";
import { TransportSelector } from "../../src/components/map/TransportSelector";

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
      {/* 1. Harita */}
      <MapBackground
        transportMode={logic.transportMode}
        region={logic.region}
        location={logic.location}
        destination={logic.destination}
        onMapPress={logic.onMapPress}
      />

      {/* 2. UI Mantığı: Hedef seçili mi? */}

      {/* A) Hedef YOKSA ve Arama kapalıysa -> Standart UI */}
      {!logic.destination && !logic.searchModalVisible && (
        <MapUIOverlay onSearchPress={logic.openSearch} />
      )}

      {/* B) Hedef VARSA -> Seçim Kartı (TransportSelector) */}
      {logic.destination && (
        <TransportSelector
          onCancel={logic.clearDestination} // X'e basınca temizle
          onStartNavigation={(id) => console.log("Seçilen:", id)}
          selectedMode={
            logic.transportMode === "WALKING"
              ? "Walk"
              : logic.transportMode === "TRANSIT"
              ? "Bus"
              : "Car"
          }
          onSelect={(id) => logic.handleTransportSelect(id)}
        />
      )}

      {/* 3. Arama Ekranı */}
      {logic.searchModalVisible && (
        <GooglePlacesInput
          onPlaceSelected={logic.handlePlaceSelected}
          onCancel={logic.closeSearch}
        />
      )}
    </View>
  );
}
