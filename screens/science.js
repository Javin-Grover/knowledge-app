import React, { Component } from 'react';
import { Text, View ,StyleSheet,TouchableOpacity} from 'react-native';

export default class ScienceScreen extends Component {
    render() {
        return (
            <View
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop:10
                }}>
                <Text style={{
                  fontSize:20,
                  fontWeight:"bold",
                  backgroundColor:"cyan"
                }}> Science Screen!! </Text>
                <View style={{
                  flex:1,
                  marginTop:50,
                  marginLeft:20
                }}>
                <Text style={styles.points }>  Friction :-{"\n"}1)
                Friction is the opposing force force acting between two objects in contact.
                For eg. If a cycle is moving and suddenly we stop its paddling after a few time it comes to
                rest automatically due a force of friction acting between tyres and roads.
                </Text>
                 <Text> </Text>
                <Text style={styles.pointer }>  Force :-{"\n"}1)
                Force is a push or pull on objects. For eg. when we open a drawer then we are pulling the drawer
                which means the force is being applied on it. There are two types of forces :-{"\n"}1)
                1) Contact Force {"\n"}1)
                2) Non-Contact Force 
                 </Text>
                 <Text> </Text>
                
                 <TouchableOpacity style={styles.back} onPress={() =>
                 this.props.navigation.navigate("Home")}>
                  <Text style={{
                   fontSize:30,
                   color:"black",
                   fontWeight:"bold",
                 }}> Back </Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  points:{
    fontSize:30,
    color:"red",
  },
    pointer:{
    fontSize:30,
    color:"blue",
  },
  back:{
    backgroundColor:"cyan",
    width:100,
    height:40,
    justifyContent:"center",
    alignItems:"center",
    marginLeft:90
  }
})