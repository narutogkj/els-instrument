import React, { Component } from "react";
import { TextInput } from 'react-native-paper';
import {
    View,
    Text,
    StyleSheet,
    Image,
    SafeAreaView,
    Dimensions,
    TouchableOpacity,
    FlatList,
    Modal,
    TouchableWithoutFeedback,
    ImageBackground
} from "react-native";
import { COLORS, icons, images, SIZES, FONTS } from "../constants";
import { clients } from '../Data';
const { width, height } = Dimensions.get('window');
import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from 'axios';

class LogIn2 extends Component {

    state = {
        userName: '',
        emailId: '',
        phoneNo: '',
        registerButton: 'Register',
        islogged: false
    }
    getData = async () => {
        try {
            return await AsyncStorage.getItem('@credentials')
        } catch (e) {
            alert(e);
        }
    }
    componentDidMount() {
        this.getData().then((value) => {
            if (value) {
                this.setState({ islogged: true })
                this.props.navigation.replace('drawer')
            }
        })
    }

    storeData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('@credentials', jsonValue)
        } catch (e) {
            alert(e);
        }
    }
    storingCreads = (props) => {
        if (this.state.emailId == '' || this.state.phoneNo == '' || this.state.userName == '') {
            alert("Fields cannot be empty")
        } else {
            this.setState({ registerButton: 'Wait...' })
            const cread = {
                emailId: this.state.emailId,
                phoneNo: this.state.phoneNo,
                userName: this.state.userName
            }
            this.storeData(cread);
            props.navigation.replace('drawer')
        }

    }

    render() {

        return (

            <ImageBackground
                source={images.bg}
                style={{
                    ...styles.container,

                }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }}>
                    <View style={{ width: "65%", height: 145 }}>
                        <Image style={{ width: "100%", height: '100%', marginBottom: 10 }} source={images.brand} />
                    </View>
                </View>
                <View>
                    <TextInput
                        mode='outlined'
                        label="Your Name"
                        style={{ ...styles.textInput }}
                        onChangeText={(text) => { this.setState({ userName: text }) }}
                        value={this.state.userName}
                    />
                    <TextInput
                        mode='outlined'
                        label="Email Id"
                        style={{ ...styles.textInput }}
                        storingCreads
                        onChangeText={(text) => { this.setState({ emailId: text }) }}
                        value={this.state.emailId}
                    />
                    <TextInput
                        mode='outlined'
                        label="Phone No."
                        style={{ ...styles.textInput }}
                        onChangeText={(text) => { this.setState({ phoneNo: text }) }}
                        value={this.state.phoneNo}
                    />

                    <TouchableOpacity onPress={() => { this.storingCreads(this.props) }} >
                        <View style={{
                            ...styles.button,
                            borderWidth: 1,
                            borderColor: COLORS.blue,
                            marginTop: 15,
                        }}>
                            <Text style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: COLORS.blue,
                            }}
                            >{this.state.registerButton}
                            </Text>
                        </View>
                    </TouchableOpacity>

                </View>
                <View style={{ width: '100%', alignItems: 'center', }}>
                    <Image style={{ width: '60%', height: 40 }} source={images.sayri} />
                </View>
            </ImageBackground>



        )
    }
}

export default LogIn2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    button: {
        backgroundColor: 'white',
        height: 40,
        marginHorizontal: 100,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 15,
        shadowOffset: { width: 2, height: 2 },
        shadowColor: 'black',
        shadowOpacity: 0.2
    },
    closeButton: {
        height: 40, width: 40,
        backgroundColor: 'white',
        borderRadius: 20,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: -20,
        left: width / 2 - 20,
        shadowOffset: { width: 2, height: 2 },
        shadowColor: 'black',
        shadowOpacity: 0.2
    },
    textInput: {
        height: 35,
        marginHorizontal: 40,
        paddingLeft: 10,
        marginVertical: 5,
    }
})
