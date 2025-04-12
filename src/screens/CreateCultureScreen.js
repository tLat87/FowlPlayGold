import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    TextInput,
    Platform, Image, FlatList,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import AddMarkScreen from './AddMarkScreen';
import {addCulture} from '../redux/slices/cultureSlice';
import {useDispatch} from 'react-redux';

const cultureOptions = ['Sowing', 'Sprouting', 'Active growth', 'Harvest'];
const stateOptions = ['In order', 'Requires maintenance', 'Ready for collection'];
const mockMarks = [
    { id: '1', label: 'Watering' },
    { id: '2', label: 'Fertilizing' },
    { id: '3', label: 'Harvesting' },
    { id: '4', label: 'Pest treatment' },
];
const CreateCultureScreen = ({navigation}) => {
    const [selectedCulture, setSelectedCulture] = useState('Sowing');
    const [selectedOption, setSelectedOption] = useState('Sowing');
    const [title, setTitle] = useState('');
    const [sort, setSort] = useState('');
    const [notes, setNotes] = useState('');
    const dispatch = useDispatch();
    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);

    const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowDatePicker(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const [selectedIds, setSelectedIds] = useState([]);

    const toggleCheckbox = (id) => {
        setSelectedIds((prev) =>
            prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
        );
    };

    const handleSave = () => {
        dispatch(addCulture({
            title,
            sort,
            date: date.toISOString(),
            stage: selectedCulture,
            note: notes,
            stateText: selectedOption,
            marks: selectedIds,
        }));
        navigation.goBack();
    };

    const renderItem = ({ item }) => {
        const checked = selectedIds.includes(item.id);

        return (
            <TouchableOpacity
                style={styles.item}
                onPress={() => toggleCheckbox(item.id)}
            >
                <View style={[styles.checkbox, checked && styles.checkboxChecked]}>
                    {checked && (
                        <Image source={require('../assets/img/check.png')} />
                    )}
                </View>
                <Text style={styles.label}>{item.label}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Image source={require('../assets/img/weui_arrow-filled.png')}/>
            </TouchableOpacity>

            <Text style={styles.title}>Add culture</Text>

            <View style={styles.emojiWrapper}>
                <Image source={require('../assets/img/Imgfwqf.png')}/>
            </View>

            <TextInput
                style={styles.input}
                placeholder="Title"
                placeholderTextColor="#999"
                value={title}
                onChangeText={setTitle}
            />
            <TextInput
                style={styles.input}
                placeholder="Sort"
                placeholderTextColor="#999"
                value={sort}
                onChangeText={setSort}
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

            <Text style={styles.label}>Stages of growth</Text>
            {cultureOptions.map((cul) => (
                <TouchableOpacity
                    key={cul}
                    style={[
                        styles.optionButton,
                        selectedCulture === cul && styles.optionSelected,
                    ]}
                    onPress={() => setSelectedCulture(cul)}
                >
                    <Text
                        style={[
                            styles.optionText,
                            selectedCulture === cul && styles.optionTextSelected,
                        ]}
                    >
                        {cul}
                    </Text>
                </TouchableOpacity>
            ))}

            <TextInput
                style={[styles.input, {height: 120}]}
                placeholder="Note"
                placeholderTextColor="#999"
                value={notes}
                onChangeText={setNotes}
            />

            <Text style={styles.label}>State</Text>
            {stateOptions.map((opt) => (
                <TouchableOpacity
                    key={opt}
                    style={[
                        styles.optionButton,
                        selectedOption=== opt && styles.optionSelected,
                    ]}
                    onPress={() => setSelectedOption(opt)}
                >
                    <Text
                        style={[
                            styles.optionText,
                            selectedOption === opt && styles.optionTextSelected,
                        ]}
                    >
                        {opt}
                    </Text>
                </TouchableOpacity>
            ))}

            <Text style={styles.title}>Marks</Text>
            <FlatList
                data={mockMarks}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />

            <TouchableOpacity style={styles.checkButton} onPress={handleSave}>>
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
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    checkbox: {
        width: 32,
        height: 32,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: '#f7931e',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    checkboxChecked: {
        backgroundColor: '#1a1a1a',
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

export default CreateCultureScreen
