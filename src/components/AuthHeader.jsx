import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useFonts } from "expo-font";


const AuthHeader = ({name, subtitle}) => {
  const [fontsloaded] = useFonts({
    'Roboto-Bold': require('../../assets/fonts/NotoSans-Bold.ttf')
  });
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  )
}

export default AuthHeader

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        width: '100%',
        // backgroundColor: '#fff',
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        letterSpacing: 1,
        color: 'white',
        fontFamily: 'Roboto-Bold'
    },
    subtitle: {
        fontSize: 20,
        fontWeight: '700',
        letterSpacing: 1,
        color: 'white',
        fontFamily: 'NotoSansBold'
    }
})