import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {styles} from './TransportSelector.styles'

type Mode = "Car" | "Bus" | "Walk";

interface Props {
  selectedMode: Mode;
  onSelect: (mode: Mode) => void;
}

export const TransportSelector = ({ selectedMode, onSelect }: Props) => {
  const modes: { key: Mode; label: string; icon: string }[] = [
    { key: "Car", label: "Araba", icon: "🚗" },
    { key: "Bus", label: "Otobüs", icon: "🚌" },
    { key: "Walk", label: "Yürüme", icon: "🚶" },
  ];

  return (
    <View style={styles.container}>
      {modes.map((m) => (
        <TouchableOpacity
          key={m.key}
          style={[
            styles.button,
            selectedMode === m.key && styles.buttonSelected,
          ]}
          onPress={() => onSelect(m.key)}
        >
          <Text style={styles.icon}>{m.icon}</Text>
          <Text
            style={[styles.text, selectedMode === m.key && styles.textSelected]}
          >
            {m.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

