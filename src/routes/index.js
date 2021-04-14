import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import {  createStackNavigator } from 'react-navigation-stack';

import Feed from '../sreens/Feed';

import camera from '../../assets/camera.png';

const MainNavigator = createStackNavigator({
    Feed
},{
    defaultNavigationOptions: {
        headerTitle: <Text>RECLAME GUANAMBI</Text>,
        headerLeft: (
            <TouchableOpacity style={{ marginLeft: 20, }}>
                <Image source={camera} />
            </TouchableOpacity>
        ),
    }
});

export default createAppContainer(MainNavigator);