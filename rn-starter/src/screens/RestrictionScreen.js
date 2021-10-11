import React, {useState} from 'react'; 
import { Button, FlatList, ListItem, Text, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addRestr } from '../actions/actions';




const RestrictionScreen = ({navigation}) => {
  const [dairy, setDairy] = useState(false);
  const [egg, setEgg] = useState(false);
  const [gluten, setGluten] = useState(false);
  const [peanut, setPeanut]   = useState(false);

  const nickname = useSelector(state => state.nameReducer.nickname)
  
  const dispatch = useDispatch();  
  const addToList = (food, bool) => {
    if (bool) dispatch(addRestr(food))
  };

  return (
    <View>
      <Text>Hi {nickname}, select your food restrictions:</Text>
      <Button
      title="Dairy"
      onPress={() => setDairy(!dairy)}
      />
      <Text> {dairy ? "You've selected dairy" : ''} </Text>

      <Button
      title="Eggs"
      onPress={() => setEgg(!egg)}
      />
      <Text> {egg ? "You've selected eggs" : ''} </Text>

      <Button
      title="Gluten"
      onPress={() => setGluten(!gluten)}
      />
      <Text> {gluten ? "You've selected gluten" : ''} </Text>

      <Button
      title="Peanuts"
      onPress={() => setPeanut(!peanut)}
      />
      <Text> {peanut ? "You've selected peanuts" : ''} </Text>

      <Button
      title="Next"
      onPress={() => {
        addToList("dairy", dairy)
        addToList("egg", egg)
        addToList("gluten", gluten)
        addToList("peanut", peanut)
        navigation.navigate('Recommend')
      }}/>

    </View>
  );
};

const styles = StyleSheet.create({});


export default RestrictionScreen;