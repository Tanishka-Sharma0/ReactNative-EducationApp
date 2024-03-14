import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native'
import React, { useState } from 'react'
import Checkbox from 'expo-checkbox';

const contact = ({navigation}) => {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState(" ");
  const [message, setmessage] = useState(" ");
  const [agree, setagree] = useState(false);

  const submit = () => {
      if(!name && !email && !message && ! phone){
     Alert.alert("Please fill all the Fields");
      }
      else{
        Alert.alert(`Thank You ${name}`);
         navigation.navigate("Home");
      }
  }
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Level up your Knowledge</Text>
      <Text style={styles.description}>You can Reach us any time via LearnHub.com</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.Labels}>Enter Your Name</Text>
        <TextInput
          style={styles.inputstyles}
          placeholder={'Ram sharma'}
          value={name}
          onChangeText={(username) => setName(username)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.Labels}>Enter Your Email</Text>
        <TextInput
          style={styles.inputstyles}
          placeholder={'demo@gmail.com'}
          value={email}
          onChangeText={(useremail) => setemail(useremail)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.Labels}>Enter Your mobile</Text>
        <TextInput
          style={styles.inputstyles}
          placeholder={'+14523678'}
          value={phone}
          onChangeText={(userphone) => setphone(userphone)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.Labels}>How can we help you?</Text>
        <TextInput
          style={[styles.inputstyles, styles.mutilinialStyle]}
          placeholder={'Tell us about yourself'}
          value={message}
          onChangeText={(msg) => setmessage(msg)}
          numberOfLines={5}
          multiline={true}
        />
      </View>

      <View style={styles.wrapper}>
        <Checkbox
          value={agree}
          onValueChange={() => setagree(!agree)}
          color={agree ? "#4630EB" : undefined}
        />
        <Text style={styles.wrapperText}> I hve Read and Agreed with Terms & conditions</Text>
      </View>

      <TouchableOpacity
        onPress={submit}
        disabled={!agree}
        style={[
          styles.buttonStyle,
          {
            backgroundColor: agree ? "#4630EB" : "grey",
          }
        ]}
      >
        <Text style={styles.buttonText}>Contact Us</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#fff",
    paddingHorizontal: 30,
    height: "100%"
  },
  mainHeader: {
    color: "#344055",
    fontSize: 30,
    fontWeight: "500",
    paddingTop: 20,
    fontFamily: "JosefinSans_500Medium",
    paddingBottom: 15,
    textTransform: "capitalize",
  },
  description: {
    color: "#7d7d7d",
    fontSize: 20,
    paddingBottom: 20,
    fontFamily: "JosefinSans_400Light",
    lineHeight: 25,
  },
  inputContainer: {
    marginTop: 20
  },
  Labels: {
    color: "#7d7d7d",
    fontWeight: "bold",
    fontFamily: "JosefinSans_300Light",
    paddingBottom: 5,
    lineHeight: 25,
  },
  inputstyles: {
    borderColor: "rgba(0, 0, 0, 0.3)",
    borderWidth: 1,
    borderRadius: 2,
    paddingVertical: 6,
    paddingHorizontal: 15,

  },
  mutilinialStyle: {
    paddingVertical: 4
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    fontFamily: "JosefinSans_300Light",
    marginTop: 20,
  },
  wrapperText: {
    color: "#7d7d7d",
    marginLeft: 10,
    fontFamily: "JosefinSans_300Light",
  },
  buttonText: {
    color: "#eee",
  },
  buttonStyle: {
    marginVertical:30,
    paddingVertical:10,
    paddingHorizontal:18,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:5,
  },
});
export default contact

