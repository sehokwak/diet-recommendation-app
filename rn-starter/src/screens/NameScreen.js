import React, {useState} from 'react'; 
import { Button, Text, TextInput, StyleSheet, View } from 'react-native';
import {useDispatch} from 'react-redux'
import { addName } from '../actions/actions';



const NameScreen = ({navigation}) => {
  const [name, setName] = useState('');

  const dispatch = useDispatch();
  const submitName = (nickname) => dispatch(addName(nickname));

  return (
    <View>
      <Text>What's your name?</Text>
      <TextInput 
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false} 
        placeholder='Enter your nickname!'
        value = {name} 
        onChangeText={(newValue) => setName(newValue) }
        /> 
      <Text> Your nickname is {name} </Text>     
      <Button
        title="Next"
        onPress={() => {
          submitName(name)
          navigation.navigate('Diet')
        }}/>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 20, 
    borderColor: 'black', 
    borderWidth: 1
}
});


export default NameScreen;