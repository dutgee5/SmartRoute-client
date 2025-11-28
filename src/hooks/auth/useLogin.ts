import { useState } from 'react';
import { useRouter } from 'expo-router';
import { Alert } from 'react-native';
import * as SecureStore from 'expo-secure-store'; 
import api from '../../services/api'; 
import { AuthResponse } from '../../types/auth'; 

export const useLogin = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = async () => {
    if (!username || !password) {
      Alert.alert('Eksik Bilgi', 'Kullanıcı adı ve şifre gereklidir.');
      return;
    }

    setLoading(true);
    try {
     
      const response = await api.post<string>('/Auth/login', { username, password });
      
      const token = response.data;

     
      await SecureStore.setItemAsync('userToken', token);

      router.replace('/(main)/map'); 
      
    } catch (error: any) {
      console.log(error);
      const msg = error.response?.data || 'Giriş yapılamadı.';
      Alert.alert('Hata', typeof msg === 'string' ? msg : 'Sunucu hatası');
    } finally {
      setLoading(false);
    }
  };

  const navigateToRegister = () => router.push('/(auth)/register');

  return {
    username, setUsername,
    password, setPassword,
    loading,
    onLogin,
    navigateToRegister
  };
};