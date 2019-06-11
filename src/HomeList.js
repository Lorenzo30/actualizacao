import React,{Component} from "react";
import {View,Text,Image,StyleSheet} from "react-native";


export default class HomeList extends Component{


  static navigationOptions = {
     
    title:"Home"
    
   
  }


   render(){

     return(

       <View> 

             <Text>Hola</Text> 
         </View>
     )
   }
}

const styles  = StyleSheet.create({
  
  icone:{
   width:26,
   height:26
 

  }




})
