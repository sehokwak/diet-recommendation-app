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
      title="Let's Start!"
      onPress={() => props.navigation.navigate('List')}
      />
    <Button
      title="Go to Image"
      onPress={() => props.navigation.navigate('Image')}
      />
      <Button
      title="Go to Text"
      onPress={() => props.navigation.navigate('Text')}
      />
      
   

   
    
  </View> 
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
