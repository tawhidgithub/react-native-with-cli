import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevatedCart() {
  return (
    <View>
      <Text style={styles.headerTitle}>ElevatedCart</Text>

      <ScrollView horizontal={true}>
        <View style={[styles.box]}>
          <Text>Text</Text>
        </View>
        <View style={[styles.box]}>
          <Text>Text</Text>
        </View>
        <View style={[styles.box]}>
          <Text>Text</Text>
        </View>
        <View style={[styles.box]}>
          <Text>Text</Text>
        </View>
        <View style={[styles.box]}>
          <Text>Text</Text>
        </View>
        <View style={[styles.box]}>
          <Text>Text</Text>
        </View>
        <View style={[styles.box]}>
          <Text>Text</Text>
        </View>
        <View style={[styles.box]}>
          <Text>Text</Text>
        </View>
        <View style={[styles.box]}>
          <Text>Text</Text>
        </View>
        <View style={[styles.box]}>
          <Text>Text</Text>
        </View>
        <View style={[styles.box]}>
          <Text>Text</Text>
        </View>
        <View style={[styles.box]}>
          <Text>Text</Text>
        </View>
        <View style={[styles.box]}>
          <Text>Text</Text>
        </View>
      </ScrollView>
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
  box: {
    height: 100,
    width: 100,
    borderRadius: 20,
    margin: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B7B1F2',
  },
});
