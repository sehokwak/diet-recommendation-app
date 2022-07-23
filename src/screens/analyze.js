import React from "react";
import { StyleSheet, View, Button, Image} from "react-native";

const Analyze = (hi) => {

  return( 
  <View style={styles.backgroundPage}>
    

    <Image
        source={require('../../assets/analyze_gif.gif')}
        style={{width: 320, height: 500 }}

      />
    <Button
            title="See the results!! "
            onPress={() => hi.navigation.navigate('Recommend')}/>

  
  </View> 
  );
};


const styles = StyleSheet.create({
  backgroundPage:{
    flex: 1,
    backgroundColor: "#fecbc2", 
    alignItems: 'center'

  }
  });
export default Analyze;

// Page 6 
