/* eslint-disable no-trailing-spaces */
/* eslint-disable no-sequences */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable jsx-quotes */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, StatusBar, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
const { width, height } = Dimensions.get('screen');
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as Animatable from 'react-native-animatable';

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#7952B3' barStyle="light-content"/>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=>{navigation.toggleDrawer()}}>
                    <Image style={styles.menu} source={require('../assets/menu.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{}}>
                    <Text style={styles.headTextSub}><Entypo name="location-pin" size={15}/>  KIIT Square, Patia..</Text>
                </TouchableOpacity>
                <View style={{alignItems:'flex-end'}}>
                    <Text style={styles.headText}>GoCompany</Text>
                    <Text style={styles.headTextSub}>the super store</Text>
                </View>
            </View>
            <Animatable.View style={styles.homeBody} animation="fadeInUpBig" duration={400}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Animatable.View style={styles.servContainer} animation="fadeInUpBig" duration={400} delay={100}>
                        <TouchableOpacity style={{flexDirection: 'row', elevation: 3, backgroundColor: 'white', borderRadius: 10, padding: 15, flex: 1, marginTop: 5}}>
                            <AntDesign name="search1" size={20}/><Text style={{color: 'grey', fontWeight: '100'}}>    Looking for Something?</Text>
                        </TouchableOpacity>
                    </Animatable.View>
                    
                    <View style={styles.servContainer}>
                        <TouchableOpacity onPress={()=>{navigation.navigate('GoGrocery')}} style={styles.servListCardsView}>
                            <Animatable.View style={{ flex: 1 }} animation="zoomIn" duration={400} delay={100}>
                                <Text style={styles.servListCardText}>Groceries & Essentials</Text>
                                <AntDesign name="rightcircle" color="white" size={20} />
                                <Image style={styles.servListCardImage} source={require('../assets/GoIcons/GoIconsWhite/groceries.png')}/>
                            </Animatable.View>
                        </TouchableOpacity>
                        <TouchableOpacity animation="zoomIn" duration={400} delay={1200} onPress={()=>{navigation.navigate('GoFood')}} style={styles.servListCardsView}>
                            <Animatable.View style={{ flex: 1 }} animation="zoomIn" duration={400} delay={100}>
                                <Text style={styles.servListCardText}>Food Delivery</Text>
                                <AntDesign name="rightcircle" color="white" size={20} />
                                <Image style={styles.servListCardImage} source={require('../assets/GoIcons/GoIconsWhite/dinner.png')}/>    
                            </Animatable.View>
                        </TouchableOpacity>
                        <TouchableOpacity animation="zoomIn" duration={400} delay={1600} onPress={()=>{navigation.navigate('GoRide')}} style={styles.servListCardsView}>
                            <Animatable.View style={{ flex: 1 }} animation="zoomIn" duration={400} delay={100}>
                                <Text style={styles.servListCardText}>Cab and More</Text>
                                <AntDesign name="rightcircle" color="white" size={20} />
                                <Image style={styles.servListCardImage} source={require('../assets/GoIcons/GoIconsWhite/finish.png')}/>    
                            </Animatable.View>
                        </TouchableOpacity>
                    </View>
                    
                    <Animatable.View style={styles.servContainer} animation="fadeInUpBig" duration={400}>
                        <TouchableOpacity onPress={() => { navigation.navigate('GoService')}} style={styles.servListHCardsView}>
                            <Text style={styles.servListHCardText}>Service and More</Text>
                            {/* <Image style={styles.servListHCardImage} source={require('../assets/GoIcons/GoIconsWhite/finish.png')}/> */}
                            <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', flex: 2}}>
                                <AntDesign name="right" color="#7952B3" size={20}/>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate('GoSend')}} style={styles.servListHCardsView}>
                            <Text style={styles.servListHCardText}>Send Packages</Text>
                            {/* <Image style={styles.servListHCardImage} source={require('../assets/GoIcons/GoIconsWhite/finish.png')}/> */}
                            <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', flex: 2}}>
                                <AntDesign name="right" color="#7952B3" size={20}/>
                            </View>
                        </TouchableOpacity>
                    </Animatable.View>
                    
                    <Animatable.View style={styles.servContainer} animation="fadeInUpBig" duration={400}>
                        <TouchableOpacity style={styles.servBtnsView} onPress={() => { navigation.navigate('GoPharma') }}>
                            <View style={styles.servBtns}>
                                <Image style={styles.servImgs} source={ require('../assets/GoIcons/GoPharma.png') }/>
                                <Text style={styles.servText}>Medicines</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.servBtnsView} onPress={()=>{navigation.navigate('GoFruits')}}>
                            <View style={styles.servBtns}>
                                <Image style={styles.servImgs} source={ require('../assets/GoIcons/GoFruits.png') }/>
                                <Text style={styles.servText}>Fruits</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.servBtnsView} onPress={()=>{navigation.navigate('GoVegitable')}}>
                            <View style={styles.servBtns}>
                                <Image style={styles.servImgs} source={ require('../assets/GoIcons/GoVegitable.png') }/>
                                <Text style={styles.servText}>Vegetable</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.servBtnsView} >
                            <View style={styles.servBtns}>
                                <Image style={styles.servImgs} source={ require('../assets/GoIcons/more.png') }/>
                                <Text style={styles.servText}>More</Text>
                            </View>
                        </TouchableOpacity>
                    </Animatable.View>
                    
                    {/* <View style={styles.servContainer}>
                        <TouchableOpacity style={styles.servBtnsView} onPress={()=>{navigation.navigate('GoPay')}}>
                            <View style={styles.servBtns}>
                                <Image style={styles.servImgs} source={ require('../assets/GoIcons/GoPay.png') }/>
                                <Text style={styles.servText}>Pay</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.servBtnsView} onPress={()=>{navigation.navigate('GoMart')}}>
                            <View style={styles.servBtns}>
                                <Image style={styles.servImgs} source={ require('../assets/GoIcons/GoMart.png') }/>
                                <Text style={styles.servText}>Mart</Text>
                            </View>
                        </TouchableOpacity>
                    </View> */}
                    <Animatable.Text style={{marginTop: 10, marginBottom: 5}}animation="fadeInUpBig" duration={400}>Recomended for you..</Animatable.Text>
                    
                    <Animatable.View style={styles.cardView}>
                        <Image style={styles.image} source={{ uri: 'https://picsum.photos/1080/400?cakes' }} />
                        <View style={styles.textView}>
                            <Text style={styles.itemTitle}>Fresh Fruits</Text>
                            <Text style={styles.itemDescription}>(Recomended)</Text>
                        </View>
                        <View style={styles.textView2}>
                            <Text style={styles.itemTitle}> Rs. 550/-</Text>
                            <Text style={styles.itemSubTitleMini}> Pre KG</Text>
                        </View>
                    </Animatable.View>

                    <Animatable.View style={{ flexDirection: 'row' }}animation="fadeInUpBig" duration={400}>
                        <View style={{ flex: 1 }}>
                            <View style={styles.cardView}>
                                <Image style={styles.image} source={{ uri: 'https://picsum.photos/501/501?cakes' }} />
                                <View style={styles.textView}>
                                    <Text style={styles.itemTitle}>Item Name</Text>
                                    <Text style={styles.itemDescription}>(Descriptiom)</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ flex: 1 }}>
                            <View style={styles.cardView}>
                                <Image style={styles.image} source={{ uri: 'https://picsum.photos/500/501?cakes' }} />
                                <View style={styles.textView}>
                                    <Text style={styles.itemTitle}>Item Name</Text>
                                    <Text style={styles.itemDescription}>(Descriptiom)</Text>
                                </View>
                            </View>
                        </View>
                    </Animatable.View>

                    <Animatable.View style={{ flexDirection: 'row' }}animation="fadeInUpBig" duration={400}>
                        <View style={{ flex: 1 }}>
                            <View style={styles.cardView}>
                                <Image style={styles.image} source={{ uri: 'https://picsum.photos/511/501?food' }} />
                                <View style={styles.textView}>
                                    <Text style={styles.itemTitle}>Item Name</Text>
                                    <Text style={styles.itemDescription}>(Descriptiom)</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ flex: 1 }}>
                            <View style={styles.cardView}>
                                <Image style={styles.image} source={{ uri: 'https://picsum.photos/510/501?food' }} />
                                <View style={styles.textView}>
                                    <Text style={styles.itemTitle}>Item Name</Text>
                                    <Text style={styles.itemDescription}>(Descriptiom)</Text>
                                </View>
                            </View>
                        </View>
                    </Animatable.View>

                    <Animatable.View style={styles.cardView}animation="fadeInUpBig" duration={400}>
                        <Image style={styles.image} source={{ uri: 'https://picsum.photos/1080/401?cakes' }} />
                        <View style={styles.textView}>
                            <Text style={styles.itemTitle}>Item Name</Text>
                                    <Text style={styles.itemDescription}>(Descriptiom)</Text>
                        </View>
                        <View style={styles.textView2}>
                            <Text style={styles.itemTitle}> Rs. 120/-</Text>
                            <Text style={styles.itemSubTitleMini}> Pre KG</Text>
                        </View>
                    </Animatable.View>
                </ScrollView>
            </Animatable.View>
        </View>
    );
};

const styles = StyleSheet.create({
    servListHCardsView: {
        flexDirection: 'row',
        marginHorizontal: 5,
        flex: 1,
        borderRadius: 10,
        backgroundColor: 'white',
        elevation: 3,
        paddingHorizontal: 12,
        paddingVertical: 7,
    },
    servListHCardText: {
        color: '#7952B3',
        fontWeight: '100',
        fontSize: 18,
        marginTop: 10,
        marginBottom: 10,
        flex: 2.5,
    },
    servListHCardImage: {
        height: 45,
        width: 45,
        flex: 2,
    },
    servListCardsView: {
      height: 150,
      marginHorizontal: 5,
      flex: 1,
      borderRadius: 10,
      backgroundColor: '#7952B3',
      elevation: 5,
      padding: 7,
    },
    servListCardText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 10,
        marginBottom: 15,
    },
    servListCardImage: {
        position: 'absolute',
        bottom: 10,
        right: 7,
        height: 55,
        width: 55,
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
        borderTopEndRadius:35,
        borderTopStartRadius:35,
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingTop: 30,
    },
    servContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingHorizontal: 10,
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    servBtnsView: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        paddingVertical: 15,
        borderRadius: 15,
        elevation: 3,
        marginHorizontal: 5,
    },
    servBtns: {
        flex: 1,
        alignItems: 'center',
        
    },
    servImgs: {
        height: 25,
        width: 25,
        marginBottom: 5,
    },
    servText: {
        textTransform: 'uppercase',
        fontSize: 12,
        color: '#3D2168'
    },
    cardView: {
        height: 150,
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
        bottom: 10,
        margin: 10,
        left: 5,
        elevation: 2,
    },
    textView2: {
        position: 'absolute',
        bottom: 10,
        margin: 10,
        right: 5,
        alignItems: 'flex-end',
    },
    image: {
        height: 150,
        borderRadius: 10,
    },
    itemTitle: {
        color: 'white',
        fontSize: 22,
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        marginBottom: 5,
        fontWeight: 'bold',
        elevation: 5,
    },
    itemSubTitleMini: {
        color: 'white',
        fontSize: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 5,
    },
    itemDescription: {
        color: 'white',
        fontSize: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 5,
    },
})
export default Home;