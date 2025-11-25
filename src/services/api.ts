// src/services/api.ts
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

// ⚠️ EĞER ANDROID EMULATOR KULLANIYORSAN: 'http://10.0.2.2:5118' (Portu kendi backend portunla değiştir)
// ⚠️ EĞER FİZİKSEL TELEFON KULLANIYORSAN: Bilgisayarının IP adresi (Örn: 'http://192.168.1.35:5118')
const API_URL = 'http://192.168.1.157:7181';
const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Her istekten önce otomatik Token ekleme
api.interceptors.request.use(async (config) => {
    try {
        const token = await SecureStore.getItemAsync('userToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
    } catch (error) {
        console.log("Token okuma hatası:", error);
    }
    return config;
});

export default api;