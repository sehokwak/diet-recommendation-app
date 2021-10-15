import React, {useState} from 'react'; 
import { Button, Text, StyleSheet, View, ImageBackground, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addDiet } from '../actions/actions';


// lacto vegetarian, ovo vegetarian, primal, 

const DietScreen = ({navigation}) => {
  
  const [pescetarian, setPescetarian] = useState(false);
  const [lacto, setLacto] = useState(false);
  const [ovo, setOvo] = useState(false);
  const [vegan, setVegan] = useState(false);
  const [vegetarian, setVegetarian] = useState(false);

  const nickname = useSelector(state => state.nameReducer.nickname)

  const dispatch = useDispatch();
  const addToList = (food, bool) => {
    if (bool) dispatch(addDiet(food))
  };

  return (
   
    <ImageBackground 
      source={require("../../assets/page3.png")}
      style={styles.container}
      >
      <Text style={styles.titleText}> Hi {nickname} !! {`\n`} Select your diet style! </Text>

      <TouchableOpacity 
        style={styles.button_1}
        onPress={() => setPescetarian(!pescetarian)}> 
        <Text style={styles.text_1}>
       Pescetarian
       </Text>
       </TouchableOpacity >

      {/* <Button 
      title="Pescetarian"
      color="hotpink"
      onPress={() => setPescetarian(!pescetarian)}
      /> */}
     
      <Text> {pescetarian ? "You've selected pescetarian" : ''} </Text>

      <TouchableOpacity 
        style={styles.button_2}
        onPress={() => setLacto(!lacto)}> 
        <Text style={styles.text_2}>
       Lacto Vegetarian
       </Text>
       </TouchableOpacity >

      {/* <Button
      title="Lacto Vegetarian"
      color="hotpink"
      onPress={() => setLacto(!lacto)}
      /> */}
      <Text> {lacto ? "You've selected Lacto Vegetarian" : ''} </Text>
      <TouchableOpacity 
        style={styles.button_3}
        onPress={() => setOvo(!ovo)}> 
        <Text style={styles.text_3}>
       Ovo Vegetarian
       </Text>
       </TouchableOpacity >

      {/* <Button
      title="Ovo Vegetarian"
      color="hotpink"
      onPress={() => setOvo(!ovo)}
      /> */}
      <Text> {ovo ? "You've selected Ovo Vegetarian" : ''} </Text>

      <TouchableOpacity 
        style={styles.button_4}
        onPress={() => setVegan(!vegan)}> 
        <Text style={styles.text_4}>
       Vegan
       </Text>
       </TouchableOpacity>

      {/* <Button
      title="Vegan"
      color="hotpink"
      onPress={() => setVegan(!vegan)}
      /> */}
      <Text> {vegan ? "You've selected vegan" : ''} </Text>

      <TouchableOpacity 
        style={styles.button_5}
        onPress={() => setVegetarian(!vegetarian)}> 
        <Text style={styles.text_5}>
       Vegetarian
       </Text>
       </TouchableOpacity>

      {/* <Button
      title="Vegetarian"
      color="hotpink"
      onPress={() => setVegetarian(!vegetarian)}
      /> */}
      <Text> {vegetarian ? "You've selected vegetarian" : ''} </Text>

      <Button
      title="Next"
      color="hotpink"
      onPress={() => {
        addToList("pescetarian", pescetarian)
        addToList("lacto vegetarian", lacto)
        addToList("ovo vegetarian", ovo)
        addToList("vegan", vegan)
        addToList("vegetarian", vegetarian)
        navigation.navigate('Restriction')
      }}/>

</ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#feeae9", 
    alignItems: 'center'
  },
  titleText: {
    color: "#121212", 
    fontSize: 21, 
  }, 
  button_1:{
    backgroundColor: "#e9b0ad",
    width: 200,
    height: 60, 
    borderColor: 'black', 
    borderWidth: 1
  }, 
  text_1:{
    color: "#121212",
    fontSize: 23, 
    textAlign: 'center'
  }, 
  button_2:{
    backgroundColor: "#e9b0ad",
    width: 200,
    height: 60, 
    borderColor: 'black', 
    borderWidth: 1
  }, 
  text_2:{
    color: "#121212",
    fontSize: 23, 
    textAlign: 'center'
  }, 
  button_3:{
    backgroundColor: "#e9b0ad",
    width: 200,
    height: 60, 
    borderColor: 'black', 
    borderWidth: 1
  }, 
  text_3:{
    color: "#121212",
    fontSize: 23, 
    textAlign: 'center'
  }, 
  button_4:{
    backgroundColor: "#e9b0ad",
    width: 200,
    height: 60, 
    borderColor: 'black', 
    borderWidth: 1
  }, 
  text_4:{
    color: "#121212",
    fontSize: 23, 
    textAlign: 'center'
  }, 
  button_5:{
    backgroundColor: "#e9b0ad",
    width: 200,
    height: 60, 
    borderColor: 'black', 
    borderWidth: 1
  }, 
  text_5:{
    color: "#121212",
    fontSize: 23, 
    textAlign: 'center'

  }
});


export default DietScreen;
