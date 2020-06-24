/* eslint-disable quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable semi */
/* eslint-disable eol-last */
/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React, { Component } from 'react';  
import { StyleSheet } from 'react-native';  
  
import {  
    createSwitchNavigator,  
    createAppContainer,  
} from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer'  

import amortizedStackNavigator from './src/components/amortizedStackNavigator'
import deferredPaymentStackNavigator from './src/components/deferredPaymentStackNavigator'
import bondStackNavigator from './src/components/bondStackNavigator'
export default class App extends Component {  
    render() {  
        return <AppContainer />;  
    }  
}  
 
const AppDrawerNavigator = createDrawerNavigator({  
    Amortized: {  
        screen: amortizedStackNavigator  
    },  
    DeferredPayment: {  
        screen: deferredPaymentStackNavigator  
    },  
    Bond: {  
        screen: bondStackNavigator  
  },
});  
  
const AppSwitchNavigator = createSwitchNavigator({  
    Amortized: { screen: AppDrawerNavigator },  
    DeferredPayment: { screen: deferredPaymentStackNavigator },  
    Bond: { screen: deferredPaymentStackNavigator }, 
});  
  
const AppContainer = createAppContainer(AppSwitchNavigator);  
  
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        alignItems: 'center',  
        justifyContent: 'center'  
    }  
});  
