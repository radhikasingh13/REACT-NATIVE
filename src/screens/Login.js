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
  useColorScheme,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Login({navigation}) {
  const [check, setCheck] = useState(false);
  const [Emailid, setEmailid] = useState('');
  const [password, setPassword] = useState('');

  // const resetAction = StackActions.reset({
  //   index: 0,
  //   actions: [NavigationActions.navigate({routeName: 'Home'})],
  // });

  const login = () => {
    if (Emailid === 'abc@gmail.com' && password === 'abc123') {
      navigation.navigate('HomeTabs');
      setEmailid('');
      setPassword('');
    } else {
      alert('Wrong Credentials');
    }
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: wp('10%'),
      }}>
      <View>
        <Text
          style={{
            color: 'green',
            fontSize: hp('5%'),
            alignSelf: 'center',
          }}>
          S U B K E Y
        </Text>
        <Text
          style={{
            color: 'grey',
            fontSize: hp('2.2%'),
            marginBottom: hp('4%'),
            alignSelf: 'center',
          }}>
          LOCAL STORES
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: hp('3%'),
            marginBottom: hp('2.3%'),
            alignSelf: 'center',
          }}>
          Sign into your seller account
        </Text>
        <View
          style={{
            height: hp('6%'),
            width: wp('82%'),
            backgroundColor: 'white',
            borderWidth: 1,
            borderColor: 'grey',
            marginBottom: hp('1.5%'),
            borderRadius: hp('1%'),
          }}>
          <TextInput
            style={{
              fontSize: hp('1.9%'),
              paddingLeft: wp('4%'),
              color: 'black',
            }}
            onChangeText={text => setEmailid(text)}
            defaultValue={Emailid}
            placeholder="Email Id"
            placeholderTextColor="#6e8ca0"></TextInput>
        </View>
        <View
          style={{
            height: hp('6%'),
            width: wp('82%'),
            backgroundColor: 'white',
            borderWidth: 1,
            borderColor: 'grey',
            marginBottom: hp('1.5%'),
            borderRadius: hp('1%'),
          }}>
          <TextInput
            style={{
              fontSize: hp('1.9%'),
              paddingLeft: wp('4%'),
              color: 'black',
            }}
            onChangeText={text => setPassword(text)}
            defaultValue={password}
            secureTextEntry={check === true ? true : false}
            placeholder="Password"
            placeholderTextColor="#6e8ca0"></TextInput>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <TouchableOpacity
              onPress={() => setCheck(!check)}
              style={{
                height: hp('2.6%'),
                width: wp('5%'),
                backgroundColor: 'white',
                borderWidth: 1,
                borderColor: 'grey',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {check === true ? (
                <View
                  style={{
                    height: hp('2%'),
                    width: wp('4%'),
                    backgroundColor: 'blue',
                  }}></View>
              ) : null}
            </TouchableOpacity>
            <Text
              style={{
                color: 'black',
                fontSize: hp('1.5%'),
                marginBottom: hp('3%'),
                alignSelf: 'center',
                marginLeft: wp('1%.2'),
                alignSelf: 'center',
                marginTop: hp('0.3%'),
              }}>
              Show Password
            </Text>
          </View>
          <Text
            style={{
              color: 'black',
              fontSize: hp('1.5%'),
              marginBottom: hp('3%'),
              alignSelf: 'center',
              marginLeft: wp('1%.2'),
              alignSelf: 'center',
              marginTop: hp('0.3%'),
            }}>
            Forgot Password?
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            login();
          }}>
          <Text style={{fontSize: hp('2.8%'), color: 'white'}}>Sign In</Text>
        </TouchableOpacity>
        <Text
          style={{
            color: 'grey',
            fontSize: hp('1.3%'),
            paddingTop: hp('1.5%'),
            alignSelf: 'center',
            marginLeft: wp('1.5%'),
            alignSelf: 'center',
          }}>
          By Signing in you agree with{' '}
          <Text style={{color: 'blue'}}>Terms of Services</Text> and{' '}
          <Text style={{color: 'blue'}}>Privacy Policy</Text>
        </Text>
        <View style={{marginTop: hp('2%')}}>
          <Text
            style={{
              color: 'grey',
              fontSize: hp('1.3%'),
              paddingTop: hp('1.5%'),
              alignSelf: 'center',
              marginLeft: wp('1.5%'),
              alignSelf: 'center',
            }}>
            New Seller
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={{fontSize: 20, color: 'white'}}>Create Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  top: {
    flex: 1,
  },
  button: {
    height: hp('5.8%'),
    width: wp('82%'),
    borderWidth: 1,
    borderColor: 'green',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: hp('0.8%'),
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'green',
  },
});
