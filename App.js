import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/components/HomeScreen';
import AddTodoScreen from './src/components/AddTodoScreen'; // Import the AddTodoScreen component

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="AddTodo" component={AddTodoScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
