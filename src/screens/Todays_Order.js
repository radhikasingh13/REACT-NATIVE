/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {NavigationActions, StackActions} from '@react-navigation/native';
import axios from 'axios';

export default function Todays_Order({navigation}) {
  const [todayorder, setTodayOrder] = useState([]);
  const url = 'https://60ce04f991cc8e00178dc63a.mockapi.io/orders/';
  const getorder = () => {
    axios
      .get(`${url}users`)
      .then(response => {
        const allOrder = response.data;
        setTodayOrder(allOrder);
      })
      .catch(error => console.error(`Error : ${error}`));
  };
  useEffect(() => {
    getorder();
  }, []);
  return (
    <ScrollView style={{flex: 1, margin: 24}}>
      {todayorder.map(item => (
        <View
          style={{
            height: hp('10%'),
            width: wp('90%'),
            // alignSelf: 'center',
            borderRadius: 5,
            backgroundColor: 'white',

            // alignItems: 'center',
            flexDirection: 'row',
            elevation: 5,
            paddingHorizontal: wp('4%'),
            marginVertical: hp('1%'),
          }}>
          <View
            style={{
              flex: 5,
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: hp('2.7%'),
                //   alignSelf: 'center',
                fontWeight: 'bold',
              }}>
              #{item.orderId}
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: hp('1.4%'),
                //   alignSelf: 'center',
                fontWeight: 'bold',
              }}>
              {item.deliveryDate}
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: hp('1.3%'),
                //   alignSelf: 'center',
              }}>
              {item.Address} , {item.city} , {item.country}
            </Text>
          </View>
          <View
            style={{
              flex: 2,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingRight: wp('3%'),
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  color: 'green',
                  fontSize: hp('2.4%'),
                  //   alignSelf: 'center'
                  fontWeight: 'bold',
                }}>
                {item.amount}{' '}
              </Text>
              <Icon
                name="rupee-sign"
                size={17}
                color="green"
                style={{marginTop: hp('0.6%')}}
              />
            </View>
            <TouchableOpacity>
              <Icon name="chevron-right" size={17} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  top: {
    flex: 1,
  },
  button: {
    height: 46,
    width: 320,
    borderWidth: 1,
    borderColor: 'green',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 2,
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'green',
  },
});
