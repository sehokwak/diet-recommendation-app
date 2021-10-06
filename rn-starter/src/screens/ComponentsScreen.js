import React from 'react'; 
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const about_this_app = <Text style={styles.subHeaderStyle}>Food recipes and ingredients list for this week.</Text>;
    

    return( 
    <View> 
        <Text style={styles.textStyle}>Ingredient Lists & recipes for this week! </Text>
        <Text>{about_this_app}</Text>

    </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20
    }, 
    HeaderStyle1: {
        fontSize: 20
    },
    subHeaderStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen; 