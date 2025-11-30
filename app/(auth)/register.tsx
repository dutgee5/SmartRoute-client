import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useRegister } from '../../src/hooks/auth/useRegister';
import { styles } from './register.styles';
import { TransportSelector } from '../../src/components/map/TransportSelector';

export default function RegisterScreen() {
  const { 
    username, setUsername, 
    password, setPassword, 
    transportMode, setTransportMode, 
    loading, onRegister, navigateToLogin 
  } = useRegister();

  return (
    <View style={styles.container}>
    
      <View style={styles.header}>
        <Text style={styles.title}>SmartRoute</Text>
        <Text style={styles.subtitle}>Akıllı yolculuğuna başla</Text>
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

        <Text style={styles.label}>Genelde nasıl ulaşım sağlarsın?</Text>
        <TransportSelector selectedMode={transportMode} onSelect={setTransportMode} />

        <TouchableOpacity 
          style={styles.registerButton} 
          onPress={onRegister} 
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.registerButtonText}>Hesap Oluştur</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity onPress={navigateToLogin} style={styles.loginLink}>
          <Text style={styles.loginLinkText}>Zaten hesabın var mı? Giriş Yap</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}