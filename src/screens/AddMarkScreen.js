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
import {useDispatch} from 'react-redux';
import {addAnimalMark} from '../redux/slices/animalMarksSlice';

const markOptions = ['Feeding', 'Сleaning', 'Vaccination', 'Egg production'];

const markImages = {
    Feeding: require('../assets/img/Imgfwqf.png'),
    Сleaning: require('../assets/img/Img2.png'),
    Vaccination: require('../assets/img/Img3.png'),
    'Egg production': require('../assets/img/1.png'),
};


const AddMarkScreen = ({navigation, route}) => {
    const {selectedAnimal, numberOfAnimals, age, date} = route.params;
    const [selectedMark, setSelectedMark] = useState('Feeding');

    const dispatch = useDispatch();

    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Image source={require('../assets/img/weui_arrow-filled.png')}/>
            </TouchableOpacity>

            <Text style={styles.title}>Add animal</Text>

            <View style={styles.emojiWrapper}>
                <Image source={markImages[selectedMark]} />
            </View>

            <Text style={styles.label}>Type of animal</Text>

            {markOptions.map((animal) => (
                <TouchableOpacity
                    key={animal}
                    style={[
                        styles.optionButton,
                        selectedMark === animal && styles.optionSelected,
                    ]}
                    onPress={() => setSelectedMark(animal)}
                >
                    <Text
                        style={[
                            styles.optionText,
                            selectedMark === animal && styles.optionTextSelected,
                        ]}
                    >
                        {animal}
                    </Text>
                </TouchableOpacity>
            ))}

            <TouchableOpacity
                style={styles.checkButton}
                onPress={() => {
                    dispatch(addAnimalMark({
                        selectedAnimal,
                        numberOfAnimals,
                        age,
                        date,
                        mark: selectedMark,
                    }));
                    navigation.pop(2);
                }}
            >
                <Image source={require('../assets/img/Icon.png')} />
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

export default AddMarkScreen;
