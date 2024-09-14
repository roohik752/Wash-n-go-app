import React, { useState } from 'react';
import { Alert, Image, ImageBackground, StyleSheet, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const SignInPage = ({ navigation, route }) => {
    // const { name} = route?.params?.name;
    // const name = route?.params?.name || 'Guest';
    const [data, setData] = useState({
        phone: '',
        email: '',
        password: '',
    });
    const [showPassword, setShowPassword] = useState(false);

    const handleInputChange = (field, value) => {
        setData({ ...data, [field]: value });
    };

    const handleSignIn = async () => {
        const { phone, password } = data;

        try {
            const formData = new FormData();
            // formData.append('phone', '9867541023');
            // formData.append('password', '98675');
            formData.append('phone', 'phone');
            formData.append('password', 'password');

            const response = await fetch('https://tor.appdevelopers.mobi/api/login', {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();
            console.log(result);
            setData({ phone: '', email: '', password: '' });
            navigation.navigate('signup1', { phone: data.phone });
        } catch (error) {
            console.error('Error:', error);
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
                    <Text style={styles.text1}>Sign In </Text>
                    <Text style={styles.text2}>Hi ! Welcome back, you</Text>
                    <Text style={styles.text2}>have been missed</Text>
                </View>
                <View style={styles.form}>
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
                        <TouchableOpacity>
                            <Text style={styles.signInText}>Forgot Password ?</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row4}>
                        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                            <Text style={styles.buttonText}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row5}>
                        <Text style={styles.horizontalLine}>_______________________  </Text>
                        <Text style={styles.text4}>or</Text>
                        <Text style={styles.horizontalLine}>  _______________________</Text>
                    </View>
                </View>
                <View style={styles.row6}>
                    <View style={styles.content}>
                        <View style={{paddingHorizontal:100}}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', }}>
                                <View style={styles.iconBox}>
                                    <FontAwesome name="google" size={16} color="#000" style={styles.icon1} />
                                </View>
                                <View style={styles.iconBox}>
                                    <FontAwesome name="apple" size={16} color="#000" style={styles.icon1} />
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignSelf: 'center', }}>
                            <Text style={styles.text4}>
                                Don't have an account?
                            </Text>
                            <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('signup')}>
                                <Text style={styles.signInText1}> Sign up</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginVertical: 10 }}>
                            <Text style={styles.text5}>
                                By login or sign up, you agree to our terms of use and
                            </Text>
                            <Text style={styles.text5}>
                                privacy policy
                            </Text>
                        </View>
                    </View>
                    <ImageBackground
                        source={require('../assets/Mask-group1.png')}
                        style={styles.backgroundImage}
                        resizeMode="contain"
                    />
                </View>
            </View>
        </ScrollView>
    );
};

export default SignInPage;


const styles = StyleSheet.create({
    scrollViewContainer: {
        flexGrow: 1,
        // paddingVertical: 20
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
        flexDirection: 'row',
        alignSelf: 'flex-end'
    },
    signInText: {
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        color: "#000"
    },
    row4: {
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
        marginTop: 15,
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
    row5: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    horizontalLine: {
        fontSize: 10,
        color: 'rgba(163, 207, 255, 1)',
        textAlign: 'center',
        marginVertical: 13,
    },
    row6: {
        height: 150,
    },
    backgroundImage: {
        height: 130,
        width: "100%",
        position: 'absolute',
        bottom: 0,
        left: -95,
    },
    content: {
        zIndex: 1,
        justifyContent: "flex-start",
        alignContent: "flex-start",
        marginTop: 10,
    },
    iconBox: {
        height: 40,
        width: 40,
        borderColor: 'rgba(163, 207, 255, 1)',
        borderWidth: 1,
        borderRadius: 50
    },
    icon1: {
        // marginRight: 8,
        // marginBottom: 5
        alignSelf: 'center',
        marginVertical: 10
    },
    text4: {
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
        alignSelf: 'center',
        marginTop: 10
    },
    button1: {
        marginTop: 10,
        marginLeft: 10
    },
    signInText1: {
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        color: '#000'
    },
    text5: {
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
        alignSelf: 'center',
        // marginTop: 10
    },
})