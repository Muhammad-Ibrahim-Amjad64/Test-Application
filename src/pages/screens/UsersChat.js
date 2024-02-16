/* eslint-disable prettier/prettier */
import { useEffect, useState } from 'react';
import * as React  from 'react';
import axios from 'axios';
import { View, StyleSheet, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { fetchUsers } from '../../Utils/Api';
import logo from "../../Assets/logo.png"

const Dummy_Users = [
  {
    id:"1",
    name:"Ali",
    picture:"url"
  },
  {
    id:"2",
    name:"Ibrahim",
    picture:"url"
  },
  {
    id:"3",
    name:"Ibad",
    picture:"url"
  },
  {
    id:"4",
    name:"Sheroz",
    picture:"url"
  },
]
const UsersChat = () => {
  const navigation = useNavigation()
const [users, setUsers] = useState(null)

useEffect(()=>{
  const getUsers = async () => {
   try {
     const res = await fetchUsers();
     const usersList = Object?.entries(res)?.map(([userId, userData]) => ({
      id: userId,
      email: userData.email,
      name: userData.name,
      password: userData.password
  }));
     setUsers(usersList);
    console.log(res.data,"res")
    console.log(usersList,"List")
   } catch (error) {
    console.log(error);
   }
 }
getUsers()
}, [])
  
  const handleChat = (name) => {
    console.log(name, "name ")
    const props = {
      name,
    }
    navigation.navigate("UserChat")
    
    // navigation.navigate()
  }

const renderItem = ({ item }) => (
  <TouchableOpacity onPress={()=>handleChat(item.name)}  style={{ flexDirection: 'row', padding: 10, alignItems:"center" }}>
    <Image
      // source={{ uri: item.picture }}
      source={ logo }
      style={{ width: 50, height: 50, borderRadius: 25 }}
    />
    <View style={{ marginLeft: 10 }}>
      <Text style={{color:"black", fontWeight:"bold"}}>{item.name}</Text>
    </View>
  </TouchableOpacity>
);
 
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default UsersChat;
const styles = StyleSheet.create({
  
});
