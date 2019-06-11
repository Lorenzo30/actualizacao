import React,{Component} from "react";
import {View,Text,FlatList,ImageBackground,StyleSheet,Picker,TextInput,Slider,Switch,Image} from "react-native";
import {createBottomTabNavigator,createAppContainer} from "react-navigation";

import home from "./src/home";
import contato from "./src/contato";
import horarios from "./src/horarios";
import  sobre from "./src/sobre";

const navegador  = createBottomTabNavigator({
  
  home:{

     screen:home,
     tabBarLabel:"Home",
     NavigationOptions:()=>({
      tabBarShowIcon:true,
      tabBarIcon:({focused,tintColor}) => {
 
       if(focused){
          
        return (
          <Image  source={require("./images/home_azul.png")} /> 
 
       )
       }else{
        
        return(
           
          <Image  source={require("./images/home_preto.png")}/> 
          
        )
       }
    }


     })
     


     },
  contato:{
   
    screen:contato

  },
  horarios:{
    screen:horarios


  },
  sobre:{

    screen:sobre

  }
})


const appContainer  = createAppContainer(navegador);
export default appContainer;




