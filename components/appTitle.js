import react,{Component} from "react"
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground
  }from "react-native"

  export default class appTitle extends Component{
    render(){
      return(
        <View style={styles.titleBar}>
        <Text style={styles.titleText}> Knowledge App </Text>
        </View>
      )
    }
  }

  const styles=StyleSheet.create({
    titleBar:{
backgroundColor:"grey"
},
titleText:{
  justifyContent:"center",
  color:"black",
  fontSize:40,
  fontWeight:"bold"
},
  })