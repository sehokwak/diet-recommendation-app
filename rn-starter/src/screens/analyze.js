import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const Analyze = (hi) => {

  return( 
  <View style={styles.backgroundPage}>
    

    <Text style={styles.text}>Analyzing Data</Text>
    <Button
            title="See the results!! "
            onPress={() => hi.navigation.navigate('Recommend')}/>

  
  </View> 
  );
};


const styles = StyleSheet.create({
  backgroundPage:{
    flex: 1,
    backgroundColor: "#feeae9", 
    alignItems: 'center'

  },
  

    text: {
      marginTop: 150,
      color: "#f08080",
      textAlign: "center",
      fontSize: 35,
    }
  });
export default Analyze;

// Page 6 
