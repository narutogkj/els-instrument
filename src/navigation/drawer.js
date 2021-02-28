import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import About from '../screens/About';
import LogOut from "../screens/LogOut";
import Inquiry from '../screens/Inquiry';
import AboutUs from '../screens/AboutUs';
import AmusiScreen from '../screens/AmusiScreen';
import TSMHospitalScreen from '../screens/TSMHospitalScreen';
import BasantKheraScreen from '../screens/BasantKheraScreen';
import OuterRingRoad from '../screens/OuterRingRoad';

import ContactUs from '../screens/ContactUs';
const Drawer = createDrawerNavigator();

const drawer = () => {
    return (
        <Drawer.Navigator drawerPosition="right">
            <Drawer.Screen name="Our Products" label="Our Products" component={HomeScreen} />
            <Drawer.Screen name="1). Plant Tissue Culture" component={AmusiScreen} />
            <Drawer.Screen name="2). Walk in Germination Chamber" component={TSMHospitalScreen} />
            <Drawer.Screen name="3). Genral Labrotory Instuments" component={BasantKheraScreen} />
            <Drawer.Screen name="4). Lab Furnitures" component={OuterRingRoad} />
            <Drawer.Screen name="Our Services" component={About} />
            <Drawer.Screen name="About Els Instrument" component={AboutUs} />
            <Drawer.Screen name="Contact Us" component={ContactUs} />
            <Drawer.Screen name="Log Out" component={LogOut} />
        </Drawer.Navigator>
    );
}

export default drawer;