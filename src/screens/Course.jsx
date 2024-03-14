import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Courses from '../api/Courseapi';
import { JosefinSans_500Medium } from "@expo-google-fonts/josefin-sans"
const Course = ({ navigation }) => {
  const coursecard = ({ item }) => {
    return (
      <View style={styles.maincontainer}>
        <View style={styles.coursecontainer}>
          <View>
            <Image
              style={styles.cardImage}
              source={item.image}
              resizeMode='contain'
            />
          </View>
          <Text style={styles.mainHeader}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <View style={styles.buttoncontainer}>
            <TouchableOpacity
              style={styles.buttonstyle}
              onPress={() => {
                navigation.navigate("courseDetails",{courseId:item.id})
              }}>
              <Text style={styles.buttonText}> Course details</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
  return (
    <FlatList
      keyExtractor={(item) => { item.id }}
      data={Courses}
      renderItem={coursecard}
    />
  )
}
const styles = StyleSheet.create({
  maincontainer: {
    paddingHorizontal: 20,

  },
  coursecontainer: {
    padding: 30,
    backgroundColor: "",
    textAlign: "center",
    borderRadius: 5,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
    marginVertical: 30,
  },
  cardImage: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,

  },
  mainHeader: {
    fontSize: 22,
    color: "#344055",
    textTransform: "uppercase",
    paddingTop: 15,
    textAlign: "center",
    fontFamily: "Nunito_600SemiBold",

  },
  description:{
    textAlign: "left",
    fontFamily: "JosefinSans_400Regular",
    paddingBottom: 15,
    lineHeight: 20,
    fontSize:16,
    color:"#7d7d7d",
  },
  buttoncontainer: {
   display:"flex",
   flexDirection:"row",
   justifyContent:"center",
  },
  buttonstyle: {
    backgroundColor: "#809fff",
    borderRadius:5,
    paddingVertical:10,
    paddingHorizontal:20,
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
  buttonText: {
      fontSize:20,
      color: "#eee",
      fontFamily: "JosefinSans_500Medium",
      textTransform:"capitalize",
  },
})
export default Course

