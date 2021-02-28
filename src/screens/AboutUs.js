import React from 'react';
import { View, ImageBackground, Text, Image, ScrollView } from 'react-native';
import { Divider } from 'react-native-paper';
import { Header, Footer, Fab } from '../widgets/';
import { images, SIZES } from '../constants';


const AboutUs = ({ navigation }) => {
    return (
        <ImageBackground source={images.bg} style={{ flex: 1 }}>
            <View style={{ marginTop: 20 }}>
                <Header title="About Owners" navigation={navigation} />
            </View>
            <ScrollView>
                <View style={{
                    flex: 1, flexDirection: 'row', alignContent: 'center',
                    justifyContent: 'center',
                    shadowColor: '#000',
                    shadowOffset: { width: 0.5, height: 0.5 },
                    shadowOpacity: 0.5,
                    shadowRadius: 3,
                    elevation: 15,
                    borderRadius: 300, margin: 20

                }}>
                    <Image style={{
                        width: '95%', height: 290, borderRadius: 300
                    }} source={images.Atul} />
                </View>
                <View style={{ flex: 1, margin: 5, alignItems: 'center' }}>
                    <Text style={{ fontSize: SIZES.h3, color: 'rgba(0,0,0,0.7)' }}>Sabu</Text>
                    <Text style={{ fontSize: SIZES.body3, color: 'rgba(0,0,0,0.4)' }}>Founder & CEO</Text>
                    <View style={{ marginVertical: 5 }}></View>
                    <Text style={{ fontSize: SIZES.body3, color: 'rgba(0,0,0,0.6)', margin: 10, textAlign: 'justify' }}>ELS instruments is well recognized name in the
                    country for Design and establishment of Plant
                    Tissue Culture Laboratories and other biological Laboratories since last 20 Years.</Text>
                    <Text style={{ fontSize: SIZES.body3, color: 'rgba(0,0,0,0.6)', margin: 10, textAlign: 'justify' }}>Our specialization lies in providing Operation,
                    design, setting up of Laboratories for research, Testing and Commercial Production. We at ELS Instruments command
                    an excellent brand image across Indian Subcontinent by winning the trust of more than 100 Customers with our quality
                    products and dedicated services. We provide customized and value based for their distinct requirement. We work in
                     close coordination with our customers in understanding their needs and provide value-based solutions in turnkey and part work</Text>
                </View>
                <Divider />
                <Footer />
            </ScrollView>
            <Fab navigation={navigation} />
        </ImageBackground>
    )
}

export default AboutUs;