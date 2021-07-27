/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Dimensions, TouchableOpacity, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from 'react-native-paper';
const {width, height} = Dimensions.get('screen');
const Daily = ({navigation}) => {
  return (
    <>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 10,
          paddingTop: 20,
          backgroundColor: '#fff',
        }}>
        <View
          style={{padding: 20, borderRadius: 10, backgroundColor: '#ede7f6'}}>
          <TouchableOpacity
            onPress={()=>{navigation.navigate('SearchPlace')}}
            style={{
              padding: 10,
              backgroundColor: '#9575cd',
              flexDirection: 'row',
              borderRadius: 10,
            }}>
            <Icon
              name="ios-search-outline"
              color="#fff"
              size={20}
              style={{alignSelf: 'center'}}
            />
            <Text style={{alignSelf: 'center', marginLeft: 20, color: '#fff'}}>
              Search Your Destination
            </Text>
          </TouchableOpacity>
          <View
            style={{backgroundColor: '#fff', borderRadius: 10, marginTop: 10}}>
            <TouchableOpacity
              style={{
                padding: 10,
                backgroundColor: '#fff',
                flexDirection: 'row',
                borderRadius: 10,
              }}>
              <Icon
                name="md-navigate-sharp"
                color="#7952B3"
                size={20}
                style={{alignSelf: 'center'}}
              />
              <Text style={{alignSelf: 'center', marginLeft: 20}}>
                Biju Pattnaik International Airport
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: 10,
                backgroundColor: '#fff',
                flexDirection: 'row',
                borderRadius: 10,
              }}>
              <Icon
                name="md-navigate-sharp"
                color="#7952B3"
                size={20}
                style={{alignSelf: 'center'}}
              />
              <Text style={{alignSelf: 'center', marginLeft: 20}}>
                Bhubaneswar Railway Station
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: 10,
                backgroundColor: '#fff',
                flexDirection: 'row',
                borderRadius: 10,
              }}>
              <Icon
                name="md-navigate-sharp"
                color="#7952B3"
                size={20}
                style={{alignSelf: 'center'}}
              />
              <Text style={{alignSelf: 'center', marginLeft: 20}}>
                Bermunda Bus Stand
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            padding: 20,
            borderRadius: 10,
            backgroundColor: Colors.grey100,
            marginTop: 20,
          }}>
          <View style={{backgroundColor: '#fff', borderRadius: 10}}>
              <TouchableOpacity
                style={{
                  padding: 10,
                  backgroundColor: '#fff',
                  flexDirection: 'row',
                  borderRadius: 10,
                }}>
              <Image source={require('../../assets/secure.png')} style={{ width: 100, height: 100 }} />
              <View style={{ flex: 1, padding: 10,alignContent:'center' ,justifyContent: 'center'}}>
                <Text style={{alignSelf: 'center', fontWeight: 'bold', fontSize:25,textAlign:'center', color: '#2c2c2c'}}>
                  SECURED RIDE
                </Text>
                <Text style={{alignSelf: 'center',textAlign:'center', fontSize: 10}}>
                  Our major concern to make your ride safe and comfortable
                </Text>
              </View>
              </TouchableOpacity>
          </View>
          <View style={{backgroundColor: '#fff', borderRadius: 10, marginTop:10}}>
              <TouchableOpacity
                style={{
                  padding: 10,
                  backgroundColor: '#fff',
                  flexDirection: 'row',
                  borderRadius: 10,
                }}>
              <Image source={require('../../assets/card.png')} style={{ width: 100, height: 100 }} />
              <View style={{ flex: 1, padding: 10,alignContent:'center' ,justifyContent: 'center'}}>
                <Text style={{alignSelf: 'center', fontWeight: 'bold', fontSize:25,textAlign:'center', color: '#2c2c2c'}}>
                  SAFE WALLET
                </Text>
                <Text style={{alignSelf: 'center',textAlign:'center', fontSize: 10}}>
                  Secure transaction Flow
                </Text>
              </View>
              </TouchableOpacity>
            </View>
        </View>
        <View
          style={{
            padding: 20,
            borderRadius: 10,
            backgroundColor: Colors.grey100,
            marginTop: 20,
          }}>
          <View style={{backgroundColor: '#fff', borderRadius: 10}}>
              <TouchableOpacity
                style={{
                  padding: 10,
                  backgroundColor: '#fff',
                  borderRadius: 10,
                  alignContent: 'center',
                  alignItems: 'center'
                }}>
              <Image source={require('../../assets/invite.png')} style={{ width: 250, height: 250 }} />
              <View style={{ flex: 1, padding: 10,alignContent:'center' ,justifyContent: 'center'}}>
                <Text style={{alignSelf: 'center', fontWeight: 'bold', fontSize:25,textAlign:'center', color: '#2c2c2c'}}>
                  INVITE YOUR FRIENDS
                </Text>
                <Text style={{alignSelf: 'center',textAlign:'center', fontSize: 10}}>
                  Invite Your Circle To Use This App
                </Text>
                <Text style={{ alignSelf: 'center', textAlign: 'center', backgroundColor: '#000', color: '#fff', padding: 10, width: 90, marginTop: 10, borderRadius: 30 }}><Icon name="share-social-outline" color='#fff' size={15} />  INVITE</Text>
              </View>
              </TouchableOpacity>
          </View>
        </View>
        </View>
    </>
  );
};

export default Daily;
