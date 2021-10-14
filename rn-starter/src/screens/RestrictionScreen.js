import React, {useState} from 'react'; 
import { Button, ScrollView, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addRestr } from '../actions/actions';




const RestrictionScreen = ({navigation}) => {
  const [dairy, setDairy] = useState(false);
  const [egg, setEgg] = useState(false);
  const [gluten, setGluten] = useState(false);
  const [peanut, setPeanut]   = useState(false);
  const [sesame, setSesame] = useState(false);
  const [seafood, setSeafood] = useState(false);
  const [shellfish, setShellfish] = useState(false);
  const [soy, setSoy] = useState(false);
  const [sulfite, setSulfite] = useState(false);
  const [treenut, setTreenut] = useState(false);
  const [wheat, setWheat] = useState(false);


  const nickname = useSelector(state => state.nameReducer.nickname)
  
  const dispatch = useDispatch();  
  const addToList = (food, bool) => {
    if (bool) dispatch(addRestr(food))
  };


  return (
    <ScrollView style={styles.container}>   

      <Text style={styles.titleText}>Hi {nickname}, select your food restrictions:</Text>
      <Button
      title="Dairy"
      onPress={() => setDairy(!dairy)}
      />
      <Text> {dairy ? "You've selected dairy" : ''} </Text>

      <Button
      title="Egg"
      onPress={() => setEgg(!egg)}
      />
      <Text> {egg ? "You've selected egg" : ''} </Text>

      <Button
      title="Gluten"
      onPress={() => setGluten(!gluten)}
      />
      <Text> {gluten ? "You've selected gluten" : ''} </Text>

      <Button
      title="Peanut"
      onPress={() => setPeanut(!peanut)}
      />
      <Text> {peanut ? "You've selected peanut" : ''} </Text>

      <Button
      title="Sesame"
      onPress={() => setSesame(!sesame)}
      />
      <Text> {sesame ? "You've selected sesame" : ''} </Text>

      <Button
      title="Seafood"
      onPress={() => setSeafood(!seafood)}
      />
      <Text> {seafood ? "You've selected seafood" : ''} </Text>

      <Button
      title="Shellfish"
      onPress={() => setShellfish(!shellfish)}
      />
      <Text> {shellfish ? "You've selected shellfish" : ''} </Text>

      <Button
      title="Soy"
      onPress={() => setSoy(!soy)}
      />
      <Text> {soy ? "You've selected soy" : ''} </Text>

      <Button
      title="Sulfite"
      onPress={() => setSulfite(!sulfite)}
      />
      <Text> {sulfite ? "You've selected sulfite" : ''} </Text>

      <Button
      title="Tree Nut"
      onPress={() => setTreenut(!treenut)}
      />
      <Text> {treenut ? "You've selected tree nut" : ''} </Text>
      
      <Button
      title="Wheat"
      onPress={() => setWheat(!wheat)}
      />
      <Text> {wheat ? "You've selected wheat" : ''} </Text>      

      <Button
      title="Next"
      onPress={() => {
        addToList("dairy", dairy)
        addToList("egg", egg)
        addToList("gluten", gluten)
        addToList("peanut", peanut)
        addToList("sesame", sesame)
        addToList("seafood", seafood)
        addToList("shellfish", shellfish)
        addToList("soy", soy)
        addToList("sulfite", sulfite)
        addToList("tree nut", treenut)
        addToList("wheat", wheat)
        navigation.navigate('Analyze')
      }}/>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#feeae9", 
    // alignItems: 'center'
  },
  titleText: {
    color: "#121212", 
    fontSize: 20, 
  }
});


export default RestrictionScreen;

// Page 4 