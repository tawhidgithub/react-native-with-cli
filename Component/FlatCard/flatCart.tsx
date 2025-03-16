import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCart() {
  return (
    <View>
      <Text style={styles.headerTitle}>Flat Cards </Text>
      <View style={styles.container}>
        <View style={[styles.box, styles.boxOne]}>
          <Text style={styles.boxTitle}>Green</Text>
        </View>
        <View style={[styles.box, styles.boxTwo]}>
          <Text style={styles.boxTitle}>Red</Text>
        </View>
        <View style={[styles.box, styles.boxThree]}>
          <Text style={styles.boxTitle}>Blue</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 25,
    paddingHorizontal: 20,
    color: '#fff',
    fontWeight: 'bold',
    paddingTop: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  box: {
    height: 100,
    width: 100,
    borderRadius: 20,
    margin: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxOne: {
    backgroundColor: '#A0C878',
  },
  boxTwo: {
    backgroundColor: '#D84040',
  },
  boxThree: {
    backgroundColor: '#00879E',
  },
  boxTitle: {},
});
