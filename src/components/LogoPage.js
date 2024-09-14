import React, { useEffect } from 'react'
import { Image, StatusBar, StyleSheet, View } from 'react-native'

const LogoPage = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('welcome')
        }, 10000)
    }, [])

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="transparent" translucent />
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
                <Image
                    source={require('../assets/logo1.png')}
                    style={styles.image4}
                    resizeMode='contain'
                />
            </View>
        </View>
    )
}

export default LogoPage;

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
        width: 250,
        height: 250,
        // top: 0,
        left: -20
    },
    image2: {
        position: 'absolute',
        width: 210,
        height: 170,
        // top: 0,
        left: 194,
    },
    row2: {
        flexDirection: 'row',
        alignSelf: 'center',
    },
    image3: {
        height: 275,
        top: 150,
    },
    row3: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0
    },
    image4: {
        width: 255,
        height: 233,
        left: 108,
    },
});

// import React, { useEffect } from 'react';
// import { Image, StatusBar, StyleSheet, View, Dimensions } from 'react-native';

// // Get device width and height
// const { width, height } = Dimensions.get('window');

// const LogoPage = ({ navigation }) => {

//     useEffect(() => {
//         setTimeout(() => {
//             navigation.navigate('welcome');
//         }, 10000);
//     }, []);

//     return (
//         <View style={styles.container}>
//             <StatusBar backgroundColor="transparent" translucent />
//             <View style={styles.row1}>
//                 <Image
//                     source={require('../assets/logo2.png')}
//                     style={styles.image1}
//                     resizeMode='contain'
//                 />
//                 <Image
//                     source={require('../assets/Mask-group.png')}
//                     style={styles.image2}
//                     resizeMode='contain'
//                 />
//             </View>
//             <View style={styles.row2}>
//                 <Image
//                     source={require('../assets/logo.png')}
//                     style={styles.image3}
//                     resizeMode='contain'
//                 />
//             </View>
//             <View style={styles.row3}>
//                 <Image
//                     source={require('../assets/logo1.png')}
//                     style={styles.image4}
//                     resizeMode='contain'
//                 />
//             </View>
//         </View>
//     );
// };

// export default LogoPage;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     row1: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         position: 'absolute',
//         top: 0,
//         width: width * 1, // Use 100% of the screen width
//     },
//     image1: {
//         width: width * 0.45, // 45% of the screen width
//         height: height * 0.3, // 30% of the screen height
//         left: -20,
//     },
//     image2: {
//         width: width * 0.4, // 40% of the screen width
//         height: height * 0.25, // 25% of the screen height
//         left: width * 0.5, // Position relative to screen width
//     },
//     row2: {
//         flexDirection: 'row',
//         alignSelf: 'center',
//         marginTop: height * 0.3, // Adjust the vertical position relative to the screen height
//     },
//     image3: {
//         width: width * 0.7, // 70% of the screen width
//         height: height * 0.3, // 30% of the screen height
//     },
//     row3: {
//         flexDirection: 'row',
//         position: 'absolute',
//         bottom: 0,
//         width: width * 1, // Use 100% of the screen width
//         justifyContent: 'center',
//     },
//     image4: {
//         width: width * 0.6, // 60% of the screen width
//         height: height * 0.2, // 20% of the screen height
//     },
// });
