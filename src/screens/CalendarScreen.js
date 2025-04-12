import React, { useState } from 'react';
import {
    View, Text, TouchableOpacity, FlatList, Modal, TextInput, ScrollView
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addEvent, removeEvent } from '../redux/slices/calendarSlice';

const daysInMonth = [
    [null, null, null, null, 1, 2, 3],
    [4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17],
    [18, 19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30, 31]
];

const CalendarScreen = ({navigation}) => {
    const [selectedDay, setSelectedDay] = useState(31);
    const [modalVisible, setModalVisible] = useState(false);
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('Plants');

    const selectedDate = `2025-03-${selectedDay < 10 ? '0' + selectedDay : selectedDay}`;
    const events = useSelector(state => state.calendar.events[selectedDate] || []);
    const dispatch = useDispatch();

    const handleAddEvent = () => {
        dispatch(addEvent({
            date: selectedDate,
            event: {
                title,
                category,
                description: 'Check ventilation, add straw',
            }
        }));
        setTitle('');
        setModalVisible(false);
    };

    const handleRemoveEvent = (id) => {
        dispatch(removeEvent({ date: selectedDate, id }));
    };

    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#000', padding: 16 }}>
            <Text style={{ color: 'white', fontSize: 28, fontWeight: 'bold', marginBottom: 16 }}>
                Seasonal Calendar
            </Text>
            <TouchableOpacity
                onPress={() => {navigation.navigate('AddEventCalendarScreen', {selectedDate})}}
                style={{
                    backgroundColor: 'orange',
                    padding: 16,
                    borderRadius: 99,
                    position: 'absolute',
                    top: 0,
                    right: 0
                }}>
                <Text style={{ fontSize: 24, color: '#000' }}>+</Text>
            </TouchableOpacity>

            <Text style={{ color: 'white', fontSize: 20, marginBottom: 8 }}>March 2025</Text>

            {/* Календарная сетка */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 }}>
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                    <Text key={day} style={{ color: 'gray', width: 40, textAlign: 'center' }}>{day}</Text>
                ))}
            </View>

            {daysInMonth.map((week, rowIndex) => (
                <View key={rowIndex} style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 }}>
                    {week.map((day, i) => (
                        <TouchableOpacity
                            key={i}
                            onPress={() => day && setSelectedDay(day)}
                            style={{
                                width: 40,
                                height: 40,
                                borderRadius: 8,
                                backgroundColor: day === selectedDay ? 'orange' : '#333',
                                justifyContent: 'center',
                                alignItems: 'center',
                                opacity: day ? 1 : 0,
                            }}>
                            <Text style={{ color: '#fff', fontWeight: 'bold' }}>{day}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            ))}

            <Text style={{ color: 'white', fontSize: 20, marginVertical: 16 }}>
                {`March ${selectedDay}, 2025`}
            </Text>

            {events.length > 0 ? (
                events.map(item => (
                    <View
                        key={item.id}
                        style={{
                            backgroundColor: '#222',
                            padding: 16,
                            borderRadius: 16,
                            marginBottom: 10,
                        }}>
                        <Text style={{ color: '#fff', fontSize: 18 }}>{item.title}</Text>
                        <Text style={{ color: '#aaa', marginBottom: 5 }}>{item.description}</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{
                                backgroundColor: item.category === 'Plants' ? 'green' : 'blue',
                                color: '#fff',
                                paddingHorizontal: 10,
                                borderRadius: 10
                            }}>
                                {item.category}
                            </Text>
                            <TouchableOpacity onPress={() => handleRemoveEvent(item.id)}>
                                <Text style={{ color: 'red' }}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))
            ) : (
                <Text style={{ color: '#aaa', fontStyle: 'italic' }}>No events for this date</Text>
            )}

            {/* Модалка добавления */}
            {/*<Modal visible={modalVisible} animationType="slide">*/}
            {/*    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>*/}
            {/*        <TextInput*/}
            {/*            placeholder="Event title"*/}
            {/*            value={title}*/}
            {/*            onChangeText={setTitle}*/}
            {/*            style={{ borderBottomWidth: 1, marginBottom: 20 }}*/}
            {/*        />*/}
            {/*        <TouchableOpacity onPress={handleAddEvent} style={{ backgroundColor: 'orange', padding: 10 }}>*/}
            {/*            <Text style={{ textAlign: 'center' }}>Add Event</Text>*/}
            {/*        </TouchableOpacity>*/}
            {/*        <TouchableOpacity onPress={() => setModalVisible(false)} style={{ marginTop: 10 }}>*/}
            {/*            <Text style={{ textAlign: 'center', color: 'red' }}>Cancel</Text>*/}
            {/*        </TouchableOpacity>*/}
            {/*    </View>*/}
            {/*</Modal>*/}
        </ScrollView>
    );
};

export default CalendarScreen;
