import { StyleSheet, Text, View  , TouchableOpacity , Image} from 'react-native'
import {useNavigation} from "@react-navigation/native";
import React from 'react'

const Menu = () => {
  const navigation  = useNavigation();
  return (
    <View style = {styles.maincontainer}>
      <TouchableOpacity 
      style = {styles.maincontainer}
      onPress={()=>{
        navigation.navigate('Home')
      }}
      >
      <Image
      style = {styles.iconstyle}
      source={require('../../assets/home.png')}
      />
      </TouchableOpacity>

      <TouchableOpacity 
      style = {styles.maincontainer}
      onPress={()=>{
        navigation.navigate('Course')
      }}
      >
      <Image
      style = {styles.iconstyle}
      source={require('../../assets/course.png')}
      />
      </TouchableOpacity>

      <TouchableOpacity 
      style = {styles.maincontainer}
      onPress={()=>{
        navigation.navigate('About')
      }}
      >
      <Image
      style = {styles.iconstyle}
      source={require('../../assets/About.png')}
      />
      </TouchableOpacity>

      <TouchableOpacity 
      style = {styles.maincontainer}
      onPress={()=>{
        navigation.navigate('Student')
      }}
      >
      <Image
      style = {styles.iconstyle}
      source={require('../../assets/userdata.png')}
      />
      </TouchableOpacity>

      <TouchableOpacity 
      style = {styles.maincontainer}
      onPress={()=>{
        navigation.navigate('Contact')
      }}
      >
      <Image
      style = {styles.iconstyle}
      source={require('../../assets/contacticon.png')}
      />
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  maincontainer :{
    flexDirection:"row",
    justifyContent:"space-evenly"

  },
  buttonstyle:{

  },
  textstyles:{
   textTransform:"uppercase",
  },
  iconstyle:{
    aspectRatio:1,
    width:"40%",
    height:20,
  }
})
export default Menu

