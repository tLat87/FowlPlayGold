import React, { useEffect, useRef, useState } from 'react';
import {
    Image,
    ImageBackground,
    Text,
    TouchableOpacity,
    View,
    Alert,
} from 'react-native';

const eggImages = [
    require('../assets/img/game/6.png'),
    require('../assets/img/game/2.png'),
];

const nests = Array(6).fill(null); // 6 гнёзд

const GameProccesScreen = ({ navigation }) => {
    const [score, setScore] = useState(0);
    const [activeNestIndex, setActiveNestIndex] = useState(null);
    const [activeEgg, setActiveEgg] = useState(null);
    const timeoutRef = useRef(null);

    const spawnEgg = () => {
        const nestIndex = Math.floor(Math.random() * nests.length);
        const egg = eggImages[Math.floor(Math.random() * eggImages.length)];

        setActiveNestIndex(nestIndex);
        setActiveEgg(egg);

        timeoutRef.current = setTimeout(() => {
            setActiveNestIndex(null);
            setActiveEgg(null);
        }, 1000);
    };

    useEffect(() => {
        const interval = setInterval(spawnEgg, 1500);
        return () => {
            clearInterval(interval);
            clearTimeout(timeoutRef.current);
        };
    }, []);

    const handlePressEgg = () => {
        if (!activeEgg) return;

        if (activeEgg === eggImages[1]) {
            Alert.alert('Game Over', 'You clicked on a bad egg!', [
                { text: 'OK', onPress: () => navigation.goBack() },
            ]);
        } else {
            setScore(prev => prev + 500);
        }

        setActiveNestIndex(null);
        setActiveEgg(null);
    };

    const renderNest = (index) => {
        const isActive = index === activeNestIndex;

        return (
            <TouchableOpacity key={index} onPress={handlePressEgg} activeOpacity={1}>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={require('../assets/img/game/gnezdo.png')} />
                    {isActive && (
                        <Image
                            source={activeEgg}
                            style={{ position: 'absolute', top: -10 }}
                        />
                    )}
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <ImageBackground style={{ flex: 1 }} source={require('../assets/img/fqwffqwf.png')}>
            <View style={{
                flexDirection: 'row',
                width: '90%',
                justifyContent: 'space-between',
                marginLeft: '5%',
                position: 'absolute',
                top: 80,
                alignItems: 'center',
            }}>
                <View style={{
                    backgroundColor: "#fff",
                    padding: 10,
                    borderRadius: 8,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Text style={{ fontWeight: '900', fontSize: 22, marginRight: 12 }}>
                        {score}
                    </Text>
                    <Image source={require('../assets/img/game/6.png')}
                           style={{ width: 35, height: 42 }} resizeMode='center' />
                </View>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/img/Iconfqwf.png')} />
                </TouchableOpacity>
            </View>

            <View style={{ marginTop: '40%', paddingHorizontal: 20 }}>
                {[0, 1, 2].map(row => (
                    <View key={row} style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginBottom: 20,
                    }}>
                        {nests.slice(row * 2, row * 2 + 2).map((_, i) =>
                            renderNest(row * 2 + i)
                        )}
                    </View>
                ))}
            </View>
        </ImageBackground>
    );
};

export default GameProccesScreen;
