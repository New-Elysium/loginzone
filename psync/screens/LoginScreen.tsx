import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useAtom } from 'jotai';
import { userAtom } from '../statemanagement/atom';


const LoginScreen: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useAtom(userAtom);

  const handleSignUp = () => {
    setUser({ username, password });
    ToastAndroid.show('Sign Up Successful', ToastAndroid.SHORT);
  };

  const handleLogin = () => {
    if (user && user.username === username && user.password === password) {
      ToastAndroid.show('Login Succeeded', ToastAndroid.SHORT);
    } else {
      ToastAndroid.show('Login Failed', ToastAndroid.SHORT);
    }
  };

  return (
    <LinearGradient
    locations={[0,1]}
      colors={['#140034', '#01010d']}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center',width:"100%" }}
    >
      <View style={{ width: '100%', padding: 20, borderRadius: 10, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
        <Text style={{ fontSize: 24, color: 'white', marginBottom: 20, textAlign: 'center' }}>Login</Text>
        <TextInput
          placeholder="Username"
          placeholderTextColor="#ccc"
          value={username}
          onChangeText={setUsername}
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white', padding: 10, borderRadius: 5, marginBottom: 10 }}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#ccc"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white', padding: 10, borderRadius: 5, marginBottom: 10 }}
        />
        <TouchableOpacity onPress={handleLogin} style={{ backgroundColor: '#007BFF', padding: 15, borderRadius: 5, marginBottom: 10 }}>
          <Text style={{ color: 'white', fontSize: 18, textAlign: 'center' }}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSignUp} style={{ backgroundColor: '#28A745', padding: 15, borderRadius: 5 }}>
          <Text style={{ color: 'white', fontSize: 18, textAlign: 'center' }}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default LoginScreen;