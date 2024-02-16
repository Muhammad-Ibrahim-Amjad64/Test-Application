// Drawer
// AI CHATBOT LAYOUT SET
// LOGIN SINGNUP
// CHAT IMPLEMENTATION



// TO DO
// Login dignup token management with context  3   
// EDIT PROFILE 1  --
// CHAT IMPEMENTATION  2  --
// UI FINALIZATION OF BOTTOM TABS LOGINA AND SIGNUP SCREENS 4

/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, TextInput, Button, Text, ScrollView, Image} from 'react-native';
import {generateResponse} from './src/pages/screens/ChatGptScreen';
// import Login from './src/pages/Auth/Login';

//  Image Upload with firebase without expo
// https://www.youtube.com/watch?v=9nBk_WVTiJQ


// TO DO TODAY FIREBASE AUTHENTICATION 
// CHAT IMPLEMENTATION

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Login from './src/pages/Auth/Login';
import Home from './src/pages/screens/Home';
import About from './src/pages/screens/About';
import Signup from './src/pages/Auth/Signup';
import Settings from './src/pages/screens/Settings';
import UsersChat from './src/pages/screens/UsersChat';
import UserChat from './src/pages/screens/UserChat';
import AIChat from './src/pages/screens/AIChat';
import CoustomDrawer from './src/Navigation/CustomDrawer';
import { images } from './src/Utils/constants/Themes';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ai from "./src/Assets/ai.png"
import group from "./src/Assets/group.png"

const App = () => {
 const [token, setToken] = useState("")
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [authenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    async function fetchToken() {
      await AsyncStorage.setItem('token', token);
      const StoredToken = await AsyncStorage?.getItem('token');
      setToken(StoredToken);
      console.log(StoredToken, "token stored runned ")
    }

    fetchToken();
  }, [token]);

  // const sendMessage = async () => {
  //   if (!userInput) return;

  //   setMessages(prevMessages => [...prevMessages, `User: ${userInput}`]);
  //   const botResponse = await generateResponse(userInput);
  //   setMessages(prevMessages => [...prevMessages, `ChatGPT: ${botResponse}`]);
  //   setUserInput('');
  // };

  const Tab = createBottomTabNavigator();
  const Drawer = createDrawerNavigator();
  const Stack = createNativeStackNavigator();


  // const handleAuthenticated = () => {
  //   setIsAuthenticated(true);
  //   console.log(authenticated, 'auth');
  // };
  const TabNavigator = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen
          options={{ tabBarActiveTintColor:"black",  tabBarIcon: ({ focused }) => (
            <Image
              source={ai}
              style={{
                width: 20,
                height: 20,
                tintColor: focused ? 'black' : 'gray', // Change the color based on tab focus
              }}
            />
          ),}}
          name="Chat with AI"
          component={AIChat}></Tab.Screen>
        <Tab.Screen  options={{ tabBarActiveTintColor:"black", tabBarIcon: ({ focused }) => (
            <Image
              source={group}
              style={{
                width: 20,
                height: 20,
                tintColor: focused ? 'black' : 'gray', // Change the color based on tab focus
              }}
            />
          ),}} name="Chat with Users" component={UsersChat} />
      </Tab.Navigator>
    );
  };


  const AuthNavigator = () => {
    return    <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen
      name="Login"
      component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      {/* <Stack.Screen name='AppMain' component={DrawerNavigator}></Stack.Screen> */}
  </Stack.Navigator>
  } 

  const DrawerNavigator = () => {
    return  <Drawer.Navigator screenOptions={{ drawerStyle:{borderBottomWidth:0,justifyContent:"center"},  drawerActiveTintColor: "black", headerLeft:({ focused, }) => (
      <Image
      
        source={images.drawerIcon}
        style={{
          marginLeft:20,
          width: 20,
          height: 20,
          tintColor: focused ? 'black' : 'gray', // Change the color based on tab focus
        }}
      />
    ), }}
      drawerContent={props => <CoustomDrawer {...props} />}
    >
      <Drawer.Screen
        options={{
          drawerLabel: "Home"
        }}
        name="Chat App"
        component={TabNavigator}></Drawer.Screen>
   
      <Drawer.Screen name="About" component={About}></Drawer.Screen>
      <Drawer.Screen name="Settings" component={Settings}></Drawer.Screen>
      <Drawer.Screen  options={{  headerShown: false, drawerStyle:{display:"none", backfaceVisibility:"hidden"} }} name="Auth" component={AuthNavigator}></Drawer.Screen>
      <Drawer.Screen name='UserChat' component={UserChat}></Drawer.Screen>
      {/* <Drawer.Screen name="Settings" component={Settings}></Drawer.Screen> */}
      
    </Drawer.Navigator>
  }

  return (
    // CHAT GPT SCREEN

    <>
      {/* <View>
        <ScrollView>
          {messages.map((msg, index) => (
            <Text key={index}>{msg}</Text>
          ))}
        </ScrollView>
        <View>
          <TextInput
            value={userInput}
            onChangeText={setUserInput}
            placeholder="Type a message"
          />
          <Button title="Send" onPress={sendMessage} />
        </View>
      </View> */}
      <NavigationContainer>
        {token ? (
        <DrawerNavigator/>
          // <Drawer.Navigator screenOptions={{ drawerStyle:{borderBottomWidth:0,justifyContent:"center"},  drawerActiveTintColor: "black", headerLeft:({ focused, }) => (
          //   <Image
            
          //     source={images.drawerIcon}
          //     style={{
          //       marginLeft:20,
          //       width: 20,
          //       height: 20,
          //       tintColor: focused ? 'black' : 'gray', // Change the color based on tab focus
          //     }}
          //   />
          // ), }}
          //   drawerContent={props => <CoustomDrawer {...props} />}
          // >
          //   <Drawer.Screen
          //     options={{
          //       drawerLabel: "Home"
          //     }}
          //     name="Chat App"
          //     component={TabNavigator}></Drawer.Screen>
         
          //   <Drawer.Screen name="About" component={About}></Drawer.Screen>
          //   <Drawer.Screen name="Settings" component={Settings}></Drawer.Screen>
          //   <Drawer.Screen name="Auth" component={AuthNavigator}></Drawer.Screen>
          //   {/* <Drawer.Screen name="Settings" component={Settings}></Drawer.Screen> */}
            
          // </Drawer.Navigator>

        ) : (<AuthNavigator/>
          // <Stack.Navigator screenOptions={{headerShown:false}}>
          //   <Stack.Screen
          //     name="Login"
          //     // authenticated={handleAuthenticated}
          //     component={Login} />
          //   <Stack.Screen name="Signup" component={Signup} />
          // </Stack.Navigator>
        )}
      </NavigationContainer>

    </>

  );
};

export default App;
