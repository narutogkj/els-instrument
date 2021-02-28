import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';

import { categoryData } from '../Data';

import { COLORS, images } from "../constants";
import { Header, CardTwo, Fab } from '../widgets';

const AmusiScreen = ({ navigation }) => {
    return (
        <ImageBackground source={images.bg} style={{ flex: 1 }}>
            <View style={{ marginTop: 20 }}>
                <Header title="Plant tissue" navigation={navigation} />
            </View>
            <View style={{ marginBottom: 70 }}>
                <CardTwo categoryData={categoryData[0].items} navigation={navigation} />
            </View>
            <Fab navigation={navigation} />
        </ImageBackground>
    )
}

export default AmusiScreen;

const styles = StyleSheet.create({
    scrollableImages: {

    },
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4,
    },
})