import React,{Component} from "react";
import {View,Text,Image,StyleSheet} from "react-native";
import {createStackNavigator,createAppContainer} from "react-navigation";

import HomeList from "./HomeList";
import HomeProdutos from "./HomeProdutos";

const navegador  = createStackNavigator({

    HomeList:{
      
      screen:HomeList


    },
    HomeProdutos:{

     screen:HomeProdutos

    }


})

const container  = createAppContainer(navegador);
export default container;

