/* eslint-disable quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable semi */
/* eslint-disable eol-last */
/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React from 'react';  
import { TouchableOpacity, Image } from 'react-native';  
import { createStackNavigator } from 'react-navigation-stack'

import DeferredPaymentLoan from './deferredPaymentLoan'

const deferredPaymentStackNavigator = createStackNavigator(  
    {  
        deferredPaymentNavigator: DeferredPaymentLoan  
    },  
    {  
        defaultNavigationOptions: ({ navigation }) => {  
            return {  
                headerLeft: (  
                  <TouchableOpacity onPress={() => navigation.openDrawer()}>
                  <Image
                    source={require('./images/drawer.png')}
                    style={{ width: 25, height: 25, marginLeft: 10 }}
                  />
                </TouchableOpacity>
                )  
            };  
        }  
    }  
);  

export default deferredPaymentStackNavigator;