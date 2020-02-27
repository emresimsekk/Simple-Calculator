import React,{Component} from 'react';
import {StyleSheet,Text,View} from 'react-native';

export default class Header extends Component{
    render()
    {
        const {header,headerText}=styles;
        return( 
            <View style={header}>
                <Text style={headerText}>{this.props.headerText}</Text>
            </View>
        )

    }
}
const styles=StyleSheet.create({
    
  header:{
    height:60,
    shadowColor: "#000",
    shadowOffset: { width: 0,height: 7,},
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#ECEFF1'
  },
  headerText:{
    fontSize:20,
    textAlign:'center'
  }
})