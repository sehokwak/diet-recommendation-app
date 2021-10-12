import React, {useState} from 'react'; 
import { Button, Text, TextInput, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import {useDispatch} from 'react-redux'
import { addName } from '../actions/actions';

const NameScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const submitName = (nickname) => dispatch(addName(nickname));

  return (
    <View style={styles.container}>   
        <Text style={styles.whatIsYourName}>What is your nickname?</Text>

        <TextInput 
        style={styles.input_1}
        autoCapitalize="none"
        autoCorrect={false} 
        placeholder='Enter your nickname!'
        value = {name} 
        onChangeText={(newValue) => setName(newValue) }
        />
        <Text style={styles.answer}> Your nickname is {name} </Text>
        
        <Text style={styles.whatIsYourAge}>What is your age? </Text>

        <TextInput 
         style={styles.input_2}
         autoCapitalize="none"
         autoCorrect={false} 
         placeholder='ex) 20, 25, 30, 45, 60 '
         /> 

        <Text style={styles.whatIsYourGender}>What is your gender? </Text>


         <TextInput 
         style={styles.input_3}
         autoCapitalize="none"
         autoCorrect={false} 
         placeholder='ex) female,male, other '
         />  

        <TouchableOpacity 
      onPress={() => {
        submitName(name)
        navigation.navigate('Diet')
      }}
      >
          <Image 
          source={require('../../assets/next_button.png')}
          resizeMode="contain"
          style={styles.next} 

          />
        </TouchableOpacity>

      
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#feeae9", 
        alignItems: 'center'
      },
      whatIsYourName: {
        color: "#121212", 
        fontSize: 25, 
        position: "absolute", 
        top: 20
      }, 
      whatIsYourAge: {
        color: "#121212", 
        fontSize: 25, 
        position: "absolute", 
        top: 180
      }, 
      whatIsYourGender: {
        color: "#121212", 
        fontSize: 25, 
        position: "absolute", 
        top: 300

      }, 

    input_1: {
    margin: 50, 
 
    borderColor: 'white', 
    borderWidth: 5, 
    top: 30
}, 
input_2: {
    margin: 50, 
    borderColor: 'white', 
    borderWidth: 5, 
    top: 30
}, 
input_3: {
    margin: 50, 
    borderColor: 'white', 
    borderWidth: 5, 
    top: 50
}, 
      answer: {
        fontWeight: 'bold',
        fontSize: 17,  
        color: "#121212", 
      },

      next: {
        width: 143,
        height: 137, 
        alignItems: 'center', 
        top: 100, 
      },
     
});


export default NameScreen;


