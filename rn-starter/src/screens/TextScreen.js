import React, {useState} from 'react'; 
import { View, Text, StyleSheet, TextInput, Button, Checkbox } from 'react-native'; 

const TextScreen = (hello) => {
    const [name, setName] = useState('')
    const [diet, setDiet] = useState('')
    const [restriction, setRestriction] = useState('')
    const [preferences, setPreferences] = useState('')

    return (
        <View> 
            <Text>Enter your nickname: </Text>
            <TextInput 
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false} 
            value = {name} 
            onChangeText={(newValue) => setName(newValue) }
            /> 
            <Text> Your nickname is {name} </Text>     
            <Text>                            </Text>
            <Text>                            </Text>
            <Text>What is your diet? Choose?: </Text>
            <TextInput 
            style={styles.input}
            placeholder='paleo, pescetarian, vegan, vegetarian'
            autoCapitalize="none"
            autoCorrect={false} 
            value = {diet} 
            onChangeText={(newValue) => setDiet(newValue) }
            /> 
            <Text>                            </Text>
            <Text>                            </Text>
            <Text>Food Restrictions? </Text>
            <TextInput 
            style={styles.input}
            placeholder='dairy, egg, gluten, peanut, sesame, etc.'
            autoCapitalize="none"
            autoCorrect={false} 
            value = {restriction} 
            onChangeText={(newValue) => setRestriction(newValue) }
            /> 
            <Text>                            </Text>
            <Text>                            </Text>
            <Text>Preferred Food? What is in your Fridge? </Text>
            <TextInput 
            style={styles.input}
            placeholder='eggs, broccoli, beans, chicken, onions, etc.'
            autoCapitalize="none"
            autoCorrect={false} 
            value = {preferences} 
            onChangeText={(newValue) => setPreferences(newValue) }
            /> 
                        
           
            <Button
            title="Next"
            onPress={() => hello.navigation.navigate('Analyze')}/>

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

export default TextScreen; 