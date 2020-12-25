import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking
} from 'react-native';

export default class LibraryScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
         <View style={styles.header}></View>
         <Image style={styles.avatar} source ={{uri:"https://i.ytimg.com/vi/JVxpyx_y_cw/maxresdefault.jpg"}}/>
         <View style={styles.body}>
         <View style={styles.bodyContent}>
              <Text style={styles.name}>Guru kishore</Text>
              <Text style={styles.info}>React Native developer</Text>
              <Text style={styles.description}>It build using react native (Expo cli)</Text>
              <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={{ fontWeight: 'bold' }} onPress={() => Linking.openURL("https://github.com/gurukishore111")}>Follow me in github</Text>  
              </TouchableOpacity>              
            </View>
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:"white",
    flex:1
  },
  header:{
    backgroundColor: "red",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  description:{
    fontSize:16,
    color:"#ffff",
    marginTop:10,
    textAlign: 'center'
  },
  body:{
    marginTop:40,
    
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
    
  },
  name:{
    fontSize:28,
    color: "black",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#829ee5",
    marginTop:10,
  }, 
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00bfff",
  }, 
});
 