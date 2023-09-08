import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'

const Background = ({children}) => {
  return (
    <ImageBackground source={require("../assets/bg2.png")} resizeMode='contain' blurRadius={8} style={styles.image} >
        <View style={{position:'absolute',}}>
            {children}
        </View>
    </ImageBackground>
  )
}

export default Background

const styles = StyleSheet.create({
    image: {
        height:'100%',
        width:'100%'
      },
})