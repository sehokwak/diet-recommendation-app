import React, {useState} from 'react'; 
import { Button, Text, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addDiet } from '../actions/actions';


// lacto vegetarian, ovo vegetarian, primal, 

const DietScreen = ({navigation}) => {
  const [paleo, setPaleo] = useState(false);
  const [pescetarian, setPescetarian] = useState(false);
  const [vegan, setVegan] = useState(false);
  const [vegetarian, setVegetarian] = useState(false);

  const nickname = useSelector(state => state.nameReducer.nickname)

  const dispatch = useDispatch();
  const addToList = (food, bool) => {
    if (bool) dispatch(addDiet(food))
  };

  return (
    <View style={styles.container}>   
    
      <Text style={styles.titleText}>Hi {nickname}, select your diet style! </Text>
      <Button 
      title="Paleo"
      onPress={() => setPaleo(!paleo)}
      />
      <Text> {paleo ? "You've selected paleo" : ''} </Text>

      <Button
      title="Pescetarian"
      onPress={() => setPescetarian(!pescetarian)}
      />
      <Text> {pescetarian ? "You've selected pescetarian" : ''} </Text>

      <Button
      title="Vegan"
      onPress={() => setVegan(!vegan)}
      />
      <Text> {vegan ? "You've selected vegan" : ''} </Text>

      <Button
      title="Vegetarian"
      onPress={() => setVegetarian(!vegetarian)}
      />
      <Text> {vegetarian ? "You've selected vegetarian" : ''} </Text>

      <Button
      title="Next"
      onPress={() => {
        addToList("paleo", paleo)
        addToList("pescetarian", pescetarian)
        addToList("vegan", vegan)
        addToList("vegetarian", vegetarian)
        navigation.navigate('Restriction')
      }}/>

    </View>
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
});


export default DietScreen;

// Page 3 