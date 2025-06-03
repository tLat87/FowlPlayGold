import React, { useState } from 'react';
import {View, Text, TouchableOpacity, Switch, StyleSheet, Image, ScrollView, ImageBackground} from 'react-native';

const SettingsScreen = ({ navigation }) => {
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);

    const toggleSwitch = () => setNotificationsEnabled(previousState => !previousState);

    return (
        <ImageBackground style={{flex: 1}} source={require('../assets/img/fqwffqwf.png')}>
        <ScrollView style={styles.container}>
            {/*<Text style={styles.title}>Settings</Text>*/}

            <Image
                source={require('../assets/img/IMG_84661fwqf.png')}
                style={styles.chickenImage}
            />

            <TouchableOpacity style={styles.resetButton}>
                <Text style={styles.resetButtonText}>Start the day over</Text>
            </TouchableOpacity>

            <Text style={styles.subheading}>Farm statistics</Text>

            <View style={styles.statsContainer}>
                <View style={styles.statBox}>
                    <Text style={styles.statLabel}>Total number of animals</Text>
                    <Text style={styles.statValue}>500</Text>
                </View>
                <View style={styles.statBox}>
                    <Text style={styles.statLabel}>Number of crops in operation</Text>
                    <Text style={styles.statValue}>500</Text>
                </View>
                <View style={styles.statBox}>
                    <Text style={styles.statLabel}>Eggs collected for the month</Text>
                    <Text style={styles.statValue}>500</Text>
                </View>
            </View>

            <View style={styles.settingItem}>
                <Text style={styles.settingLabel}>Notifications</Text>
                <Switch
                    trackColor={{ false: '#767577', true: '#ffa234' }}
                    thumbColor={notificationsEnabled ? '#fff' : '#f4f3f4'}
                    onValueChange={toggleSwitch}
                    value={notificationsEnabled}
                />
            </View>

            {/*<TouchableOpacity style={styles.menuItem}>*/}
            {/*    <Text style={styles.menuText}>Privacy Policy</Text>*/}
            {/*    <Text style={styles.arrow}>➔</Text>*/}
            {/*</TouchableOpacity>*/}

            {/*<TouchableOpacity style={styles.menuItem}>*/}
            {/*    <Text style={styles.menuText}>Terms of use</Text>*/}
            {/*    <Text style={styles.arrow}>➔</Text>*/}
            {/*</TouchableOpacity>*/}

            {/*<TouchableOpacity style={styles.menuItem}>*/}
            {/*    <Text style={styles.menuText}>About developer</Text>*/}
            {/*    <Text style={styles.arrow}>➔</Text>*/}
            {/*</TouchableOpacity>*/}
            <View style={{marginBottom:150}}/>
        </ScrollView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#000',
        padding: 20,
    },
    title: {
        fontSize: 28,
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    chickenImage: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginBottom: 20,
        marginTop: 40,
        resizeMode: 'contain',
    },
    resetButton: {
        backgroundColor: '#f7931e',
        padding: 15,
        borderRadius: 25,
        alignItems: 'center',
        marginBottom: 25,
    },
    resetButtonText: {
        color: '#fff',
        fontSize: 18,
    },
    subheading: {
        color: '#fff',
        fontSize: 18,
        marginBottom: 10,
    },
    statsContainer: {
        marginBottom: 30,
    },
    statBox: {
        backgroundColor: '#333',
        padding: 15,
        borderRadius: 12,
        marginBottom: 10,
    },
    statLabel: {
        color: '#ccc',
        fontSize: 14,
    },
    statValue: {
        color: '#f7931e',
        fontSize: 24,
        fontWeight: 'bold',
    },
    settingItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#333',
        padding: 15,
        borderRadius: 12,
        marginBottom: 15,
    },
    settingLabel: {
        color: '#fff',
        fontSize: 16,
    },
    menuItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#333',
        padding: 15,
        borderRadius: 12,
        marginBottom: 10,
    },
    menuText: {
        color: '#fff',
        fontSize: 16,
    },
    arrow: {
        color: '#ffa234',
        fontSize: 24,
    },
});

export default SettingsScreen;
