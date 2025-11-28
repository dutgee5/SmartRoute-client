import { useEffect, useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { useRouter } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { colors } from "../src/theme/colors";
import { styles } from "./index.styles";

export default function HomeScreen() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    try {
      const token = await SecureStore.getItemAsync("userToken");

      if (token) {
        router.replace("/map");
      } else {
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>SmartRoute 📍</Text>
      <Text style={styles.slogan}>Zamanı ve Rotanı Yönet</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => router.push("/(auth)/login")} 
        >
          <Text style={styles.loginText}>Giriş Yap</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => router.push("/(auth)/register")} 
        >
          <Text style={styles.registerText}>Kayıt Ol</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}