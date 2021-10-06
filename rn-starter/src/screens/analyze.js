import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const Analyze = (hi) => {

  return( 
  <View>

    <Text style={styles.text}>Analyzing Data</Text>
    <Button
            title="Next"
            onPress={() => hi.navigation.navigate('List')}/>

  
  </View> 
  );
};


const styles = StyleSheet.create({

    text: {
      marginTop: 100,
      paddingVertical: 8,
      borderWidth: 1,
      borderColor: "#20232a",
      borderRadius: 6,
      backgroundColor: "#f3fb61",
      color: "#20232a",
      textAlign: "center",
      fontSize: 30,
      fontWeight: "bold"
    }
  });
export default Analyze;
