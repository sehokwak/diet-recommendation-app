import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity} from 'react-native';

const Homescreen = (props) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.stretch}
        source={require('../../assets/Slice_2.png')}
      />
      <TouchableOpacity 
      style={styles.button} 
      onPress={() => props.navigation.navigate('Name')}
      >
          <Image source={require('../../assets/Slice_4.png')}/>
        </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 50, 
  },
  stretch: {
    width: 600,
    height: 400,
    resizeMode: 'stretch',
  },
  button: {
    alignItems: "center",
    width: 350,
    height: 90, 
  },
});

export default Homescreen;

// Page 1 



  