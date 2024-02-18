/* eslint-disable prettier/prettier */

// remaining things
// login signup
// chat implementation
// finalization   subha 
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
export const fetchUsers = async () => {
     try {
        const res = await axios.get("https://test-app-d8953-default-rtdb.firebaseio.com/Users.json")
        return res.data
     } catch (error) {
        console.log(error)
     }

}

export const postUsers = async ( email, password, name) => {
    try {
        const body =  {
            email,
            name:name?name:"guest",
           password
        }
       const res = await axios.post("https://test-app-d8953-default-rtdb.firebaseio.com/Users.json",body)
       return res.data.name
    } catch (error) {
       console.log(error, "error here")
    }
}

export const updateUsersName = async (name) => {
   try {
      const id = await AsyncStorage.getItem('id')
     const body = {
       name,
     };
     const res = await axios.patch(
       `https://test-app-d8953-default-rtdb.firebaseio.com/Users/${id}.json`,
       body,
     );
     return res.data.name;
   } catch (error) {
     console.log(error, 'error here');
   }
 };
 
export const updatePhote = async (imgUri) => {
   const id = await AsyncStorage.getItem('id')
   console.log(id, "id fetched from local storage")
   try {
     const body = {
        imgUri
     };
     const res = await axios.patch(
       `https://test-app-d8953-default-rtdb.firebaseio.com/Users/${id}.json`,
       body,
     );
     return res.data.name;
   } catch (error) {
     console.log(error, 'error here');
   }
};
 

export const getMessages = async () => {
   try {
      const res = await axios.get("https://test-app-d8953-default-rtdb.firebaseio.com/messages.json")
      return res.data;
   } catch (error) {
      console.log(error);
   }

}

export const postMessage = async (content, sender_id) => {
   try {
      const name = await AsyncStorage.getItem('name')
      const body = {
         content,
         name,
         sender_id,
         timestamp: new Date()
      }
      const res = await axios.post("https://test-app-d8953-default-rtdb.firebaseio.com/messages.json", body);
      return res.data.name;
   } catch (error) {
      console.log(error, "error here")
   }
}

export const DeleteChat = async (content, sender_id, receiver_id, timestamp) => {
   try {
      const body = {
         content: "How are you form frontend",
         receiver_id: "10232sa",
         sender_id: "10sww",
         timestamp: new Date().getMilliseconds()
      }
      const res = await axios.post("https://test-app-d8953-default-rtdb.firebaseio.com/messages.json", body)
      return res.data.name
   } catch (error) {
      console.log(error, "error here")
   }
}