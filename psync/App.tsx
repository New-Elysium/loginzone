import React from 'react';
import { StyleSheet, View } from 'react-native';
import LoginScreen from "./screens/LoginScreen";

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <LoginScreen />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#140034', // Set the background color of the entire app
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%', // Ensure the inner container takes full width
  },
});

export default App;