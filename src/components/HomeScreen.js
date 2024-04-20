import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({ navigation, route }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const savedTodos = await AsyncStorage.getItem('todos');
        if (savedTodos) {
          setTodos(JSON.parse(savedTodos));
        }
      } catch (error) {
        console.error('Failed to load todos from AsyncStorage:', error);
      }
    };

    loadTodos();
  }, []);

  useEffect(() => {
    const saveTodos = async () => {
      try {
        await AsyncStorage.setItem('todos', JSON.stringify(todos));
      } catch (error) {
        console.error('Failed to save todos to AsyncStorage:', error);
      }
    };

    saveTodos();
  }, [todos]);

  useEffect(() => {
    if (route.params?.newTodo) {
      // Update todos state with the new todo item
      setTodos((prevTodos) => [...prevTodos, route.params.newTodo]);
      
      // Navigate back to the AddTodo screen
      navigation.navigate('AddTodo');
    }
  }, [route.params?.newTodo]);
  

  const toggleExpand = (todoId) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === todoId ? { ...todo, expanded: !todo.expanded } : todo
      )
    );
  };

  const markTodoAsFinished = (todoId) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === todoId ? { ...todo, finished: !todo.finished } : todo
      )
    );
  };

  const deleteTodo = (todoId) => {
    Alert.alert(
      'Delete Todo',
      'Are you sure you want to delete this todo?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () =>
            setTodos((prevTodos) =>
              prevTodos.filter((todo) => todo.id !== todoId)
            ),
        },
      ],
      { cancelable: true }
    );
  };

  const renderTodoItem = ({ item }) => (
    <View>
      <TouchableOpacity onPress={() => toggleExpand(item.id)} style={styles.todoItem}>
        <Text style={styles.todoText}>{item.title}</Text>
        <TouchableOpacity onPress={() => toggleExpand(item.id)}>
          <Ionicons
            name={item.expanded ? 'caret-up' : 'caret-down'}
            size={30}
            color="black"
          />
        </TouchableOpacity>
      </TouchableOpacity>
      {item.expanded && (
        <View style={styles.expandedContent}>
          <Text style={styles.description}>{item.description}</Text>
          <View style={styles.controlPanel}>
            {!item.finished && (
              <TouchableOpacity onPress={() => markTodoAsFinished(item.id)}>
                <Ionicons name="checkmark-circle-outline" size={24} color="green" />
              </TouchableOpacity>
            )}
            <TouchableOpacity onPress={() => deleteTodo(item.id)}>
              <Ionicons name="trash-outline" size={24} color="red" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Todo List</Text>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderTodoItem}
        style={styles.flatList}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddTodo')}
      >
        <View style={styles.addButtonCircle}>
          <Text style={styles.addButtonLabel}>+</Text>
        </View>
        <Text style={styles.addButtonLabelText}>Add New Todo</Text>
      </TouchableOpacity>
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
  flatList: {
    marginTop: 10,
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  todoText: {
    fontSize: 16,
    flex: 1,
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
  addButtonLabel: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  addButtonLabelText: {
    fontSize: 24,
    color: '#fff',
    textAlignVertical: 'center',
  },
  expandedContent: {
    padding: 10,
    backgroundColor: '#f9f9f9',
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  controlPanel: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export default HomeScreen;
