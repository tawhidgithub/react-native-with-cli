import {SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCart from './Component/FlatCard/flatCart';
import ElevatedCart from './Component/ElevatedCart/ElevatedCart';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCart />
        <ElevatedCart />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
