/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Text,ScrollView,TouchableOpacity,View ,Dimensions,Image} from 'react-native';
import { Divider } from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const {width, height} = Dimensions.get('screen');
const Payment = ({navigation}) => {
  return (
    <>
        <TouchableOpacity onPress={()=>{navigation.navigate('FoodAddress')}} style={{flexDirection:'row',paddingHorizontal:10,paddingVertical:10,justifyContent:'space-between',alignItems:'center'}}>
            <View style={{flexDirection:'row'}} ><Text style={{fontSize:15}}><Entypo name="location-pin" size={20}  color={'#03a330'} /> Delivery at Home</Text></View> 
            <Ionicons name="chevron-down-outline" size={20} />
        </TouchableOpacity>
        <Divider />
        <View style={{flexDirection:'row',paddingHorizontal:15,paddingVertical:10,alignItems:'center'}}>
            <Ionicons name="time" size={20} color={'#03a330'} style={{marginTop: 2,flex:1}} />
            <Text style={{fontSize:15,flex:14}}>Delivery in 25 mins with live tracking</Text>
        </View>
        <Divider />
        <ScrollView>
            <View style={{backgroundColor:'#d8d9f2',marginLeft: 15,marginTop:10,marginRight:15,flexDirection:'row',justifyContent:'space-between',paddingVertical:10,paddingHorizontal:10,justifyContent:'space-between',alignContent: 'center',  padding: 5, borderRadius: 10, borderWidth: 1, borderColor : '#2f3cf7',  alignItems: 'center', elevation: 5}}>
              <Text style={{color:"#2f3cf7"}}>Your total savings</Text>
              <Text style={{color:"#2f3cf7"}}>₹27.00</Text>
            </View>
            <View style={{flexDirection:'row',flex:1, marginBottom: 10, marginTop: 10}}>
                <View style={{flex: 1,marginLeft:20}}>
                  <Image source={{ uri:'http://infoseekershub.com/wp-content/uploads/2019/08/non-veg.jpg'}} style={{ width: 15, height: 15, marginTop: 10 }}/>
                </View>
                <View style={{flex: 14, padding: 3}}>
                  <Text style={{fontSize: 15, color: 'black'}}>Mutton Dum Biriyani</Text>
                  <Text style={{marginVertical: 5, fontSize: 13}}>₹299</Text>
                </View>
                <View style={{flex: 5,marginRight:10,height:40,flexDirection:'row', backgroundColor: 'white', alignContent: 'center', justifyContent: 'center', padding: 5, borderRadius: 10,  alignItems: 'center', elevation: 5}}>
                        <TouchableOpacity style={{flex: 1,alignSelf:'center', alignItems:'center',alignContent: 'center'}} ><Text style={{fontWeight: 'bold', color: 'grey'}}>-</Text></TouchableOpacity>
                        <View  style={{flex: 1,alignSelf:'center', alignItems:'center',alignContent: 'center'}}><Text style={{fontWeight: 'bold', color: 'black'}}>1</Text></View>
                        <TouchableOpacity style={{flex: 1,alignSelf:'center', alignItems:'center',alignContent: 'center'}} ><Text style={{fontWeight: 'bold', color: 'grey'}}>+</Text></TouchableOpacity>
                </View>
            </View>
            <Divider />
            <View style={{flexDirection:'row',flex:1, marginBottom: 10, marginTop: 10}}>
                <View style={{flex: 1,marginLeft:20}}>
                  <Image source={{ uri:'http://infoseekershub.com/wp-content/uploads/2019/08/non-veg.jpg'}} style={{ width: 15, height: 15, marginTop: 10 }}/>
                </View>
                <View style={{flex: 14, padding: 3}}>
                  <Text style={{fontSize: 15, color: 'black'}}>Mutton Dum Biriyani</Text>
                  <Text style={{marginVertical: 5, fontSize: 13}}>₹299</Text>
                </View>
                <View style={{flex: 5,marginRight:10,height:40,flexDirection:'row', backgroundColor: 'white', alignContent: 'center', justifyContent: 'center', padding: 5, borderRadius: 10,  alignItems: 'center', elevation: 5}}>
                        <TouchableOpacity style={{flex: 1,alignSelf:'center', alignItems:'center',alignContent: 'center'}} ><Text style={{fontWeight: 'bold', color: 'grey'}}>-</Text></TouchableOpacity>
                        <View  style={{flex: 1,alignSelf:'center', alignItems:'center',alignContent: 'center'}}><Text style={{fontWeight: 'bold', color: 'black'}}>1</Text></View>
                        <TouchableOpacity style={{flex: 1,alignSelf:'center', alignItems:'center',alignContent: 'center'}} ><Text style={{fontWeight: 'bold', color: 'grey'}}>+</Text></TouchableOpacity>
                </View>
            </View>
            <Divider />
            <View style={{flexDirection:'row',flex:1, marginBottom: 10, marginTop: 10}}>
                <View style={{flex: 1,marginLeft:20}}>
                  <Image source={{ uri:'http://infoseekershub.com/wp-content/uploads/2019/08/non-veg.jpg'}} style={{ width: 15, height: 15, marginTop: 10 }}/>
                </View>
                <View style={{flex: 14, padding: 3}}>
                  <Text style={{fontSize: 15, color: 'black'}}>Mutton Dum Biriyani</Text>
                  <Text style={{marginVertical: 5, fontSize: 13}}>₹299</Text>                    
                </View>
                <View style={{flex: 5,marginRight:10,height:40,flexDirection:'row', backgroundColor: 'white', alignContent: 'center', justifyContent: 'center', padding: 5, borderRadius: 10,  alignItems: 'center', elevation: 5}}>
                        <TouchableOpacity style={{flex: 1,alignSelf:'center', alignItems:'center',alignContent: 'center'}} ><Text style={{fontWeight: 'bold', color: 'grey'}}>-</Text></TouchableOpacity>
                        <View  style={{flex: 1,alignSelf:'center', alignItems:'center',alignContent: 'center'}}><Text style={{fontWeight: 'bold', color: 'black'}}>1</Text></View>
                        <TouchableOpacity style={{flex: 1,alignSelf:'center', alignItems:'center',alignContent: 'center'}} ><Text style={{fontWeight: 'bold', color: 'grey'}}>+</Text></TouchableOpacity>
                </View>
            </View>
            <Divider />
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingVertical:10}}>
              <Text style={{marginLeft:20,color:"#8e8f99"}}>Item Total</Text>
              <Text style={{marginRight:20,color:"#8e8f99"}}>₹299.00</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingVertical:4}}>
              <Text style={{marginLeft:20,color:"#a8a9ad"}}>Delivery Charge</Text>
              <Text style={{marginRight:20,color:"#a8a9ad"}}>₹299.00</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingVertical:4}}>
              <Text style={{marginLeft:20,color:"#a8a9ad"}}>Taxes & charges</Text>
              <Text style={{marginRight:20,color:"#a8a9ad"}}>₹299.00</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingVertical:10}}>
              <Text style={{marginLeft:20,fontSize: 20}}>Grand Total</Text>
              <Text style={{marginRight:20,fontSize: 20}}>₹299.00</Text>
            </View>

        </ScrollView>
        <View style={{backgroundColor:'#cc2f3c',marginLeft: 15,marginBottom:20,marginTop:10,marginRight:15,flexDirection:'row',paddingVertical:10,paddingHorizontal:10,justifyContent:'space-between',  padding: 5, borderRadius:10, alignItems: 'center', elevation: 5}}>
              <Text style={{color:"white",fontSize:15}}>Add Payment Method</Text>
              <AntDesign name="caretright" size={15} color={'white'} />
        </View>
    </>
  );
}

export default Payment;