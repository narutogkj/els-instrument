import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    View,
    ImageBackground,
    ScrollView
} from "react-native";
import { COLORS, images } from "../constants";
import { Header, CardTwo, Footer, Fab, Carousel } from '../widgets';

import { Button, Snackbar } from 'react-native-paper';
import { restaurantData, corouselData, clients, categoryData } from '../Data';

const HomeScreen = ({ navigation, route }) => {

    const [visible, setVisible] = useState(false);
    const onDismissSnackBar = () => setVisible(false);

    useEffect(() => {
        if (route.params) {
            if (route.params.register) {
                setVisible(true)
            }
            if (route.params.inquiry) {
                setVisible(true)
            }

        }

    }, [route.params])

    return (
        <ImageBackground source={images.bg} style={styles.container}>
            <View style={{ marginTop: 20 }}>
                <Header title="Els Instrument" isHomeScreen navigation={navigation} />
                <View>
                    <Carousel data={corouselData} />
                </View>
                <ScrollView style={{ marginBottom: 300 }}>
                    <CardTwo categoryData={categoryData} navigation={navigation} />
                    <Footer />
                </ScrollView>

            </View>

            <Snackbar
                visible={visible}
                onDismiss={onDismissSnackBar}
                duration={3000}
                style={{
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    alignContent: 'center',
                }}
            >
                Register Successfully.
            </Snackbar>

            <Fab navigation={navigation} />
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4,
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1
    }
})
export default HomeScreen;
