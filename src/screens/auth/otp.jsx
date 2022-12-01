import { Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

const Otp = () => {
  const route = useRoute()
  const navigation = useNavigation()
  const { Phone } = route.params
  let arr = Phone.split("")
  arr.shift()
  const newarr = arr.join("")
  return (
    <View style={styles.container}>
          <Text style={styles.title}> An SMS code was sent to</Text>
          <Text style={styles.subtitle}>{`+234 ${newarr}`}</Text>
          {/* <Pressable onPress={()=> navigation.goBack()}>
          <Text style={styles.edit}> Edit Number</Text>
          </Pressable> */}
    </View>
  )
}

export default Otp

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    backgroundColor: 'white',
    flex: 1
  },
  title: { 
  marginTop: 40, 
   fontFamily: 'NotoSans-Medium', 
  fontSize: 20, 
  alignSelf:'flex-start', 
  marginLeft: 20, 
  marginBottom: 0, 
  color: 'grey', 
  fontWeight:'600', 
},
  subtitle: { 
    marginTop: 3, 
    fontFamily: 'NotoSans-Bold', 
    fontSize: 18, 
    alignSelf:'flex-start', 
    marginLeft: 20, 
    marginBottom: 0
  },
  edit: {
    color: 'green',
    marginLeft: 21,
    fontFamily: 'NotoSans-Medium',
    fontSize: 18
  }
})