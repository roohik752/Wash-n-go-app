import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const WelcomePage = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.row1}>
                <Image
                    source={require('../assets/logo2.png')}
                    style={styles.image1}
                    resizeMode='contain'
                />
                <Image
                    source={require('../assets/Mask-group.png')}
                    style={styles.image2}
                    resizeMode='contain'
                />
            </View>
            <View style={styles.row2}>
                <Image
                    source={require('../assets/logo.png')}
                    style={styles.image3}
                    resizeMode='contain'
                />
            </View>
            <View style={styles.row3}>
                <Text style={styles.text1}>Sparkle & Shine Transform </Text>
                <Text style={styles.text2}>Your Drive with Every Wash!</Text>
            </View>
            <View style={styles.row4}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('signup')}>
                    <Text style={styles.buttonText}>Let's Start</Text>
                </TouchableOpacity>
                <View style={{flexDirection: 'row',alignSelf: 'center'}}>
                <Text style={styles.text3}>
                    Already have an account?
                </Text>
                <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('signin')}>
                    <Text style={styles.signInText}> Sign in</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default WelcomePage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    row1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        top: 0
    },
    image1: {
        position: 'absolute',
        width: 200,
        height: 200,
        // top: 0,
        left: -16
    },
    image2: {
        position: 'absolute',
        width: 180,
        height: 140,
        // top: 0,
        left: 220,
    },
    row2: {
        flexDirection: 'row',
        alignSelf: 'center',
        height: 300
    },
    image3: {
        height: 245,
        top: 130,
    },
    row3: {
        alignSelf: 'center',
        marginTop: 90
    },
    text1: {
        fontSize: 18,
        fontFamily: 'Poppins-Regular',
    },
    text2: {
        fontSize: 18,
        fontFamily: 'Poppins-Regular',
    },
    row4: {
        alignSelf: 'center',
        marginTop: 20
    },
    button: {
        height: 40,
        width: 320,
        backgroundColor: 'rgba(163, 207, 255, 1)',
        borderWidth: 1,
        borderColor: 'rgba(148, 199, 255, 1)',
        paddingVertical: 7,
        paddingHorizontal: 30,
        borderRadius: 25,
        marginTop: 20,
        shadowColor: 'rgba(163, 207, 255, 0.9)',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 1,
        shadowRadius: 16,
        elevation: 8,
    },
    buttonText: {
        color: '#000',
        fontSize: 18,
        fontFamily: 'Poppins-Regular',
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    text3: {
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
        alignSelf: 'center',
        marginTop: 20
    },
    signInText: {
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
        fontWeight: 'bold',
        color: '#000',
        textDecorationLine: 'underline',
    },
    button1: {
        marginTop: 20,
        marginLeft: 10
    }
});