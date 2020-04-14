import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export const Todo = ({ todo, onRemove }) => {
    const longPressHandler = () => {
        onRemove(todo.id)
    }

    return (
        <TouchableOpacity 
            activeOpacity={0.7} 
            onPress={() => console.log('Pressed', todo.id)}
            onLongPress={longPressHandler}
            //onLongPress={onRemove.bind(null, todo.id)}
        > 
            <View style={styles.todo}>
                <Text>{todo.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 2,
        borderColor: '#e6e6e6',
        marginBottom: 10,
        borderRadius: 4
    }
})