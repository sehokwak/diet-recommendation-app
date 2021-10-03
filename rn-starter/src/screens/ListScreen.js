import React from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'Food #1', key: '1'}, 
        { name: 'Food #2', key: '2'}, 
        { name: 'Food #3', key: '3'}, 
        { name: 'Food #4', key: '4'}, 
        { name: 'Food #5', key: '5'}, 
        { name: 'Food #6', key: '6'}, 
        { name: 'Food #7', key: '7'}, 
        { name: 'Food #8', key: '8'}, 
        { name: 'Food #9', key: '9'}
    ];

    return (
    <FlatList 
    data={friends} 
    renderItem= {({item}) => {
        return <Text style={styles.textStyle}>{item.name}</Text>;
    }}
    />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
}); 

export default ListScreen; 