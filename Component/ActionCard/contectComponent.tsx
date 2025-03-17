import { Image, StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'

interface contactProp{
    
    
    name:string,
    imageUel:string,
    email:string
    
    }
const ContactComponent:FC<contactProp> = ({name,email,imageUel}) => {

  return (
     <View style={styles.contactBody}>
        <View style={styles.contactSection}>
          <View style={styles.imageBox}>
            <Image
              style={styles.contactImage}
              source={{
                uri: imageUel,
              }}
            />
          </View>
          <View style={styles.contactDataSection}>
            <View style={styles.contactData}>
              <Text style={styles.contactTitle}>{name}</Text>
              <Text style={styles.contactEmail}>{email}</Text>
            </View>
          </View>
        </View>
      </View>
  )
}

export default ContactComponent

const styles = StyleSheet.create({
    contactBody: {
        marginTop: 10,
        backgroundColor: '#B9B28A',
        padding: 8,
        borderRadius: 12,
      },
      contactSection: {
        flex: 1,
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
      },
      contactImage: {
        height: 80,
        width: 80,
        borderRadius: 50,
      },
      contactDataSection: {},
      contactData: {},
      contactTitle: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      contactEmail: {},
      imageBox: {},
})