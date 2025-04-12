import {Image, ImageBackground, Text, TouchableOpacity, View} from 'react-native';

const GameScreen = ({navigation}) => {
    return (
        <ImageBackground style={{flex: 1}} source={require('../assets/img/fqwffqwf.png')}>
            <Text style={{color:'#000', fontWeight:'900', fontSize:46, textAlign:'center', marginTop: 100}}>
                Collect the surprise egg
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('GameProccesScreen')} style={{position: 'absolute', bottom:150, alignSelf: 'center'}}>
                <Image source={require('../assets/img/game/gridicons_play.png')}/>
            </TouchableOpacity>
        </ImageBackground>
    )
}

export default GameScreen
