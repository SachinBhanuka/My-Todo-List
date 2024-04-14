import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'; // Import Feather icons from Expo vector-icons

const AddTodoScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add New Todo</Text>
            <Text style={styles.label}>Title</Text>
            <TextInput
                style={styles.input}
                placeholder="My new todo title"
            />
            <Text style={styles.label}>Description</Text>
            <TextInput
                style={[styles.input, styles.descriptionInput]}
                placeholder="This is the description of my new todo"
                multiline
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={[styles.button, styles.cancelButton]}
                    onPress={() => navigation.goBack()} // Navigate back to Home screen
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Feather name="delete" size={24} color="black" />
                        <Text style={{ marginLeft: 5, color: 'black' }}>Cancel</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, styles.saveButton]}
                    // Implement save functionality
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
        justifyContent: 'flex-start',
        alignItems: 'stretch',
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
        alignItems: 'center',
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
    },
    button: {
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: '48%', // Set width to 48% to leave space for margins
    },
    cancelButton: {
        backgroundColor: '#f00', // Red background color for cancel button
    },
    saveButton: {
        backgroundColor: '#0f0', // Green background color for save button
    },
});

export default AddTodoScreen;
