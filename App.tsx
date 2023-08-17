import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';

import Home from './src/views/Home/Home';
export default function App() {
  return (
    <SafeAreaView style={styles.view}>
      <Home/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1
  }
})