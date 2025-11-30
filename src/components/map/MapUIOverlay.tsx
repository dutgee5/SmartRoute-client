import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors } from "../../theme/colors";
import { styles } from "./MapUIOverlay.styles";

interface MapUIOverlayProps {
  onSearchPress: () => void;
}

export const MapUIOverlay: React.FC<MapUIOverlayProps> = ({
  onSearchPress,
}) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.overlayContainer} pointerEvents="box-none">
      <TouchableOpacity
        style={[styles.searchContainer, { top: insets.top + 10 }]}
        activeOpacity={0.8}
        onPress={onSearchPress}
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
          { bottom: (insets.bottom > 0 ? insets.bottom : 20) + 15 },
        ]}
      >
        <Text style={styles.cardTitle}>Hızlı Rota ⚡️</Text>
        <View style={styles.actionButtons}>
          <ActionButton emoji="🏠" text="Eve Git" />
          <ActionButton emoji="🏢" text="İşe Git" />
          <ActionButton emoji="📍" text="Kaydet" />
        </View>
      </View>
    </View>
  );
};

const ActionButton = ({ emoji, text }: { emoji: string; text: string }) => (
  <TouchableOpacity style={styles.actionBtn}>
    <Text style={styles.actionEmoji}>{emoji}</Text>
    <Text style={styles.actionBtnText}>{text}</Text>
  </TouchableOpacity>
);
