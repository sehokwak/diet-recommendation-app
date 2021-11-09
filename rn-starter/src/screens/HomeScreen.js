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
      onPress={() => props.navigation.navigate('Name')}
      >
          <Image 
          source={require('../../assets/Slice_4.png')}
          style={styles.button} 

          />
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
    backgroundColor: "#feeae9", 

  },
  stretch: {
    width: 375, 
    height: 450,
    resizeMode: 'stretch',
  },
  button: {
    alignItems: "center",
    width: 200,
    height: 100, 
    top: 10
  },
});

export default Homescreen;

// Page 1 



