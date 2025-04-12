import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import {removeAnimalMark} from '../redux/slices/animalMarksSlice';
import {useDispatch} from 'react-redux';
import {removeCulture} from '../redux/slices/cultureSlice';

const marksDictionary = {
    '1': 'Watering',
    '2': 'Fertilizing',
    '3': 'Harvesting',
    '4': 'Pest treatment',
};


const BookMoreScreen = ({navigation, route}) => {
    const {item} = route.params;
    const dispatch=useDispatch();
    return (
        <ScrollView style={styles.container}>

            <Image
                source={require('../assets/img/Imgfwqf.png')}
                style={styles.image}
            />

            <View style={styles.card}>
                <View style={styles.iconRow}>
                    <TouchableOpacity style={styles.circleIconRed} onPress={() => {
                        dispatch(removeCulture(item.id));
                        navigation.goBack();
                    }}>
                        <Image
                            source={require('../assets/img/Icon24124.png')}
                        />
                    </TouchableOpacity>
                </View>

                <Text style={styles.label}>Date of planting</Text>
                <Text style={styles.value}>{item.date}</Text>

                <Text style={styles.label}>Sort</Text>
                <Text style={styles.value}>{item.sort}</Text>


                {item.marks.map(markId => (
                    <View key={markId} style={styles.checkItem}>
                        <Text style={styles.checkText}>✅ {marksDictionary[markId]}</Text>
                    </View>
                ))}
                <Text style={styles.label}>Stages of growth</Text>
                <Text style={styles.value}>{item.stage}</Text>

                <Text style={styles.label}>Notes</Text>
                <Text style={styles.value}>{item.note}</Text>

                <TouchableOpacity style={styles.warningButton} onPress={() =>{navigation.goBack()}}>
                    <Text style={styles.warningText}>Go back</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        flex: 1,
        padding: 20,
        paddingTop: 100,
    },
    header: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    image: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginBottom: 20,
    },
    card: {
        backgroundColor: '#333',
        borderRadius: 20,
        padding: 20,
        marginBottom: 20,
    },
    label: {
        color: '#ccc',
        marginTop: 10,
    },
    value: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 5,
    },
    checkItem: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkText: {
        color: '#fff',
        fontSize: 16,
        backgroundColor: '#f7931e20',
        padding: 5,
        borderRadius: 10,
    },
    warningButton: {
        backgroundColor: '#f7931e',
        padding: 10,
        borderRadius: 20,
        alignItems: 'center',
        marginTop: 20,
    },
    warningText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    trashButton: {
        backgroundColor: '#e63946',
        width: 80,
        height: 80,
        borderRadius: 40,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    iconRow: {
        position: 'absolute',
        top: 10,
        right: 10,
        flexDirection: 'row',
        gap: 10,
    },
    circleIconBlue: {
        backgroundColor: '#1e90ff',
        padding: 10,
        borderRadius: 20,
        marginRight: 10,
    },
    circleIconRed: {
        backgroundColor: '#ff3b30',
        padding: 10,
        borderRadius: 20,
        zIndex: 99
    },
});

export default BookMoreScreen;
