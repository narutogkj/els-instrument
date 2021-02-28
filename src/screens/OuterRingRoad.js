import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, ImageBackground } from 'react-native';

import { categoryData } from '../Data';

import { COLORS, images, FONTS, SIZES } from "../constants";
import { Header, CardTwo, Footer, Fab } from '../widgets';

const OuterRingRoad = ({ navigation }) => {

    return (
        <ImageBackground source={images.bg} style={{ flex: 1 }}>
            <View style={{ marginTop: 20 }}>
                <Header title="Lab Furnitures" navigation={navigation} />
            </View>
            <View style={{ marginBottom: 70 }}>
                <CardTwo categoryData={categoryData[3].items} navigation={navigation} />
            </View>
            <Fab navigation={navigation} />
        </ImageBackground>
    )
}

export default OuterRingRoad;

const styles = StyleSheet.create({
    scrollableImages: {

    },
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4,
    },
})