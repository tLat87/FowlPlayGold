import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import BookMoreScreen from './BookMoreScreen';
import {useSelector} from 'react-redux';

const BookScreen = ({navigation}) => {
    const culturesData = useSelector(state => state.cultures);
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Culture's Diary</Text>

            <Image
                source={require('../assets/img/Imgfwqf.png')}
                style={{alignSelf: 'center'}}
            />

            {culturesData.map((item, index) => (
                <View key={index} style={styles.card}>
                    <View>
                        <Text style={styles.cardTitle}>{item.title}</Text>
                        <Text style={styles.date}>{item.date}</Text>
                        <View style={styles.tag}>
                            <Text style={styles.tagText}>{item.stage}</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.iconButton} onPress={() =>{navigation.navigate('BookMoreScreen', {item})}}>
                        <Image
                            source={require('../assets/img/gg_arrow-up-o.png')}
                        />
                    </TouchableOpacity>
                </View>
            ))}

            <TouchableOpacity style={[styles.iconButton, {marginTop: 10}]} onPress={() =>{navigation.navigate('CreateCultureScreen')}}>
                <Image
                    source={require('../assets/img/Icon.png')}
                    style={{alignSelf: 'center', marginVertical: 20}}
                />
            </TouchableOpacity>
            <View style={{marginBottom: 150}}/>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        flex: 1,
        padding: 20,
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    image: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginBottom: 20,
        resizeMode: 'contain',
    },
    card: {
        backgroundColor: '#333',
        borderRadius: 20,
        padding: 20,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cardTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
    date: {
        color: '#ccc',
        marginVertical: 5,
    },
    tag: {
        backgroundColor: '#666',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 15,
        alignSelf: 'flex-start',
    },
    tagText: {
        color: '#fff',
    },
    iconButton: {
        backgroundColor: '#f7931e',
        padding: 10,
        borderRadius: 25,
        borderWidth: 3,
        borderColor: '#fff',
    },
});

export default BookScreen;
