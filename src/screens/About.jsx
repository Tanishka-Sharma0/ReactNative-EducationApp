import { Image, StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native'
import React from 'react'

const About = () => {
  return (
    <View style={styles.aboutConatiner}>
      <Text style={styles.mainHeader}>Learn Hub</Text>
      <Text style={styles.parastyle}>A Journey for UPSC</Text>
      <View>
        <Image
          style={styles.imgstyle}
          source={require("../../assets/logo.jpeg")}
        />
      </View>

      <View style={styles.aboutLayout}>
        <Text style={styles.subHeader}>About me</Text>
        <Text style={[styles.parastyle, styles.aboutPara]}>Learn Hub is the platform for upsc preparation along with consistent test series and answer writing session with in affordable fees and regular time slots </Text>
      </View>

      <Text style={styles.mainHeader}>Follow us on social Media</Text>
      <View style={styles.menucontainer}>
        
        <TouchableOpacity
          style={styles.buttonstyle}
          onPress={() => Linking.openURL("https://www.instagram.com/")}
        >
          <Image
            style={styles.iconstyle}
            source={require("../../assets/instagramlogo.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonstyle}
          onPress={() => Linking.openURL("https://www.youtube.com/")}
        >
          <Image
            style={styles.iconstyle}
            source={require("../../assets/youtube.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonstyle}
          onPress={() => Linking.openURL("https://twitter.com/")}
        >
          <Image
            style={styles.iconstyle}
            source={require("../../assets/twiitterlogo.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  aboutConatiner: {
    display: "flex",
    alignItems: "center"
  },
  mainHeader: {
    color: "#344055",
    fontSize: 18,
    textTransform: "uppercase",
    marginTop: 50,
    fontWeight: "500",
    fontFamily: "JosefinSans_700Bold",
    marginBottom:10,
  },
  parastyle: {
    color: "#7d7d7d", 
    paddingBottom:30,
    fontSize: 18,
  },
  imgstyle: {
    borderRadius: 100,
    height: 150,
    width: 150
  },
  aboutLayout: {
    backgroundColor: "#4c5dab",
    paddingHorizontal:30,
    marginVertical:30,
  },
  subHeader: {
    fontSize: 18,
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "500",
    marginVertical: 15,
    fontFamily: "JosefinSans_700Bold",
    alignSelf: "center",
  },
  aboutPara: {
    color: "#fff",
  },
  menucontainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  buttonstyle: {

  },
  iconstyle: {
    width: "100%",
    height: 50,
    aspectRatio: 1
  },

})
export default About

