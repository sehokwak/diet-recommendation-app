import React, {useState} from 'react'; 
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'; 

const TextScreen = (hello) => {
    const [name, setName] = useState('')
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
            autoCapitalize="none"
            autoCorrect={false} 
            /> 
            <Text> Vegan, Vegetarian, Gluten-Free, None</Text>
            <Text>                            </Text>
            <Text>                            </Text>
            <Text>Food Restrictions? </Text>
            <TextInput 
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false} 
            /> 
            <Text> Peanuts, Soy, Pork, Eggs, Dairy, Fish, Wheat, None</Text>
            <Text>                            </Text>
            <Text>                            </Text>
            <Text>Preferred Food? What is in your Fridge? </Text>
            <TextInput 
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false} 
            /> 
            <Text> Eggs, Broccoli, Beans, Chicken, Beef, Lamb, Milk</Text>
            
           
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