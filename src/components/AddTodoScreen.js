import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

const AddTodoScreen = () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSaveTodo = () => {
    if (title.trim() === '' || description.trim() === '') {
      return;
    }

    // Create a new todo item
    const newTodo = {
      id: Math.random(), // Generate a unique ID
      title,
      description,
      expanded: false,
    };

    // Display a toast notification for successful addition
    ToastAndroid.show('Todo Added Successfully.', ToastAndroid.SHORT);

    // Clear input fields
    setTitle('');
    setDescription('');

    // Pass the new todo item to the HomeScreen and remain on the AddTodoScreen
    navigation.navigate('Home', { newTodo });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Todo</Text>
      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.input}
        placeholder="My new todo title"
        value={title}
        onChangeText={setTitle}
      />
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={[styles.input, styles.descriptionInput]}
        placeholder="This is the description of my new todo"
        multiline
        value={description}
        onChangeText={setDescription}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.cancelButton]}
          onPress={() => navigation.goBack()}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Feather name="arrow-left" size={24} color="black" />
            <Text style={{ marginLeft: 5, color: 'black' }}>Back</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.saveButton]}
          onPress={handleSaveTodo}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Feather name="save" size={24} color="black" />
            <Text style={{ marginLeft: 5, color: 'black' }}>Save</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  descriptionInput: {
    height: 100,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  cancelButton: {
    backgroundColor: '#f00',
  },
  saveButton: {
    backgroundColor: '#0f0',
  },
});

export default AddTodoScreen;
