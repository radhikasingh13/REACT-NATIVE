/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  Image,
  TouchableOpacity,
  Item,
  View,
  ImageBackground,
  FlatList,
  backgroundColor,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function Home({navigation}) {
  return (
    <View style={{flex: 1, margin: 24}}>
      <View
        style={{
          height: hp('12%'),
          width: wp('82%'),
          alignSelf: 'center',
          borderRadius: hp('2%'),
          backgroundColor: 'green',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          paddingHorizontal: wp('4%'),
          marginBottom:hp('2%'),
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: hp('2.5%'),
            alignSelf: 'center',
          }}>
          Todays Order
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Todays_Order');
          }}>
          <Icon name="caret-right" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: hp('12%'),
          width: wp('82%'),
          alignSelf: 'center',
          borderRadius: hp('2%'),
          backgroundColor: 'green',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          marginBottom:hp('2%'),
          paddingHorizontal: wp('4%'),
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: hp('2.5%'),
            alignSelf: 'center',
          }}>
          Scheduled Order
        </Text>
        <TouchableOpacity>
          <Icon name="caret-right" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: hp('12%'),
          width: wp('82%'),
          alignSelf: 'center',
          borderRadius: hp('2%'),
          backgroundColor: 'green',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom:hp('2%'),
          flexDirection: 'row',
          paddingHorizontal: wp('4%'),
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: hp('2.5%'),
            alignSelf: 'center',
          }}>
          Older Order
        </Text>
        <TouchableOpacity>
          <Icon name="caret-right" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

