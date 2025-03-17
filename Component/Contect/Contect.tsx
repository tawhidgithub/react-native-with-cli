import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {UserData} from '../../Data/data';
import ContactComponent from '../ActionCard/contectComponent';

const Contact: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Contact</Text>
      {UserData.map((user, index) => (
        <ContactComponent
          key={index}
          name={user.name}
          email={user.email}
          imageUel={user.imageUrl}
        />
      ))}
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold',
    paddingTop: 10,
  },
  container: {
    marginHorizontal: 10,
  },
});
