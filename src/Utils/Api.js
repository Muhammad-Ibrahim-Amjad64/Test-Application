/* eslint-disable prettier/prettier */

import axios from 'axios'
export const fetchUsers = async () => {
     try {
        const res = await axios.get("https://test-app-d8953-default-rtdb.firebaseio.com/Users.json")
        return res.data
     } catch (error) {
        console.log(error)
     }
  
}
 
export const postUsers = async (name, email, password) => {
    try {
        // const body =  {
        //     name,
        //     email,
        //     password
        // }
        const body =  {
            email: "12sdsdswqi7890@gmail.com",
            name: "Aldsdsdssdsdsi",
            password: "21214ds64"
        }
       const res = await axios.post("https://test-app-d8953-default-rtdb.firebaseio.com/Users.json",body)
       return res.data.name
    } catch (error) {
       console.log(error, "error here")
    }
}
