/* eslint-disable prettier/prettier */
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
import {
  DrawerContent,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
// import { useNavigation,useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { colors, images } from '../Utils/constants/Themes';

// import {useDispatch, useSelector} from 'react-redux';
// import {logout} from '../Store/Reducers/Login';
// import {setsongsclear} from '../Store/Reducers/AlbumsSlice';

const CoustomDrawer = (props, { navigation }) => {
  // const route = useRoute();
  // const activeRouteName = route.name;
//   const dispatch = useDispatch();
//   const isAuthenticated = useSelector(state => state.auth);
    //   const language = useSelector(state => state.auth.language);
    const language = 'English'
//   const Clint = useSelector(state => state.auth.user);
  const handleLogout =  async () => {
    await AsyncStorage.setItem('token', '');
    console.log("stored token", await AsyncStorage?.getItem('token'))
    props.navigation.navigate('Auth');
    // if (isAuthenticated) {
    //   dispatch(logout());
    //   dispatch(setsongsclear());
    // }
  };
  return (
    <View
      style={{flex: 1, backgroundColor: '#000', height: responsiveHeight(100)}}>
      <DrawerContentScrollView >
        {/* {activeRouteName !== 'Auth' && */}
          {/* <> */}
           <View
          style={{
            height: responsiveHeight(25),
            borderBottomWidth: responsiveWidth(0.1),
            borderColor: '#FFF',
            left: responsiveWidth(4),
            marginTop: responsiveHeight(3),
          }}>
          <View>
            <Image
              resizeMode="contain"
              source={images.logo}
              style={{
                height: responsiveHeight(15),
                width: responsiveHeight(15),
              }}
            />
            <Text
              style={{
                // color: colors.btncolor,
                fontFamily: 'Poppins-Regular',
                fontSize: responsiveFontSize(2.4),
                marginTop: responsiveHeight(1),
              }}>
              Mulder's Fan
            </Text>
            <Text
              style={{
                color: '#FFF',
                fontFamily: 'Poppins-Regular',
                fontSize: responsiveFontSize(1.4),
              }}>
                          {/* {Clint.email} */}
                          123ibrahim@gmail.com
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'column',
            flexGrow: 1,
          }}>
          <TouchableOpacity style={{}}>
            <DrawerItem
              style={{}}
              inactiveTintColor="#fff"
            //   activeTintColor={colors.btncolor}
              icon={({color, size}) => (
                <Image
                  resizeMode="contain"
                  source={images.home}
                  style={{
                    height: size,
                    width: size,
                    tintColor: color,
                  }}
                />
              )}
              label={language == 'English' ? 'Home' : 'Thuis'}
              labelStyle={{
                color: '#fff',
                fontFamily: 'Poppins-Regular',
                fontSize: responsiveFontSize(2.3),
              }}
              onPress={() => {
                props.navigation.navigate('Chat App');
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{}}>
            <DrawerItem
              style={{
                justifyContent: 'space-between',
              }}
              inactiveTintColor="#fff"
            //   activeTintColor={colors.btncolor}
              icon={({color, size}) => (
                <Image
                  resizeMode="contain"
                  source={images.about}
                  style={{height: size, width: size, tintColor: color}}
                />
              )}
              label={language == 'English' ? 'About' : 'Favorieten'}
              labelStyle={{
                color: '#fff',
                fontFamily: 'Poppins-Regular',
                fontSize: responsiveFontSize(2.3),
              }}
              onPress={() => {
          
                props.navigation.navigate('About');
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{}}>
            <DrawerItem
              style={{
                justifyContent: 'space-between',
              }}
              inactiveTintColor="#fff"
            //   activeTintColor={colors.btncolor}
              icon={({color, size}) => (
                <Image
                  resizeMode="contain"
                  source={images.settings}
                  style={{height: size, width: size, tintColor: color}}
                />
              )}
              label={language == 'English' ? 'Settings' : 'Afspeellijsten'}
              labelStyle={{
                fontFamily: 'Poppins-Regular',
                fontSize: responsiveFontSize(2.3),
              }}
              onPress={() => {
                props.navigation.navigate('Settings');
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            bottom: responsiveHeight(12),
          }}>
          <DrawerItem
            style={{
              marginTop: responsiveHeight(30),
              justifyContent: 'space-between',
            }}
            inactiveTintColor="#fff"
            ac
            // activeTintColor={colors.btncolor}
            icon={({color, size}) => (
              <Image
                resizeMode="contain"
                source={images.logout}
                style={{height: size, width: size, tintColor: color}}
              />
            )}
            label={language === 'English' ? 'Logout' : 'Uitloggen'}
            labelStyle={{
              color: '#fff',
              fontFamily: 'Poppins-Regular',
              fontSize: responsiveFontSize(2.3),
              paddingTop: responsiveHeight(1),
            }}
            onPress={handleLogout}
            
          />
        </View>
          {/* </> */}
        {/* } */}
       
      </DrawerContentScrollView>
    </View>
  );
};

export default CoustomDrawer;

const styles = StyleSheet.create({});
