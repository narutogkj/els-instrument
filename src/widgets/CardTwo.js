import React from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, images, SIZES } from '../constants';


const CardTwo = ({ categoryData, navigation }) => {
    const renderItem = ({ item }) => {
        return (
            <View>
                <TouchableOpacity
                    style={{
                        marginVertical: SIZES.base,
                        width: SIZES.width / 2.5
                    }}
                    onPress={() => navigation.navigate(item.url)}
                >
                    <View
                        style={{
                            height: 100,
                            borderTopLeftRadius: 5,
                            borderTopRightRadius: 5,
                            backgroundColor: COLORS.primary,
                        }}
                    >
                        <Image
                            source={item.photo}
                            resizeMode="cover"
                            style={{
                                width: "100%",
                                height: "100%",
                                borderTopRightRadius: 5,
                                borderTopLeftRadius: 5
                            }}
                        />
                    </View>
                    <View
                        style={{
                            padding: SIZES.padding,
                            backgroundColor: COLORS.lightGray4,
                            borderBottomLeftRadius: 5,
                            borderBottomRightRadius: 5
                        }}
                    >
                        <Text style={{ ...FONTS.body6 }}>{item.name}</Text>
                        <Text style={{ ...FONTS.body5 }}>Products: {item.products}</Text>

                    </View>

                </TouchableOpacity>
            </View>
        )
    }





    return (
        <SafeAreaView>
            <FlatList
                contentContainerStyle={{ paddingHorizontal: SIZES.padding * 2.3 }}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                data={categoryData}
                keyExtractor={item => `${item.itemId}`}
                showsVerticalScrollIndicator={false}
                renderItem={renderItem}
            />

        </SafeAreaView>
    )
}

export default CardTwo;
