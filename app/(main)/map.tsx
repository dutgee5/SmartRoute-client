import React from "react";
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  Platform,
} from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useMap } from "../../src/hooks/map/useMap";
import { styles } from "./map.styles";
import { colors } from "../../src/theme/colors";

export default function MapScreen() {
  const { location, region, loading } = useMap();
  const insets = useSafeAreaInsets();

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={Platform.OS === "android" ? PROVIDER_GOOGLE : undefined}
        region={region}
        showsUserLocation={true}
        showsCompass={false}
        showsMyLocationButton={false}
      >
        {/* İleride buraya rota çizgisi (Polyline) gelecek */}
      </MapView>

      <TouchableOpacity
        style={[styles.searchContainer, { top: insets.top + 10 }]}
        activeOpacity={0.8}
      >
        <Ionicons
          name="search"
          size={20}
          color={colors.textSecondary}
          style={styles.searchIcon}
        />
        <Text style={styles.searchText}>Nereye gitmek istersin?</Text>

        <View style={styles.profileAvatar}>
          <Text style={styles.profileText}>A</Text>
        </View>
      </TouchableOpacity>

      <View
        style={[
          styles.bottomCard,
          {
            bottom: (insets.bottom > 0 ? insets.bottom : 20) + 15,
          },
        ]}
      >
        <Text style={styles.cardTitle}>Hızlı Rota ⚡️</Text>

        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.actionBtn}>
            <Text style={styles.actionEmoji}>🏠</Text>
            <Text style={styles.actionBtnText}>Eve Git</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionBtn}>
            <Text style={styles.actionEmoji}>🏢</Text>
            <Text style={styles.actionBtnText}>İşe Git</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionBtn}>
            <Text style={styles.actionEmoji}>📍</Text>
            <Text style={styles.actionBtnText}>Kaydet</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
