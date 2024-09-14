import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const SignUp1Page = ({navigation, route}) => {
    // const { name} = route.params;
    // const { phone} = route.params;
    // const name = route?.params?.name || 'Guest';
    return (
        <View style={styles.container}>
            <View style={styles.row1}>
                <Image
                    source={require('../assets/logo.png')}
                    style={styles.image1}
                    resizeMode='contain'
                />
            </View>
            <View style={styles.row2}>
                <Text style={styles.text1}>Welcome Ramesh</Text>
                {/* <Text style={styles.text1}>Welcome {phone}</Text> */}
            </View>
            <View style={styles.row3}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('signin')}>
                    <Text style={styles.buttonText}>Logout</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default SignUp1Page;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    row1: {
        flexDirection: 'row',
        alignSelf: 'center',
    },
    image1: {
        height: 180,
        top: 60,
    },
    row2: {
        alignSelf: 'center',
        height: 'auto',
        marginTop: 100
    },
    text1: {
        fontSize: 26,
        fontFamily: "Poppins-ExtraBold",
        color: 'black',
        fontWeight: 'bold',
    },
    row3: {
        alignSelf: 'center',
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
        marginTop: 150,
        shadowColor: 'rgba(163, 207, 255, 0.9)',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 1,
        shadowRadius: 16,
        elevation: 8,
    },
    buttonText: {
        color: '#000',
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        fontWeight: 'bold',
        alignSelf: 'center'
    },
});