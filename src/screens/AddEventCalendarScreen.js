import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    StyleSheet,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { addEvent } from '../redux/slices/calendarSlice';
import { useNavigation } from '@react-navigation/native';

const AddEventCalendarScreen = ({ route }) => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const { selectedDate } = route.params;

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('Plants');

    const handleSubmit = () => {
        if (title.trim() === '') return;

        dispatch(addEvent({
            date: selectedDate,
            event: {
                title,
                description,
                category,
            },
        }));

        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()}>
                <Text style={{ color: '#fff', fontSize: 28 }}>{'←'}</Text>
            </TouchableOpacity>

            <Text style={styles.title}>Add task</Text>

            <Image
                source={require('../assets/img/IMG_84661.png')}
                style={styles.image}
                resizeMode="contain"
            />

            <View style={styles.inputGroup}>
                <View style={styles.inputRow}>
                    <TextInput
                        value={title}
                        onChangeText={setTitle}
                        placeholder="Cabbage sowing"
                        placeholderTextColor="#aaa"
                        style={styles.input}
                    />
                    {title.length > 0 && (
                        <TouchableOpacity onPress={() => setTitle('')}>
                            <Text style={styles.clearBtn}>×</Text>
                        </TouchableOpacity>
                    )}
                </View>

                <View style={styles.inputRow}>
                    <TextInput
                        value={description}
                        onChangeText={setDescription}
                        placeholder="Check ventilation, add straw"
                        placeholderTextColor="#aaa"
                        style={[styles.input, { height: 80 }]}
                        multiline
                    />
                    {description.length > 0 && (
                        <TouchableOpacity onPress={() => setDescription('')}>
                            <Text style={styles.clearBtn}>×</Text>
                        </TouchableOpacity>
                    )}
                </View>
            </View>

            <View style={styles.categoryRow}>
                {['Animals', 'Plants', 'Universal'].map(cat => (
                    <TouchableOpacity
                        key={cat}
                        onPress={() => setCategory(cat)}
                        style={[
                            styles.categoryBtn,
                            category === cat && styles.activeCategoryBtn,
                            cat === 'Animals' && { backgroundColor: '#F97316' },
                            cat === 'Plants' && { backgroundColor: '#22C55E' },
                            cat === 'Universal' && { backgroundColor: '#3B82F6' },
                        ]}>
                        <Text style={styles.categoryText}>{cat}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
                <Text style={styles.submitCheck}>✔</Text>
            </TouchableOpacity>
        </View>
    );
};

export default AddEventCalendarScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        paddingHorizontal: 20,
        paddingTop: 100,
    },
    backButton: {
        position: 'absolute',
        top: 70,
        left: 20,
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
    },
    image: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginVertical: 20,
    },
    inputGroup: {
        marginBottom: 20,
    },
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#333',
        borderRadius: 16,
        paddingHorizontal: 16,
        paddingVertical: 12,
        marginBottom: 12,
    },
    input: {
        flex: 1,
        color: '#fff',
        fontSize: 16,
    },
    clearBtn: {
        color: '#ccc',
        fontSize: 20,
        marginLeft: 8,
    },
    categoryRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 12,
    },
    categoryBtn: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 20,
    },
    activeCategoryBtn: {
        borderWidth: 2,
        borderColor: '#fff',
    },
    categoryText: {
        color: '#fff',
        fontWeight: '600',
    },
    submitBtn: {
        backgroundColor: 'orange',
        width: 60,
        height: 60,
        borderRadius: 30,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    submitCheck: {
        fontSize: 30,
        color: '#000',
    },
});
