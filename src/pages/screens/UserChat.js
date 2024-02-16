/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import { View, StyleSheet, Text, ScrollView, TextInput, Button, TouchableOpacity, Image } from 'react-native';
import {images} from "../../Utils/constants/Themes"
import { responsiveFontSize, responsiveHeight,responsiveWidth } from 'react-native-responsive-dimensions';
import {generateResponse} from './ChatGptScreen';
const UserChat = () => {

  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const sendMessage = async () => {
    if (!userInput) return;

    setMessages(prevMessages => [...prevMessages, `${userInput}`]);
    // setMessages(prevMessages => [...prevMessages, `${userInput}`]);
    // const botResponse = await generateResponse(userInput);
    // setMessages(prevMessages => [...prevMessages, `${botResponse}`]);
    // setMessages(prevMessages => [...prevMessages, `ChatGPT:\n  ${botResponse}`]);
    setUserInput('');


  };
  return (
    <View style={styles.container}>
    {/* <ScrollView style={{flex:0.8, backgroundColor:"red"}}> */}
    <ScrollView >
        {messages.map((msg, index) => {
        //   if (msg.includes("You")) {
          if (true) {
              return <>
                  <View style={styles.MessageContainer}>
                      {/* <View>
                          
                      <Text style={{ fontWeight: "bold", color: "white", fontSize: responsiveFontSize(1.3), }}>You</Text>
                      </View>   */}
                   
                      
                   <Text style={styles.gptText} key={`${index} ${msg}`}>{msg}</Text>
                  </View>
              </>
          }
        //   else {
        //     return<>
                
        //         <Text style={styles.chatText} key={`${index}${msg}`}>{msg}</Text>
        //       </>
        //   }
        })}
    </ScrollView>
    <View style={styles.inputContainer}>
        <TextInput 
          style={styles.TextInput}
        value={userInput}
        onChangeText={setUserInput}
        placeholder="Type a message"
      />
              <TouchableOpacity style={styles.button} onPress={sendMessage} ><Image style={styles.rightArrow} source={images.arrowRight}></Image></TouchableOpacity>
    </View>
  </View>
  );
};

export default UserChat;
const styles = StyleSheet.create({
  container:{
    flex: 1, 
        backgroundColor: "#ffffff",
        // alignItems:""
    justifyContent:"flex-end"
    },
    rightArrow: {
        height:responsiveHeight(2.2),
        width:responsiveWidth(5),
    },

    button: {
    borderRadius:responsiveWidth(100),
    height:responsiveHeight(7),
    width:responsiveWidth(13),
    backgroundColor: "black",
    color: "white",
    justifyContent: "center",
    alignItems:"center"
  },
  TextInput: {
    height: responsiveHeight(7),
    width: responsiveWidth(80),
    borderRadius: responsiveWidth(30),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: responsiveFontSize(2),
    backgroundColor:"#ebebeb"
  }, 
  chatText: {
    fontSize: responsiveFontSize(2),
    margin: 2,
    width: "90%",
    alignSelf: "center",
    marginTop: 20, 
    height: "auto",
    backgroundColor: "#eaeaea",
    color:"black"
   
  }, 
  gptText: {
    fontSize: responsiveFontSize(2),
    marginVertical: responsiveWidth(3),
    width: "95%",
    alignSelf: "center",
    color:"white"
    },
    MessageContainer: {
        borderRadius: responsiveWidth(2),
        // margin: 2,
        width: "85%",
        alignSelf: "flex-end",
        marginTop: responsiveWidth(2), 
        marginRight:responsiveWidth(2),
        height: "auto",
        backgroundColor: "black",
        color:"white"
        
    }, inputContainer:{flexDirection:"row", justifyContent:"space-around", alignItems:"center", marginVertical:responsiveWidth(2)}
});
