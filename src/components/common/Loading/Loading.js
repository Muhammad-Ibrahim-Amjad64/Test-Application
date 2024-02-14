/* eslint-disable prettier/prettier */
import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    ImageBackground,
    Image,
  } from 'react-native';
  import React from 'react';
  import {
    responsiveHeight,
    responsiveWidth,
  } from 'react-native-responsive-dimensions';
  import {colors, images} from '../../../Utlies/Constant/Themes';
  
  const Loading = () => {
    return (
      <ImageBackground
        // source={images.Backgroundimage}
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Image
        //   source={images.logo}
          resizeMode="contain"
          style={{
            height: responsiveHeight(30),
            width: responsiveHeight(30),
            top: responsiveHeight(10),
            position: 'absolute',
            alignSelf: 'center',
          }}
        />
        <View
          style={{
            height: responsiveHeight(20),
            width: responsiveWidth(60),
            borderRadius: responsiveWidth(10),
            alignItems: 'center',
            justifyContent: 'center',
            elevation: 1,
            backgroundColor: colors.btncolor,
          }}>
          <ActivityIndicator size={'large'} color={'#000'} />
        </View>
      </ImageBackground>
    );
  };
  
  export default Loading;
  
  const styles = StyleSheet.create({});
  