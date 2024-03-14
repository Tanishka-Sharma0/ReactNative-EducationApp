import { StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native'
import React from 'react';
import courses from "../api/Courseapi";

const courseDetails = ({navigation,route}) => {
  const id = route.params.courseId;
  console.log(id);

  const selectedCourse = courses.find((element)=>{
    return id === element.id
  });
  return (
    <View style={styles.maincontainer}>
        <View style={styles.coursecontainer}>
          <View>
            <Image
              style={styles.cardImage}
              source={selectedCourse.image}
              resizeMode='contain'
            />
          </View>
          <Text style={styles.mainHeader}>{selectedCourse.title}</Text>
          <Text style={styles.description}>{selectedCourse.description}</Text>
          <Text style={styles.description}>{selectedCourse.Course1}</Text>
          <Text style={styles.description}>{selectedCourse.Course2}</Text>
          <Text style={styles.description}>{selectedCourse.Course3}</Text>
          <View style={styles.buttoncontainer}>
          <Text style={styles.price}>{selectedCourse.Price}</Text>
            <TouchableOpacity
              style={styles.buttonstyle}
              onPress={() => {
                navigation.navigate("Course")
              }}>
              <Text style={styles.buttonText}> Join Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
  )
}

export default courseDetails

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
  price:{
    backgroundColor: "#344055",
    color: "#eee",
    paddingVertical: 10,
    paddingHorizontal: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 1,
    borderTopLeftRadius: 1,
    fontSize: 20,
    fontFamily: "JosefinSans_400Regular",
    textAlign: "center",
  },
})