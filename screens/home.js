import react,{Component} from "react"
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ImageBackground
  }from "react-native"
  import appTitle from "../components/appTitle.js"
  

  export default class HomeScreen extends Component{
    render(){
      return(
      <View>
      <SafeAreaView style={styles.droidSafeArea} />
      <Text style={styles.heading}> Knowledge App</Text>
        <View> 
        <View style={styles.buttonContainer}> 
        <TouchableOpacity style={styles.button} onPress={()=>
        this.props.navigation.navigate("Maths")}> 
        <Text style={styles.buttonText}> Maths </Text>
         <Image source={require("maths.png")} style={styles.iconImage}></Image>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}onPress={()=>
        this.props.navigation.navigate("Science")}> 
        <Text style={styles.buttonText}> Science </Text>
         <Image source={require("science.png")} style={styles.iconImage}></Image>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}onPress={()=>
        this.props.navigation.navigate("English")}> 
        <Text style={styles.buttonText}> English </Text>
         <Image source={require("english.png")} style={styles.iconImage}></Image>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}onPress={()=>
        this.props.navigation.navigate("CurrentAffairs")}> 
        <Text style={styles.buttonText}> Current Affairs </Text>
         <Image source={require("current news.png")} style={{
         width:100 ,
         height:100,
         position:"absolute",
          left:210
          }}></Image>
        </TouchableOpacity>
        </View>
        </View>
        </View>
      )
    }
  }
  
  const styles=StyleSheet.create({

buttonContainer:{
  justifyContent:"center",
  marginTop:50,
},
button:{
justifyContent:"center",
alignItems:"center",
width:250,
height:100,
backgroundColor:"green",
marginLeft:55,
margin:20,
borderRadius:700,
},
buttonText:{
  fontSize:30,
},
heading:{
  fontWeight:"bold",
  fontSize:40,
  justifyContent:"center",
  marginLeft:30
},
 droidSafeArea: {  
  marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
 },
 iconImage:{
   width:100,
   height:100,
   position:"absolute",
   resizeMode:"contain",
   left:170
 },

  })