import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, ImageBackground } from 'react-native';

import { categoryData } from '../Data';

import { COLORS, images, FONTS, SIZES } from "../constants";
import { Header, CardTwo, Footer, Fab } from '../widgets';

const TSMHospitalScreen = ({ navigation }) => {

    return (
        <ImageBackground source={images.bg} style={{ flex: 1 }}>
            <View style={{ marginTop: 20 }}>
                <Header title="Walk in Germination Chamber" navigation={navigation} />
            </View>
            <View style={{ marginBottom: 70 }}>
                <CardTwo categoryData={categoryData[1].items} navigation={navigation} />
            </View>
            <Fab navigation={navigation} />
        </ImageBackground>
    )
}

export default TSMHospitalScreen;

const styles = StyleSheet.create({
    scrollableImages: {

    },
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4,
    },
})
