/* eslint-disable no-spaced-func */
/* eslint-disable quotes */
/* eslint-disable no-alert */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Dimensions, Text, StyleSheet, ScrollView, Image, StatusBar } from 'react-native';
import { Tab, Tabs, ScrollableTab, TabHeading } from 'native-base';
import * as Animatable from 'react-native-animatable';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
const { width, height } = Dimensions.get('screen');
import Gmap from './GMap';
import Daily from './Daily';
function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
      <Text>This Is A demo Page</Text>
    </View>
  );
}

const Mainpage = ({navigation}) => {
    const getData = dataFromChild => () => {
        console.log(dataFromChild);
    }
    return (
        <>
            <StatusBar transparent backgroundColor="transparent" barStyle="dark-content"/>
            <View style={styles.container}>
                <Gmap getDataFromChild={getData} />
                <Image source={require('../../assets/headerLogo.png')} style={{ position: 'absolute', top: 40, right: 10, width: 60, height: 20 }} />
            </View>
             <ScrollView style={styles.overlay} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
               <Button style={{position:'absolute',top: 70, left: 10}} mode="flat" onPress={()=>{navigation.toggleDrawer()}}><Icon name="ios-menu-outline" size={30} color="#7952B3"/></Button>
               <Animatable.View animation="fadeInUpBig" style={{ marginTop: 350, backgroundColor: '#fff', borderTopLeftRadius: 24, borderTopRightRadius: 24, padding: 15 }}>
                <Tabs  renderTabBar={() => <ScrollableTab style={{backgroundColor: '#ffffff'}} underlineStyle={{backgroundColor :'#7952B3'}}/>}>
                    <Tab heading={<TabHeading style={{ backgroundColor: '#fff', flexDirection:'column' }}><Image style={{height:20, width:40, borderRadius:10}} source={require ('../../assets/car.png')}/><Text style={{fontSize:10, fontWeight:'light'}}>Daily</Text></TabHeading>} tabStyle={{backgroundColor: '#ffffff'}} textStyle={{color: '#000000'}} activeTabStyle={{backgroundColor: '#ffffff'}} activeTextStyle={{color: '#000000', fontWeight: 'bold'}}>
                <Daily navigation={ navigation }/>
                    </Tab>
                    <Tab heading={<TabHeading style={{ backgroundColor: '#fff', flexDirection:'column' }}><Image style={{height:20, width:40, borderRadius:10}} source={require ('../../assets/jeep.png')}/><Text style={{fontSize:10}}>Rental</Text></TabHeading>} tabStyle={{backgroundColor: '#ffffff'}} textStyle={{color: '#000000'}} activeTabStyle={{backgroundColor: '#ffffff'}} activeTextStyle={{color: '#000000', fontWeight: 'bold'}}>
                        <SettingsScreen/>
                    </Tab>
                    <Tab heading={<TabHeading style={{ backgroundColor: '#fff', flexDirection:'column' }}><Image style={{height:20, width:40, borderRadius:10}} source={require ('../../assets/suv.png')}/><Text style={{fontSize:10}}>Outstations</Text></TabHeading>} tabStyle={{backgroundColor: '#ffffff'}} textStyle={{color: '#000000'}} activeTabStyle={{backgroundColor: '#ffffff'}} activeTextStyle={{color: '#000000', fontWeight: 'bold'}}>
                        <SettingsScreen/>
                    </Tab>
                </Tabs>
               </Animatable.View>
            </ScrollView>
        </>
    );
};

export default Mainpage;

const styles = StyleSheet.create({
  container: {
    height:height/2.5,
    alignItems: 'center',
  },
  overlay: {
      bottom: 0,
      width: width,
      height:height,
      position: 'absolute',
  },
});
