import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {

  return( 
  <View>

    <Text style={styles.text}>Trillion Box</Text>

    <Button 
    onPress={() => props.navigation.navigate('Components')}
    title= "App Instructions"
    />
      <Button
      title="Start Trillion Box"
      onPress={() => props.navigation.navigate('Name')}
      />
  
  </View> 
  );
};


const styles = StyleSheet.create({

  text: {
    marginTop: 100,
    paddingVertical: 8,
    borderWidth: 2,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#f3fb61",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  }

});



export default HomeScreen;



  