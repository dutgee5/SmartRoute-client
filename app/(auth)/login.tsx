import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useLogin } from '../../src/hooks/auth/useLogin';
import { styles } from './login.styles';

export default function LoginScreen() {
  const { 
    username, setUsername, 
    password, setPassword, 
    loading, onLogin, navigateToRegister 
  } = useLogin();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Hoşgeldin 👋</Text>
        <Text style={styles.subtitle}>Yolculuğuna devam et</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Kullanıcı Adı</Text>
        <TextInput 
          style={styles.input} 
          value={username} 
          onChangeText={setUsername} 
          autoCapitalize="none" 
          placeholder="Kullanıcı adınız"
        />

        <Text style={styles.label}>Şifre</Text>
        <TextInput 
          style={styles.input} 
          secureTextEntry 
          value={password} 
          onChangeText={setPassword} 
          placeholder="••••••"
        />

        <TouchableOpacity 
          style={styles.loginButton} 
          onPress={onLogin} 
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.loginButtonText}>Giriş Yap</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity onPress={navigateToRegister} style={styles.registerLink}>
          <Text style={styles.registerLinkText}>Hesabın yok mu? Kayıt Ol</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}