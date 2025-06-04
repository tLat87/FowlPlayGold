import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    TextInput,
    Platform, Image,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import AddMarkScreen from './AddMarkScreen';

const animalOptions = ['Chicken', 'Duck', 'Goose', 'Goat', 'Gow', 'Pig'];

const AddAnimalScreen = ({navigation}) => {
    const [selectedAnimal, setSelectedAnimal] = useState('Chicken');
    const [numberOfAnimals, setNumberOfAnimals] = useState('');
    const [age, setAge] = useState('');
    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);

    const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowDatePicker(Platform.OS === 'ios');
        console.log(currentDate);
        setDate(currentDate);
    };

    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Image source={require('../assets/img/weui_arrow-filled.png')}/>
            </TouchableOpacity>

            <Text style={styles.title}>Add animal</Text>

            <View style={styles.emojiWrapper}>
                <Image source={require('../assets/img/IMG_84661fwqf.png')}/>
            </View>

            <Text style={styles.label}>Type of animal</Text>

            {animalOptions.map((animal) => (
                <TouchableOpacity
                    key={animal}
                    style={[
                        styles.optionButton,
                        selectedAnimal === animal && styles.optionSelected,
                    ]}
                    onPress={() => setSelectedAnimal(animal)}
                >
                    <Text
                        style={[
                            styles.optionText,
                            selectedAnimal === animal && styles.optionTextSelected,
                        ]}
                    >
                        {animal}
                    </Text>
                </TouchableOpacity>
            ))}

            <TextInput
                style={styles.input}
                placeholder="Number of animals"
                placeholderTextColor="#999"
                keyboardType="numeric"
                value={numberOfAnimals}
                onChangeText={setNumberOfAnimals}
            />

            <Text style={styles.label}>Date of Acquisition</Text>
            <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.input}>
                <Text style={styles.dateText}>
                    {date.toLocaleDateString()}
                </Text>
            </TouchableOpacity>

            {showDatePicker && (
                <DateTimePicker
                    value={date}
                    textColor="#fff"
                    mode="date"
                    display="spinner"
                    onChange={onChangeDate}
                />
            )}

            <TextInput
                style={styles.input}
                placeholder="Age"
                placeholderTextColor="#999"
                keyboardType="numeric"
                value={age}
                onChangeText={setAge}
            />

            <TouchableOpacity style={styles.checkButton} onPress={() => {navigation.navigate('AddMarkScreen', {selectedAnimal, numberOfAnimals, age, date: date.toISOString(),
            })}}>
                <Image source={require('../assets/img/Icon.png')}/>
            </TouchableOpacity>
            <View style={{marginBottom: 50}}/>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        padding: 20,
        paddingTop: 80,
    },
    backButton: {
        marginBottom: 10,
    },
    title: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold',
        alignSelf: 'center',
        marginBottom: 10,
    },
    emojiWrapper: {
        alignItems: 'center',
        marginBottom: 20,
    },
    emoji: {
        fontSize: 70,
    },
    label: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 5,
        marginTop: 10,
    },
    optionButton: {
        backgroundColor: '#444',
        borderRadius: 25,
        padding: 15,
        marginBottom: 10,
    },
    optionSelected: {
        backgroundColor: '#f7931e',
    },
    optionText: {
        color: '#fff',
        textAlign: 'center',
    },
    optionTextSelected: {
        fontWeight: 'bold',
    },
    input: {
        backgroundColor: '#333',
        color: '#fff',
        padding: 15,
        borderRadius: 20,
        marginTop: 10,
        marginBottom: 10,
    },
    dateText: {
        color: '#fff',
    },
    checkButton: {
        backgroundColor: '#f7931e',
        width: 70,
        height: 70,
        borderRadius: 35,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
});

export default AddAnimalScreen;
