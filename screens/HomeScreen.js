import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView, Platform, StatusBar, ImageBackground, Image} from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return(
      <View style={styles.container}>
        <ImageBackground source = {require("../assets/stars.gif")} style={styles.backgroundImage}>
          <Image source={require("../assets/main-icon.png")} style={{width: 250, height: 250, alignSelf: 'center', margin: 0}}></Image>

          <Text style={{alignSelf: 'center', fontSize: 50, fontWeight: 'bold', color: 'white', flex: 0.5}}>Stellar App</Text>

          <TouchableOpacity style={styles.routeCard} onPress={()=>
            this.props.navigation.navigate("DailyPic")
          }>
            <Text style={styles.routeText}>Daily Pictures</Text>
            <Image source={require("../assets/daily_pictures.png")} style={styles.iconImage}></Image>
          </TouchableOpacity>

          <TouchableOpacity style={styles.routeCard} onPress={()=>
            this.props.navigation.navigate("StarMap")
          }>
            <Text style={styles.routeText}>Star Map</Text>
            <Image source={require("../assets/star_map.png")} style={styles.iconImage}></Image>
          </TouchableOpacity>

          <TouchableOpacity style={styles.routeCard} onPress={()=>
            this.props.navigation.navigate("SpaceCrafts")
          }>
            <Text style={styles.routeText}>Space Crafts</Text>
            <Image source={require("../assets/space_crafts.png")} style={styles.iconImage}></Image>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    routeCard: {
        flex: 0.12,
        margin: 10,
        marginLeft: 10,
        marginRight: 30,
        marginTop: 20,
        borderRadius: 100,
        backgroundColor: 'white',
        padding: 20
    },

    routeText: {
        fontSize: 25,
        fontWeight: "bold",
        color: "purple",
        paddingRight: 50,
        justifyContent: "center",
        alignItems: "center",
    },

    iconImage: {
        position: "absolute",
        height: 100,
        width: 100,
        resizeMode: "contain",
        right: -30,
        top: -15
    },

    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
})