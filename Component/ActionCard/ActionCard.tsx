import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const ActionCard = () => {
  function openUrl(WebUrl: string) {
    Linking.openURL(WebUrl);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Action Card</Text>
      <View style={styles.cardBody}>
        <Image
          style={styles.cardImage}
          source={{
            uri: 'https://media.istockphoto.com/id/1399246824/photo/digital-eye-wave-lines-stock-background.jpg?s=612x612&w=0&k=20&c=1cW5xuLcb6HPDj6CLQQFBvGK5_fJvx9eA2egik-3hAc=',
          }}
        />
        <View style={styles.bodyBottomPart}>
          <Text style={styles.cardTitle}>Eye ball</Text>
          <Text style={styles.cardSub}>Mymensing,Dhake,bangladesh.</Text>
          <Text style={styles.cardDis}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic
          </Text>
        </View>
        <View style={styles.footerSection}>
          <TouchableOpacity
            onPress={() => {
              openUrl('https://www.lipsum.com/');
            }}>
            <Text style={{color: 'blue', padding: 10}}>Read more</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ActionCard;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold',
    paddingTop: 10,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 12,
  },
  cardImage: {
    height: 180,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  cardTitle: {fontSize: 24, fontWeight: 'bold'},
  cardSub: {
    fontSize: 15,
    fontWeight: '500',
  },
  cardDis: {
    lineHeight: 18,
    letterSpacing: 1,
  },
  bodyBottomPart: {
    marginVertical: 10,
    paddingHorizontal: 10,
    gap: 8,
  },
  footerSection: {},
});
