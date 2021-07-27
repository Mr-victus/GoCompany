/* eslint-disable react-native/no-inline-styles */
/* eslint-disable jsx-quotes */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, StatusBar, Image, ScrollView, Dimensions, TouchableOpacity, TextInput } from 'react-native';
const { width, height } = Dimensions.get('screen');
import Foundation from 'react-native-vector-icons/Foundation';

const Index = ({navigation}) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#7952B3' barStyle="light-content"/>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=>{navigation.toggleDrawer()}}>
                    <Image style={styles.menu} source={require('../../assets/menu.png')} />
                </TouchableOpacity>
                <View style={{alignItems:'flex-end'}}>
                    <Text style={styles.headText}>GoCompany</Text>
                    <Text style={styles.headTextSub}>the super store</Text>
                </View>
            </View>
            <View style={styles.homeBody}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ padding: 15, borderRadius: 20, backgroundColor: 'whitesmoke', marginBottom: 20 }}>
                        <TouchableOpacity style={{ flexDirection: 'row', padding: 10, backgroundColor: 'white', borderRadius: 10, marginBottom: 10 }}>
                            <Foundation color="grey" size={20} name="marker" />
                            <Text>       Select Your Pickup Point</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row', padding: 10, backgroundColor: 'white', borderRadius: 10 }}>
                            <Foundation color="grey" size={20} name="marker" />
                            <Text>       Select Your Drop Point</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ padding: 15, borderRadius: 20, backgroundColor: 'whitesmoke', marginBottom: 15 }}>
                        <View style={{padding: 10, backgroundColor: 'white', borderRadius: 10, marginBottom: 10}}>
                            <Text style={{fontSize: 20, color: 'grey', fontWeight:'light', alignSelf:'center', marginBottom: 15}}>About The Item</Text>
                            <Text style={{color: 'grey', fontWeight:'light', marginBottom: 5}}>Approximate Weight</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                                <TextInput
                                    placeholder="0.0"
                                    style={{ fontSize: 45, marginLeft: 10 }}
                                    keyboardType="numeric"
                                />
                                <Text style={{marginLeft:15, color:'grey', fontWeight: 'light'}}>in Gram</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                                <View style={{flex: 1, alignItems:'center'}}>
                                    <Text style={{ color: 'grey', fontWeight: 'light' }}>Width(approx.)</Text>
                                    <TextInput
                                        placeholder="0.0"
                                        style={{ fontSize: 30}}
                                        keyboardType="numeric"
                                    />
                                    <Text style={{ color: 'grey', fontWeight: 'light' }}>(in c.m.)</Text>
                                </View>
                                <View style={{flex: 1, alignItems:'center'}}>
                                    <Text style={{ color: 'grey', fontWeight: 'light' }}>Height(approx)</Text>
                                    <TextInput
                                        placeholder="0.0"
                                        style={{ fontSize: 30}}
                                        keyboardType="numeric"
                                    />
                                    <Text style={{ color: 'grey', fontWeight: 'light' }}>(in c.m.)</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ padding: 15, borderRadius: 20, backgroundColor: 'whitesmoke', marginBottom: 20 }}>
                        <TouchableOpacity style={{ padding: 10, backgroundColor: '#7952B3', borderRadius: 10, }}>
                            <Text style={{alignSelf: 'center', color:'white', textTransform:'uppercase'}}>Fetch Nearby Drivers</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7952B3',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        alignContent: 'center',
        alignItems: 'center',
    },
    menu: {
        height: 30,
        width: 30,
    },
    headText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    headTextSub: {
        color: 'white',
    },
    homeBody: {
        flex: 1,
        borderTopEndRadius: 50,
        borderTopStartRadius: 50,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingTop: 30,
    },
})
export default Index;