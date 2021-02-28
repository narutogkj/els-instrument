import * as React from 'react';

import { View, ImageBackground, Text, Image, ScrollView } from 'react-native';
import { Card, Title, Paragraph, Divider } from 'react-native-paper';

import { Header, Footer, Fab } from '../widgets/';
import { images, SIZES } from '../constants';

const ContactUs = ({ navigation }) => (
    <ImageBackground source={images.bg} style={{ flex: 1 }}>
        <View style={{ marginTop: 20 }}>
            <Header title="About Owners" navigation={navigation} />
        </View>
        <Card style={{ margin: 10, borderTopLeftRadius: 10, borderTopRightRadius: 10, borderColor: '#ed1c24', borderWidth: 1 }}>

            <Title style={{ textAlign: 'center', backgroundColor: '#ed1c24', borderTopLeftRadius: 10, borderTopRightRadius: 10, color: "#fff", padding: 5 }}>ELS INSTRUMENTS</Title>
            <Divider />
            <View style={{ padding: 5 }}>
                <Paragraph style={{ textAlign: 'center' }}>ELS Instruments is well recognized name in the country for Design and establishment of Plant Tissue Culture Laboratories.</Paragraph>
            </View>
        </Card>
        <Card style={{ margin: 10, borderTopLeftRadius: 10, borderTopRightRadius: 10, borderColor: '#ed1c24', borderWidth: 1 }}>

            <Title style={{ textAlign: 'center', backgroundColor: '#ed1c24', borderTopLeftRadius: 10, borderTopRightRadius: 10, color: "#fff", padding: 5 }}>OFFICE ADDRESS / FACTORY</Title>
            <Divider />
            <View style={{ padding: 5 }}>
                <Paragraph style={{ textAlign: 'center' }}>No. 36, 1st Main Road, Kavery Layout, Attur Main Road, Vidyaranyapura Post, Bengaluru,
Karnataka, India -56009</Paragraph>
            </View>
        </Card>
        <Card style={{ margin: 10, borderTopLeftRadius: 10, borderTopRightRadius: 10, borderColor: '#ed1c24', borderWidth: 1 }}>

            <Title style={{ textAlign: 'center', backgroundColor: '#ed1c24', borderTopLeftRadius: 10, borderTopRightRadius: 10, color: "#fff", padding: 5 }}>CONTACT INFO</Title>
            <Divider />
            <View style={{ padding: 5 }}>
                <Paragraph style={{ textAlign: 'center' }}>+91-9448827690, +91-9880871977, +91-9113486133</Paragraph>
                <Paragraph style={{ textAlign: 'center' }}>enquiry@elsinstruments.com</Paragraph>
            </View>
        </Card>
        <Card style={{ margin: 10, borderTopLeftRadius: 10, borderTopRightRadius: 10, borderColor: '#ed1c24', borderWidth: 1 }}>

            <Title style={{ textAlign: 'center', backgroundColor: '#ed1c24', borderTopLeftRadius: 10, borderTopRightRadius: 10, color: "#fff", padding: 5 }}>COMPANY INFO</Title>
            <Divider />
            <View style={{ padding: 5 }}>
                <Paragraph style={{ textAlign: 'center' }}>GST: – 29ADZPT5381M1Z6</Paragraph>
            </View>
        </Card>
    </ImageBackground>
);

export default ContactUs;