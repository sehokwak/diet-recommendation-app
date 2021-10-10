import React from 'react'; 
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'; 


const ImageScreen = () => {
    return <View> 
        
        <ImageDetail title="Box" imageSource={require('../../assets/Slice_1.png')} />
  
    </View>
  };
  
  const styles = StyleSheet.create({
    slice1: {
      width: 818,
      height: 840,
    }
  });
  
  export default ImageScreen;