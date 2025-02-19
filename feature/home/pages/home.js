import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import Car from '../components/car';
import Main from '../components/main';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Car />
      <Main/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222222',
    alignItems: 'center',
  },
});

export default Home;
