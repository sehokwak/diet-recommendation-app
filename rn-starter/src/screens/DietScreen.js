import React, {useState} from 'react'; 
import { Button, Text, StyleSheet, View } from 'react-native';
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

    <View style={styles.container}>   
    
      <Text style={styles.titleText}>Hi {nickname}, select your diet style! </Text>

      <Button
      title="Pescetarian"
      onPress={() => setPescetarian(!pescetarian)}
      />
      <Text> {pescetarian ? "You've selected pescetarian" : ''} </Text>

      <Button
      title="Lacto Vegetarian"
      onPress={() => setLacto(!lacto)}
      />
      <Text> {lacto ? "You've selected Lacto Vegetarian" : ''} </Text>

      <Button
      title="Ovo Vegetarian"
      onPress={() => setOvo(!ovo)}
      />
      <Text> {ovo ? "You've selected Ovo Vegetarian" : ''} </Text>

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
        addToList("pescetarian", pescetarian)
        addToList("lacto vegetarian", lacto)
        addToList("ovo vegetarian", ovo)
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