import {SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCart from './Component/FlatCard/flatCart';
import ElevatedCart from './Component/ElevatedCart/ElevatedCart';
import Card from './Component/Card/Card';
import ActionCard from './Component/ActionCard/ActionCard';
import Contact from './Component/Contect/Contect';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCart />
        <ElevatedCart />
        <Card />
        <ActionCard />
        <Contact />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
