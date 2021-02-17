import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lightning List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ff6348',
    paddingTop: 40,
    paddingBottom: 10
  },
  header: {
    fontSize: 24,
    textAlign: 'center',
    color: '#fff',
    fontWeight: '500',
    letterSpacing: 1
  },
});

export default Header;
