/* eslint-disable prettier/prettier */
import {
  Image,
  ImageBackground,
  Alert,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {login} from '../../Utils/auth';
import LinearGradient from 'react-native-linear-gradient';
import {Formik} from 'formik';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthContext} from '../../store/auth-context';
import {images} from '../../Utils/constants/Themes';
import {postUsers} from '../../Utils/Api';
import {loginSchema} from '../../Schemas/LoginSchema';
const Login = props => {

  const authCtx = useContext(AuthContext);
  const navigation = useNavigation();
  const handleLogin = async (email, password) => {
    try {
      const resToken = await login(email, password);
      authCtx.authenticate(resToken);
      const id = await postUsers(email, password);
      console.log(id, 'new generated id');
      await AsyncStorage.setItem('id', id.toString());

      authCtx.setUserId(id);
      console.log(resToken);
    } catch (error) {
      console.log(error);
      Alert.alert(
        'Invalid Credentials',
        'Please enter a valid  email and pasword',
      );
    }
  };
  return (
    <ImageBackground
      // source={logo}
      style={{
        flex: 1,
      }}>
      <StatusBar
        translucent={true}
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
      />

      <View style={styles.header}>
        <TouchableOpacity
          // style={{backgroundColor:"red"}}
          onPress={() => {
            navigation.navigate('Signup');
          }}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <Image
        source={images.AuthLogo}
        resizeMode="cover"
        style={{
          borderRadius: responsiveHeight(100),
          marginBottom: responsiveWidth(15),
          width: responsiveWidth(40),
          height: responsiveWidth(40),
          alignSelf: 'center',
        }}></Image>
      <Formik
        initialValues={{email: '', password: ''}}
        validationSchema={loginSchema}
        onSubmit={(values) => handleLogin(values.email,values.password)} 
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View
            style={{
              flex: 0.8,
              height: "auto",
          
            }}>
            <View>
              <Text style={styles.txt_intro}>Login</Text>
            </View>
            <View
              style={{
                gap: 20,
                alignSelf: 'center',
                marginTop: responsiveHeight(5),
              }}>
              <View style={styles.txt_input}>
                <TextInput
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  placeholder="Your Email"
                  placeholderTextColor={'#000'}
                />
                 {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}
              </View>
              <View style={styles.txt_input}>
                <TextInput
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  placeholder="Password"
                  placeholderTextColor={'#000'}
                />
                  {touched.password && errors.password && <Text style={styles.error}>{errors.password}</Text>}

              </View>
            </View>

            <TouchableOpacity onPress={handleSubmit}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#232323', '#020f00']}
                style={styles.linearGradient}>
                <Text style={[styles.btnText]}>Login</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </ImageBackground>
  );
};

export default Login;

const styles = StyleSheet.create({
  txt_intro: {
    color: '#000',
    fontFamily: 'Taviraj-Regular',
    textAlign: 'center',
    fontSize: responsiveFontSize(4.5),
  },
  error: {
    color: 'red',
    // marginBottom:responsiveHeight(10)

  },

  linearGradient: {
    height: responsiveHeight(7),
    width: responsiveWidth(85),
    borderRadius: responsiveWidth(30),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: responsiveHeight(4),
  },
  btnText: {
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
    color: '#fff',
  },
  buttonText: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: 'bold',
    color: '#000',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(6),
    paddingTop: responsiveHeight(4),
    flex: 0.2,
  },
  txt_input: {
    height: responsiveHeight(8),
    width: responsiveWidth(85),
    borderWidth: responsiveWidth(0.2),
    borderColor: '#000',
    borderRadius: responsiveWidth(30),
    justifyContent: 'center',
    paddingHorizontal: responsiveWidth(5),
  }
});
