import { useState } from 'react';
import { useRouter } from 'expo-router';
import { Alert } from 'react-native';
import api from '../../services/api'
import { RegisterRequest } from '../../types/auth';

export const useRegister = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [transportMode, setTransportMode] = useState<'Car' | 'Bus' | 'Walk'>('Car');

  const onRegister = async () => {
    if (!username || !password) {
      Alert.alert('Eksik Bilgi', 'Lütfen kullanıcı adı ve şifre giriniz.');
      return;
    }

    setLoading(true);
    try {
      const payload: RegisterRequest = { username, password, transportMode };

      await api.post('/Auth/register', payload);

      Alert.alert('Tebrikler 🎉', 'Hesabın oluşturuldu! Şimdi giriş yapabilirsin.', [
        { text: 'Giriş Yap', onPress: () => router.replace('/login' as any) }
      ]);

    } catch (error: any) {
      console.log(error);
      const msg = error.response?.data || 'Bağlantı hatası oluştu.';
      Alert.alert('Kayıt Başarısız', typeof msg === 'string' ? msg : 'Sunucu hatası');
    } finally {
      setLoading(false);
    }
  };

  const navigateToLogin = () => router.push('/login' as any);

  return {
    username, setUsername,
    password, setPassword,
    transportMode, setTransportMode,
    loading,
    onRegister,
    navigateToLogin
  };
};