/* eslint-disable react-native/no-inline-styles */
/* eslint-disable jsx-quotes */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, StatusBar, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
const { width, height } = Dimensions.get('screen');

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
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', alignContent: 'center'}}><Text>Working On It</Text></View>
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