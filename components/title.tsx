import { StyleSheet, Image, View } from 'react-native'
import React from 'react'

const Title = () => {
  return (
    <View>
      <View style={{marginTop:40}}>
        <Image
         source={{uri: 'https://cdn-icons-png.flaticon.com/512/6193/6193980.png'}}
         style={styles.banner}
         />
      </View>
    </View>
  )
}

export default Title

const styles = StyleSheet.create({
  banner:{
    height:400,
    width:370,
    resizeMode:"contain"
  }
})