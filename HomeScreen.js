import React from 'react';
import { Octicons } from '@expo/vector-icons';
import { StyleSheet, Text, View, SafeAreaView, DrawerLayoutAndroid, Image, ImageBackground } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


function HomeScreen() {



    return (

        <View style={styles.container}>

            <View style={{ flex: 1 }}>
                <View style={styles.header}>
                    <Image resizeMode="contain" style={styles.logo} source={require('./assets/logoProj.jpeg')}
                    />
                    <Octicons style={styles.bars} name="three-bars" size={40} color="black" />
                    <Text style={styles.logo_text}>Interview Training</Text>
                </View>
                <View style={styles.footer}>
                    <View style={styles.icons}>
                        <Octicons name="info" size={50} color="black" />
                        <Text style={styles.text}>About</Text>
                    </View>
                    <View style={styles.icons}>
                        <MaterialCommunityIcons name="chat-outline" size={50} color="black" />
                        <Text style={styles.text}>Help</Text>
                    </View>
                    <View style={styles.icons}>
                        <AntDesign name="dropbox" size={50} color="black" />
                        <Text style={styles.text}>Resources</Text>
                    </View>
                </View>
            </View>

        </View>
    );
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "lightblue",

    },
    bars: {
        paddingTop: 20,
        position: 'absolute',
        top: 20,
        right: 20,
    },

    logo: {
        height: 100,
        width: 80,
        top: 100,
        left: 30,
        borderRadius: 50,
    },
    logo_text: {
        fontSize: 50,
        fontWeight: "bold",
        position: "absolute",
        top: 180,
        left: 30,
    },
    header: {
        flex: 1,
    },
    icons: {
        padding: 20,
        marginLeft: 25,
        alignItems: "center",
        justifyContent: "center",
    },
    footer: {

        flexDirection: "row",
        justifyContent: "space-evenly",

        padding: 20,
    },
    text: {
        alignItems: "center",
        fontSize: 18,
        marginLeft: 10,
        justifyContent: "center",
    },

});

export default HomeScreen;
