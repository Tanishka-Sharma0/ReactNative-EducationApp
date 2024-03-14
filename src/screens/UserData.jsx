import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import usedata from "../api/userapi";

const UserData = () => {
  const [isLoaded, setisLoaded] = useState(true);
  const [mydata, setmydata] = useState([]);

  const getUserData = async () => {
    try {
      const response = await fetch("https://thapatechnical.github.io/userapi/users.json");
      const realData = await response.json();
      setmydata(realData);
      setisLoaded(false);
      console.log(realData);
    }
    catch (err) {
      console.log("Error: ", err);
    }
  }
  useEffect(() => {
    getUserData();
  }, []);
  const showData = ({ item }) => {
    return (
      <View style={styles.card}>
        <View style={styles.imgContainer}>
          <Image style={styles.imgStyle} source={{ uri: item.image }} />
        </View>
        <View>
          <View style={styles.bioDataContainer}>
            <Text style={styles.biodata}>Bio Data</Text>
            <Text style={styles.idNumber}>
              {item.id < 10 ? `#0${item.id}` : `#{item.id}`}
            </Text>
          </View>
          <View style={styles.maincontain}>
            <Text style={styles.myName}>Name:{item.name} </Text>
            <Text style={styles.myName}> mobile:{item.email} </Text>
            <Text style={styles.myName}>Email:{item.mobile}</Text>
          </View>
        </View>
      </View>
    )
  }
  return (
    <View>
      <Text style={styles.mainHeader}>List Of Students</Text>
      <FlatList
        keyExtractor={(item) => item.id}
        data={mydata}
        renderItem={showData}
        horizontal
        showsHorizontalScrollIndicator={true}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  maincontainer: {
    width: "100%",
    minHeight: "100%",
    paddingVertical: 50,
    backgroundColor: "#ebedee",
  },
  card: {
    width: 250,
    height: 350,
    backgroundColor: "#fff",
    borderRadius: 5,
    margin: 20
  },
  imgContainer: {
    padding: 10,
  },
  bioDataContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#353535",
    justifyContent: "space-between",
    padding: 10,
    fontFamily: "JosefinSans_400Regular",

  },
  biodata: {
    color: "#fff",
    fontSize:30,
    fontFamily: "JosefinSans_400Regular",
  },
  idNumber: {
    color: "rgba(255, 255, 255, 0.5)",
    fontSize:20,
    fontFamily: "JosefinSans_400Regular",
    paddingRight:10,
  },
  maincontain: {
   padding:10,
   backgroundColor: "#353535",
   borderBottomLeftRadius:5,
   borderBottomRightRadius:5,
  },
  myName: {
    color: "#fff",
    marginBottom:10,
    fontSize:14,
    fontFamily: "JosefinSans_400Regular",
    alignSelf:"flex-start",
    textTransform:"capitalize"
  },
  imgStyle:{
    width: "100%",
    height:180,
  },
  mainHeader:{
    color: "#a18ce5",
    fontSize:30,
    alignItems:"center",
    fontFamily: "JosefinSans_400Regular",
  }
})
export default UserData

