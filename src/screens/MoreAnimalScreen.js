import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import {removeAnimalMark} from '../redux/slices/animalMarksSlice';
import {useDispatch} from 'react-redux';

const markImages = {
    Feeding: require('../assets/img/Imgfwqf.png'),
    Сleaning: require('../assets/img/Img2.png'),
    Vaccination: require('../assets/img/Img3.png'),
    'Egg production': require('../assets/img/1.png'),
};

const MoreAnimalScreen = ({navigation, route}) => {
    const {item} = route.params;
    const dispatch = useDispatch();

    return (
      <ScrollView style={styles.container}>
        <Image source={markImages[item.mark]} style={styles.image} />

        <View style={styles.card}>
          <View style={styles.iconRow}>
            <TouchableOpacity
              style={styles.circleIconRed}
              onPress={() => {
                  dispatch(removeAnimalMark(item.id));
                navigation.goBack();
              }}>
              <Image source={require('../assets/img/Icon24124.png')} />
            </TouchableOpacity>
          </View>

          <Text style={styles.label}>Animal</Text>
          <Text style={styles.value}>{item.selectedAnimal}</Text>

          <Text style={styles.label}>Date</Text>
          <Text style={styles.value}>{item.date}</Text>

          <Text style={styles.label}>Age</Text>
          <Text style={styles.value}>{item.age}</Text>

          <Text style={styles.label}>Number of animals</Text>
          <Text style={styles.value}>{item.numberOfAnimals}</Text>

          <Text style={styles.label}>Animal mark</Text>
          <View style={styles.checkItem}>
            <Text style={styles.checkText}>✅ {item.mark}</Text>
          </View>

          <TouchableOpacity
            style={styles.warningButton}
            onPress={() => navigation.goBack()}>
            <Text style={styles.warningText}>Back</Text>
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

export default MoreAnimalScreen;
