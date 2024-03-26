import React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const todos = [
    { id: 1, text: 'Buy groceries' },
    { id: 2, text: 'Finish homework' },
    { id: 3, text: 'Go for a run' },
];

const MainScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>My Todo List</Text>
            <View style={styles.line} />
            <FlatList
                data={todos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.todoItem}>
                        <Text style={styles.todoText}>{item.text}</Text>
                    </TouchableOpacity>
                )}
            />
            <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonTitle}>+ Add New Todo</Text>
            </TouchableOpacity>
            {/* Add other components here */}
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'flex-start', // Align items to the left
      backgroundColor: '#f0f0f0',
      padding: 20,
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
      backgroundColor: '#f9f9f9', // Light background color
      padding: 10,
      marginBottom: 10,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#ccc',
      borderLeftWidth: 5, // Add left border
      borderLeftColor: '#aee', // Light blue color for the vertical bars
  },
  todoText: {
      fontSize: 16,
  },
  addButton: {
      backgroundColor: '#00f',
      padding: 10,
      borderRadius: 5,
      marginTop: 20,
  },
  addButtonTitle: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
  },
});

export default MainScreen;
