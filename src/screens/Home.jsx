import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Menu from '../components/Menu';
const Home = (props) => {
  const description = "Make Your CivilServices Dream come True..";
  return (
    <View style={styles.mainContainer}>
      <View style={styles.hometop}>
        <Image
          style={styles.headerImage}
          resizeMode='contain'
          source={require('../../assets/images.png')} />
        <Text style={styles.mainHeader}>welcome to LearnHub</Text>
        <Text style={[
          styles.mainHeader,
          {
            fontSize: 33,
            color: "#4c5dab",
            marginTop: 0
          },
        ]}>made by Tanishka...</Text>
        <Text style={styles.paraStyle}>{description}</Text>
      </View>

      <View style = {styles.menustyle}>
        <View style = {styles.lineheight}></View>
        <Menu></Menu>
        <View style = {[styles.lineheight,{
          marginVertical:10,
        }]}></View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    textAlign: "center"
  },

  hometop: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  headerImage: {
    height: undefined,
    width: "100%",
    aspectRatio: 1,
    borderRadius: 100,
    display: "flex",
    alignItems: "stretch",
    marginTop: 20,
  },

  mainHeader: {
    fontSize: 30,
    textTransform: "uppercase",
    color: "#344055"
  },

  paraStyle: {
    textAlign: "left",
    fontSize: 19,
    paddingBottom: 50,
    marginTop: 30,
    lineHeight: 26,
    color: "#7d7d7d",
  },
  lineheight:{
   marginBottom:20,
   borderwidth:0.5,
   borderColor:"grey"
  },
});
export default Home;