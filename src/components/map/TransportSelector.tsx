import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./TransportSelector.styles";

const MOCK_OPTIONS = [
  {
    id: "Bus",
    type: "Toplu Taşıma",
    icon: "🚌",
    duration: "25 dk",
    price: "15 TL",
    eco: true,
  },
  {
    id: "Car",
    type: "Özel Araç",
    icon: "🚗",
    duration: "18 dk",
    price: "45 TL",
    eco: false,
  },
  {
    id: "Walk",
    type: "Yürüme",
    icon: "🚶",
    duration: "45 dk",
    price: "0 TL",
    eco: true,
  },
];

interface Props {
  selectedMode?: string;
  onSelect?: (mode: any) => void;

  onCancel?: () => void;
  onStartNavigation?: (optionId: string) => void;
}

export const TransportSelector = ({
  onCancel,
  onStartNavigation,
  selectedMode,
  onSelect,
}: Props) => {
  const [internalSelected, setInternalSelected] = useState<string | null>(null);

  const activeSelection = selectedMode || internalSelected;

  const handlePress = (id: string) => {
    if (onSelect) {
      onSelect(id);
    } else {
      setInternalSelected(id);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Ulaşım Tercihi</Text>
        {onCancel && (
          <TouchableOpacity onPress={onCancel} style={styles.closeButton}>
            <Text style={styles.closeText}>✕</Text>
          </TouchableOpacity>
        )}
      </View>

      {MOCK_OPTIONS.map((option) => (
        <TouchableOpacity
          key={option.id}
          style={[
            styles.optionCard,
            activeSelection === option.id && styles.selectedCard,
          ]}
          onPress={() => handlePress(option.id)}
        >
          <Text style={styles.icon}>{option.icon}</Text>
          <View style={styles.infoContainer}>
            <Text style={styles.typeText}>
              {option.type} {option.eco && "🌱"}
            </Text>
            {onStartNavigation && (
              <Text style={styles.detailText}>
                {option.duration} • Düşük Yoğunluk
              </Text>
            )}
          </View>
          {onStartNavigation && (
            <Text style={styles.priceText}>{option.price}</Text>
          )}
        </TouchableOpacity>
      ))}

      {onStartNavigation && activeSelection && (
        <TouchableOpacity
          style={styles.startButton}
          onPress={() => onStartNavigation(activeSelection)}
        >
          <Text style={styles.startButtonText}>Rotayı Başlat 🚀</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
