import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../theme/colors";
import { styles } from "./GooglePlacesInput.styles"; 

interface Props {
  onPlaceSelected: (details: any) => void;
  onCancel: () => void;
}

export const GooglePlacesInput = ({ onPlaceSelected, onCancel }: Props) => {
  const GOOGLE_API_KEY = process.env.EXPO_PUBLIC_GOOGLE_MAPS_KEY;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onCancel} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color={colors.textPrimary} />
        </TouchableOpacity>
        <Text style={styles.title}>Hedef Ara</Text>
      </View>

      <GooglePlacesAutocomplete
        placeholder="Nereye gitmek istersin?"
        onPress={(data, details = null) => onPlaceSelected(details)}
        query={{ key: GOOGLE_API_KEY, language: "tr" }}
        fetchDetails={true}
        styles={{
          textInput: styles.input,
          listView: styles.listView,
          container: { flex: 0 },
        }}
        enablePoweredByContainer={false}
      />
    </View>
  );
};
