/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import { View, StyleSheet, Text, ScrollView, TextInput, Button, Pressable, } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import {generateResponse} from './ChatGptScreen';
const Home = () => {

  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const sendMessage = async () => {
    if (!userInput) return;

    setMessages(prevMessages => [...prevMessages, `You:\n  ${userInput}`]);
    // setMessages(prevMessages => [...prevMessages, `${userInput}`]);
    const botResponse = await generateResponse(userInput);
    setMessages(prevMessages => [...prevMessages, `${botResponse}`]);
    setMessages(prevMessages => [...prevMessages, `ChatGPT:\n  ${botResponse}`]);
    setUserInput('');


  };
  return (
    <View style={styles.container}>
    <ScrollView>
        {messages.map((msg, index) => {
          if (msg.includes("You")) {
            return<>
            <Text style={styles.chatText} key={`${index}${msg}`}>{msg}</Text>
              </>
          } else if(msg.includes("ChatGPT")) {
            return<>
            <Text style={styles.gptText} key={`${index} ${msg}`}>{msg}</Text>
              </>
          }
        })}
    </ScrollView>
    <View>
        <TextInput 
          style={styles.TextInput}
        value={userInput}
        onChangeText={setUserInput}
        placeholder="Type a message"
      />
      <Button  style={styles.button}  color={"black"} title="Send" onPress={sendMessage} />
    </View>
  </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container:{
    flex: 1, 
    backgroundColor:"#ffffff"
  },

  button: {
    backgroundColor: "black",
    color:"white"
  },
  TextInput: {
    backgroundColor: "#f1f1f1",
    fontSize:responsiveFontSize(2)
  }, 
  chatText: {
    fontSize: responsiveFontSize(2),
    // borderColor: "gray",
    // borderRadius: 3,
    // borderWidth: 1,
    margin: 2,
    width: "90%",
    alignSelf: "center",
    marginTop: 20, 
    height: "auto",
    backgroundColor: "#eaeaea",
    color:"black"
    // alignItems: "center",
    // justifyContent:"center"
   
  }, 
  gptText: {
    fontSize: responsiveFontSize(2),
    borderColor: "gray",
    borderRadius: 3,
    borderWidth: 1,
    margin: 2,
    width: "90%",
    alignSelf: "center",
    marginTop: 20, 
    height: "auto",
    backgroundColor: "black",
    color:"white"
  }
});
