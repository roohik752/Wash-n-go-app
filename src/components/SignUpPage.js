import React, { memo, useState } from 'react';
import { Alert, Image, ImageBackground, StyleSheet, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Checkbox } from 'react-native-paper';

const SignUpPage = ({ navigation }) => {

    const [data, setData] = useState({
        name: '',
        phone: '',
        email: '',
        password: '',
    });
    const [showPassword, setShowPassword] = useState(false);
    const [checked, setChecked] = React.useState(false);

    const handleInputChange = (field, value) => {
        setData({ ...data, [field]: value });
    };

    const handleSignUp = async () => {
        console.log('Name:', data.name);
        console.log('Phone:', data.phone);
        console.log('Password:', data.password);

        try {
            const response = await fetch('https://tor.appdevelopers.mobi/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    phone: data.phone,
                    password: data.password,
                    name: data.name,
                }),
            });

            const jsonResponse = await response.json();

            // Log the response for debugging
            console.log('Response Status:', response.status);
            console.log('Response Body:', jsonResponse);

            if (response.ok) {
                setData({ name: '', phone: '', email: '', password: '' });
                Alert.alert('Success', 'Registration successful!', [
                    { text: 'OK', onPress: () => navigation.navigate('signin',{ name: data.name }) },
                ]);
            } else if (jsonResponse.error && jsonResponse.error.phone) {
                // Handle specific error for phone already taken
                Alert.alert('Error', 'The phone number is already registered. Please use a different phone number.');
            } else {
                // Handle other errors
                Alert.alert('Error', jsonResponse.message || 'Registration failed. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            Alert.alert('Error', 'Something went wrong. Please try again later.');
        }
    };


    return (
        <ScrollView contentContainerStyle={styles.scrollViewContainer} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <View style={styles.row1}>
                    <Image
                        source={require('../assets/logo.png')}
                        style={styles.image1}
                        resizeMode='contain'
                    />
                </View>
                <View style={styles.row2}>
                    <Text style={styles.text1}>Sign Up</Text>
                    <Text style={styles.text2}>Fill in the below form and add life to</Text>
                    <Text style={styles.text2}>your car!</Text>
                </View>
                <View style={styles.form}>
                    {/* Name Field */}
                    <Text style={styles.text3}>Name</Text>
                    <View style={styles.inputContainer}>
                        <Feather name="user" size={14} color="#888" style={styles.icon} />
                        <TextInput
                            placeholder="Enter your name"
                            style={styles.input}
                            placeholderTextColor="#888"
                            onChangeText={(text) => handleInputChange('name', text)}
                            value={data.name}
                        />
                    </View>

                    {/* Phone Field */}
                    <Text style={styles.text3}>Phone No.</Text>
                    <View style={styles.inputContainer}>
                        <FontAwesome name="phone" size={14} color="#888" style={styles.icon} />
                        <TextInput
                            placeholder="Enter your number"
                            style={styles.input}
                            placeholderTextColor="#888"
                            onChangeText={(number) => handleInputChange('phone', number)}
                            value={data.phone}
                        />
                    </View>

                    {/* Email Field */}
                    <Text style={styles.text3}>Email</Text>
                    <View style={styles.inputContainer}>
                        <FontAwesome name="envelope-o" size={14} color="#888" style={styles.icon} />
                        <TextInput
                            placeholder="xyz@gmail.com"
                            style={styles.input}
                            placeholderTextColor="#888"
                            keyboardType="email-address"
                            onChangeText={(text) => handleInputChange('email', text)}
                            value={data.email}
                        />
                    </View>

                    {/* Password Field */}
                    <Text style={styles.text3}>Password</Text>
                    <View style={styles.inputContainer}>
                        <Feather name="lock" size={14} color="#888" style={styles.icon} />
                        <TextInput
                            placeholder="Password"
                            style={styles.input}
                            placeholderTextColor="#888"
                            secureTextEntry={!showPassword}
                            onChangeText={(text) => handleInputChange('password', text)}
                            value={data.password}
                        />
                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                            <FontAwesome
                                name={showPassword ? "eye" : "eye-slash"}
                                size={14}
                                color="#888"
                                style={styles.eyeIcon}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row3}>
                        <Checkbox
                            status={checked ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setChecked(!checked);
                            }}
                            color="#888"
                            uncheckedColor="#888"
                        />
                        <Text style={styles.text4}>Agree with</Text>
                        <TouchableOpacity style={styles.button1} >
                            <Text style={styles.signInText}>Terms & Conditions</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.row4}>
                    <View style={styles.content}>
                        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                            <Text style={styles.buttonText}>Sign Up</Text>
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', alignSelf: 'center', }}>
                            <Text style={styles.text5}>
                                Already have an account?
                            </Text>
                            <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('signin')}>
                                <Text style={styles.signInText1}> Sign in</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: 15 }}>
                            <Text style={styles.text6}>
                                By login or sign up, you agree to our terms of use and
                            </Text>
                            <Text style={styles.text6}>
                                privacy policy
                            </Text>
                        </View>
                    </View>
                    <ImageBackground
                        source={require('../assets/Mask-group2.png')}
                        style={styles.backgroundImage}
                        resizeMode="contain"
                    >
                        {/* </ImageBackground> */}

                    </ImageBackground>
                </View>
            </View>
        </ScrollView>
    )
}

export default SignUpPage;

const styles = StyleSheet.create({
    scrollViewContainer: {
        flexGrow: 1,
    },
    container: {
        flex: 1,
    },
    row1: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 45
    },
    image1: {
        height: 110,
        top: 18,
    },
    row2: {
        alignSelf: 'left',
        height: 'auto',
        paddingHorizontal: 20,
    },
    text1: {
        fontSize: 26,
        fontFamily: "Poppins-ExtraBold",
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 5,
        marginTop: 20,
    },
    text2: {
        fontSize: 11,
        fontFamily: "Poppins-Regular",
    },
    form: {
        marginTop: 16,
        paddingHorizontal: 20,
    },
    text3: {
        fontSize: 13,
        fontFamily: "Poppins-Regular",
        color: '#000',
        marginBottom: 2
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#888',
        marginBottom: 10,
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    icon: {
        marginRight: 8,
        marginBottom: 5
    },
    input: {
        flex: 1,
        height: 33,
        fontSize: 11,
        color: '#888',
        fontFamily: 'Poppins-Italic'
    },
    eyeIcon: {
        marginLeft: 10,
    },
    row3: {
        flexDirection: 'row'
    },
    text4: {
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
        alignSelf: 'center',
        fontWeight: 'bold',
        color: '#000',
    },
    signInText: {
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    button1: {
        marginTop: 10,
        marginLeft: 10
    },
    backgroundImage: {
        position: 'absolute',
        bottom: -20,
        right: -20,
        width: 150, 
        height: 150, 
    },
    row4: {
        height: 160,

    },
    content: {
        zIndex: 1,
        justifyContent: "flex-start",
        alignContent: "flex-start",
        marginTop: 10
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
        marginLeft: 20,
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
    text5: {
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
        alignSelf: 'center',
        marginTop: 10
    },
    signInText1: {
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        color: '#000'
    },
    text6: {
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
        alignSelf: 'center',
        // marginTop: 10
    },
});