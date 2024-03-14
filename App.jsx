import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import contact from './src/screens/contact';
import UserData from './src/screens/UserData';
import About from './src/screens/About';
import Course from './src/screens/Course';
import  { useFonts , JosefinSans_400Regular,JosefinSans_500Medium} from "@expo-google-fonts/josefin-sans";
import  { Nunito_600SemiBold,Nunito_700Bold} from "@expo-google-fonts/nunito";
import  AppLoading from "expo-app-loading";
import courseDetails from './src/screens/courseDetails';
const Stack = createNativeStackNavigator();

function App() { 
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
          <Stack.Screen name="Course" component={Course} options={{headerBackTitleStyle:{fontSize:25, fontFamily:"Nunito_600SemiBold"},headerTitle:"Courses",headerTitleAlign:"center"}}/>
          <Stack.Screen name="Contact" component={contact} options={{headerBackTitleStyle:{fontSize:25, fontFamily:"Nunito_600SemiBold"},headerTitleAlign:"center"}}/>
          <Stack.Screen name="Student" component={UserData} options={{headerBackTitleStyle:{fontSize:25, fontFamily:"Nunito_600SemiBold"},headerTitleAlign:"center"}}/>
          <Stack.Screen name="About" component={About} options={{headerBackTitleStyle:{fontSize:25, fontFamily:"Nunito_600SemiBold"},headerTitleAlign:"center"}}/>
          <Stack.Screen name="courseDetails" component={courseDetails} options={{headerBackTitleStyle:{fontSize:25, fontFamily:"Nunito_600SemiBold"},headerTitleAlign:"center"}}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
export default App;
