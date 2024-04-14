import React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const todos = [
    { id: 1, text: 'Buy groceries' },
    { id: 2, text: 'Finish homework' },
    { id: 3, text: 'Go for a run' },
];

const MainScreen = () => {
    const navigation = useNavigation();

    const handleAddTodoPress = () => {
        navigation.navigate('AddTodo');
    };

    const renderTodoItem = ({ item }) => (
        <TouchableOpacity style={styles.todoItem}>
            <Text style={styles.todoText}>{item.text}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>My Todo List</Text>
            <View style={styles.line} />
            <FlatList
                data={todos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderTodoItem}
            />
            <TouchableOpacity style={styles.addButton} onPress={handleAddTodoPress}>
                <View style={styles.addButtonCircle}>
                    <Text style={styles.addButtonTitle}>+</Text>
                </View>
                <Text style={styles.addButtonLabel}>Add New Todo</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    line: {
        width: '100%',
        height: 1,
        backgroundColor: '#ccc',
        marginBottom: 10,
    },
    todoItem: {
        backgroundColor: '#0D98BA',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    todoText: {
        fontSize: 16,
    },
    addButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00f',
        padding: 10,
        borderRadius: 5,
        marginBottom: 20,
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
    },
    addButtonCircle: {
        backgroundColor: '#0f0',
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    addButtonTitle: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    addButtonLabel: {
        fontSize: 16,
        color: '#fff',
        textAlignVertical: 'center',
    },
});

export default MainScreen;
