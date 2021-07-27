/* eslint-disable react-native/no-inline-styles */
/* eslint-disable jsx-quotes */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, StatusBar, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
const { width, height } = Dimensions.get('screen');
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

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
                    <View style={{flexDirection: 'row',justifyContent:'space-between', marginBottom: 15}}>
                        <Text style={{fontSize:20}}>GoVegetable</Text>
                        <TouchableOpacity >
                            <Text><Entypo color="grey" size={20} name="location-pin" />Patia,Bhubaneswar</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{ fontWeight: 'bold', marginVertical: 10 }}>Eat What Makes You Happy</Text>
                    <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                        <TouchableOpacity onPress={()=>{navigation.navigate('FruitsShopList')}} style={{ width: width / 4.5, alignItems: 'center' }}>
                            <Image style={styles.menuImg} source={{ uri: 'https://picsum.photos/200/200?Healthy' }} />
                            <Text>Potato</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{navigation.navigate('FruitsShopList')}} style={{ width: width / 4.5, alignItems: 'center' }}>
                            <Image style={styles.menuImg} source={{ uri: 'https://picsum.photos/200/200?Chicken' }} />
                            <Text>Cabbage</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{navigation.navigate('FruitsShopList')}} style={{ width: width / 4.5, alignItems: 'center' }}>
                            <Image style={styles.menuImg} source={{ uri: 'https://picsum.photos/200/200?Dumplings' }} />
                            <Text>Beans</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{navigation.navigate('FruitsShopList')}} style={{ width: width / 4.5, alignItems: 'center' }}>
                            <Image style={styles.menuImg} source={{ uri: 'https://picsum.photos/200/200?Biriyani' }} />
                            <Text>Onion</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                        <TouchableOpacity onPress={()=>{navigation.navigate('FruitsShopList')}} style={{ width: width / 4.5, alignItems: 'center' }}>
                            <Image style={styles.menuImg} source={{ uri: 'https://picsum.photos/200/200?Thali' }} />
                            <Text>Ginger</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{navigation.navigate('FruitsShopList')}} style={{ width: width / 4.5, alignItems: 'center' }}>
                            <Image style={styles.menuImg} source={{ uri: 'https://picsum.photos/200/200?Daal' }} />
                            <Text>Garlic</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{navigation.navigate('FruitsShopList')}} style={{ width: width / 4.5, alignItems: 'center' }}>
                            <Image style={styles.menuImg} source={{ uri: 'https://picsum.photos/200/200?Fried Rice' }} />
                            <Text>Chili</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{navigation.navigate('FruitsShopList')}} style={{ width: width / 4.5, alignItems: 'center' }}>
                            <Image style={styles.menuImg} source={{ uri: 'https://picsum.photos/200/200?Paneer' }} />
                            <Text>Lemon</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>Recomended For You</Text>
                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <TouchableOpacity onPress={()=>{navigation.navigate('FruitsShopList')}} style={{ flex: 1 }}>
                            <View style={styles.cardViewf}>
                                <Image style={styles.imagef} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsoBYhEsNEkQIlp6WuU_kDYgmyFXDpwKLH_g&usqp=CAU' }} />
                                <View style={styles.textViewf}>
                                    <Text style={styles.itemTitlef}>Onion</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{navigation.navigate('FruitsShopList')}} style={{ flex: 1 }}>
                            <View style={styles.cardViewf}>
                                <Image style={styles.imagef} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGdYp04PSiJIC7dYWLawD6MCnI5G0FcOM2eA&usqp=CAU' }} />
                                <View style={styles.textViewf}>
                                    <Text style={styles.itemTitlef}>Garlic</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <TouchableOpacity onPress={()=>{navigation.navigate('FruitsShopList')}} style={{ flex: 1 }}>
                            <View style={styles.cardViewf}>
                                <Image style={styles.imagef} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ9stXBVb0eIn5hSCMdAVJb29PdI4-7gZ_Lw&usqp=CAU' }} />
                                <View style={styles.textViewf}>
                                    <Text style={styles.itemTitlef}>Potato</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{navigation.navigate('FruitsShopList')}} style={{ flex: 1 }}>
                            <View style={styles.cardViewf}>
                                <Image style={styles.imagef} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiJAA9ERPDAUrz47tZ87yLDLx5mMicKIbF0g&usqp=CAU' }} />
                                <View style={styles.textViewf}>
                                    <Text style={styles.itemTitlef}>Cabbage</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <TouchableOpacity onPress={()=>{navigation.navigate('FruitsShopList')}} style={{ flex: 1 }}>
                            <View style={styles.cardViewf}>
                                <Image style={styles.imagef} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdlw7wl1YC58FS5aY6FtJVVfD-bTFAyqsy2Q&usqp=CAU' }} />
                                <View style={styles.textViewf}>
                                    <Text style={styles.itemTitlef}>Grapes</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{navigation.navigate('FruitsShopList')}} style={{ flex: 1 }}>
                            <View style={styles.cardViewf}>
                                <Image style={styles.imagef} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfmmVABocHum26GyoPZ2yU43DNQk0e9to-HA&usqp=CAU' }} />
                                <View style={styles.textViewf}>
                                    <Text style={styles.itemTitlef}>Orange</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    
                    <Text style={{ fontWeight: 'bold', marginVertical: 10 }}>Sellers Arround You</Text>
                    <TouchableOpacity onPress={()=>{navigation.navigate('FruitsMenu')}} style={styles.cardView}>
                        <Image style={styles.image} source={{ uri: 'https://picsum.photos/1080/405?cakes' }} />
                        <View style={styles.textView}>
                            <Text style={styles.OfferTitle}> 45% off upto ₹100 </Text>
                        </View>
                        <View style={styles.textView2}>
                            <Text style={styles.timeTitle}> 30 min </Text>
                        </View>
                        <View style={{padding : 15, flexDirection: 'row', justifyContent: 'space-between'}}>
                            <View>
                                <Text style={{ fontWeight: 'bold' }}>Fruits Seller Name..</Text>
                                <Text style={{fontWeight: '100', fontSize: 10, color: 'grey'}}>Chinese, North Indian, Odia</Text>
                            </View>
                            <View style={{ alignItems: 'flex-end'}}>
                                <Text style={{ fontWeight: 'bold', backgroundColor: 'green', padding: 2, color: 'white', borderRadius: 5 }}>  3.5 <AntDesign name="star"/>  </Text>
                                <Text style={{fontWeight: '100', fontSize: 10, color: 'grey'}}>₹150 for one</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{navigation.navigate('FruitsMenu')}} style={styles.cardView}>
                        <Image style={styles.image} source={{ uri: 'https://picsum.photos/1080/401?rice' }} />
                        <View style={styles.textView}>
                            <Text style={styles.OfferTitle}> 45% off upto ₹100 </Text>
                        </View>
                        <View style={styles.textView2}>
                            <Text style={styles.timeTitle}> 30 min </Text>
                        </View>
                        <View style={{padding : 15, flexDirection: 'row', justifyContent: 'space-between'}}>
                            <View>
                                <Text style={{ fontWeight: 'bold' }}>Fruits Seller Name..</Text>
                                <Text style={{fontWeight: '100', fontSize: 10, color: 'grey'}}>Chinese, North Indian, Odia</Text>
                            </View>
                            <View style={{ alignItems: 'flex-end'}}>
                                <Text style={{ fontWeight: 'bold', backgroundColor: 'green', padding: 2, color: 'white', borderRadius: 5 }}>  3.5 <AntDesign name="star"/>  </Text>
                                <Text style={{fontWeight: '100', fontSize: 10, color: 'grey'}}>₹150 for one</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{navigation.navigate('FruitsMenu')}} style={styles.cardView}>
                        <Image style={styles.image} source={{ uri: 'https://picsum.photos/1080/401?pancakes' }} />
                        <View style={styles.textView}>
                            <Text style={styles.OfferTitle}> 45% off upto ₹100 </Text>
                        </View>
                        <View style={styles.textView2}>
                            <Text style={styles.timeTitle}> 30 min </Text>
                        </View>
                        <View style={{padding : 15, flexDirection: 'row', justifyContent: 'space-between'}}>
                            <View>
                                <Text style={{ fontWeight: 'bold' }}>Fruits Seller Name..</Text>
                                <Text style={{fontWeight: '100', fontSize: 10, color: 'grey'}}>Chinese, North Indian, Odia</Text>
                            </View>
                            <View style={{ alignItems: 'flex-end'}}>
                                <Text style={{ fontWeight: 'bold', backgroundColor: 'green', padding: 2, color: 'white', borderRadius: 5 }}>  3.5 <AntDesign name="star"/>  </Text>
                                <Text style={{fontWeight: '100', fontSize: 10, color: 'grey'}}>₹150 for one</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    menuImg: {
        height: 70,
        width: 70,
        borderRadius: 100,
        marginBottom: 10,
    },
    imageRec: {
        flex: 1,
        height: 50,
        width: 50,
        borderRadius: 10,
        marginRight: 10,
    },
    viewRec: {
        flex: 2
    },
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
    cardView: {
        height: 210,
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
    },

    textView: {
        position: 'absolute',
        bottom: 65,
        margin: 10,
        left: -10,
        elevation: 2,
    },
    textView2: {
        position: 'absolute',
        bottom: 65,
        margin: 10,
        right: 5,
        alignItems: 'flex-end',
    },
    image: {
        height: 150,
        borderRadius: 10,
    },
    OfferTitle: {
        color: 'white',
        fontSize: 15,padding: 2,
        backgroundColor:'blue',borderTopRightRadius: 100, borderBottomRightRadius: 100,
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        marginBottom: 5,
        fontWeight: 'bold',
        elevation: 5,
    },
    timeTitle: {
        color: 'grey',
        fontSize: 15,
        backgroundColor: 'whitesmoke',
        borderRadius:5,
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        marginBottom: 5,
        fontWeight: 'bold',
        elevation: 5,
    },
    cardViewf: {
        height: 100,
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
    },

    textViewff: {
        // position: 'absolute',
        // bottom: 10,
        // margin: 10,
        // left: 5,
        elevation: 2,
        marginTop: 10,
        padding: 10,
        alignItems: 'center'
    },
    imagef: {
        height: 70,
        borderRadius: 10,
    },
    itemTitlef: {
        textTransform: 'uppercase',
        color: 'black',
        fontSize: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        marginBottom: 5,
        fontWeight: 'bold',
        elevation: 5,
        padding: 5
    },
    itemDescriptionf: {
        color: 'grey',
        fontSize: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 5,
    },
});

export default Index;
