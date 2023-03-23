import React, { Component } from 'react';
import { Text, View ,StyleSheet,TouchableOpacity} from 'react-native';

export default class MathsScreen extends Component {
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
                }}> Maths Screen!! </Text>
                <View style={{
                  flex:1,
                  marginTop:50,
                  marginLeft:20
                }}>
                <Text style={styles.points }>  AREA :-{"\n"}1)Rectangle-L*B{"\n"}
                 2) Triangle-1/2*B*H{"\n"}
                 3) Circle-πr2{"\n"}
                 4) Square-Side*Side </Text>
                 <Text> </Text>
                <Text style={styles.pointer }>  PERIMETER :-{"\n"}1)Rectangle-2(L+B){"\n"}
                 2) Triangle-Sum of 3 sides{"\n"}
                 3) Circle-2πrh{"\n"}
                 4) Square-4*Side </Text>
                 <Text> </Text>
                 <Text style={styles.points }>  Volume :-{"\n"}1) Cube-L*B*H{"\n"}
                 2) Cuboid-Base Area*Height{"\n"}
                 3) Cone-1/3*πr2*Height{"\n"}
                 4) Cylinder-πr2*Height{"\n"}
                 5) Sphere-4/3*πr3 </Text>
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