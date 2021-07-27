/* eslint-disable react-native/no-inline-styles */
/* eslint-disable jsx-quotes */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, StatusBar, Image, ScrollView, Dimensions, TouchableOpacity} from 'react-native';
const { width, height } = Dimensions.get('screen');
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Carousel from 'react-native-snap-carousel';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/AntDesign';
import {Divider} from 'react-native-paper';

const carouselItems = [
    {
        img_url: "https://picsum.photos/600/450/?black",
        text: "Best Offers @ 40% off",
        description: "10mins Away"
    },
    {
        img_url: "https://picsum.photos/600/451/?black",
        text: "Get Drinks @ 10% off",
        description: "10mins Away"
    },
    {
        img_url: "https://picsum.photos/600/452/?black",
        text: "Best Offers @ 40% off",
        description: "10mins Away"
    },
];
const shops = [
    {
        name: 'Xpress Mart',
        imageURI: 'https://picsum.photos/200/300',
        km: 0.8,
        time: 'Within 25 mins',
        description: 'Get 50% off on Britainia Good Day Cashew Cookies!',
    },
    {
        name: 'MK Retail',
        imageURI: 'https://picsum.photos/290/370',
        km: 0.7,
        time: 'Within 25 mins',
        description: 'Get 50% off on Britainia Good Day Cashew Cookies!',
    },
    {
        name: 'BIg Mart',
        imageURI: 'https://picsum.photos/280/370',
        km: 1,
        time: 'Within 40 mins',
        description: 'Get 50% off on Britainia Good Day Cashew Cookies!',
    },
    {
        name: 'Jio Mart',
        imageURI: 'https://picsum.photos/290/371',
        km: 1,
        time: 'Within 40 mins',
        description: 'Get 50% off on Britainia Good Day Cashew Cookies!',
    },
    {
        name: 'Mk Shop',
        imageURI: 'https://picsum.photos/290/372',
        km: 1,
        time: 'Within 40 mins',
        description: 'Get 50% off on Britainia Good Day Cashew Cookies!',
    },
    {
        name: 'Xpress Mart',
        imageURI: 'https://picsum.photos/200/300',
        km: 0.8,
        time: 'Within 25 mins',
        description: 'Get 50% off on Britainia Good Day Cashew Cookies!',
    },
    {
        name: 'MK Retail',
        imageURI: 'https://picsum.photos/290/370',
        km: 0.7,
        time: 'Within 25 mins',
        description: 'Get 50% off on Britainia Good Day Cashew Cookies!',
    },
    {
        name: 'BIg Mart',
        imageURI: 'https://picsum.photos/280/370',
        km: 1,
        time: 'Within 40 mins',
        description: 'Get 50% off on Britainia Good Day Cashew Cookies!',
    },
    {
        name: 'Jio Mart',
        imageURI: 'https://picsum.photos/290/371',
        km: 1,
        time: 'Within 40 mins',
        description: 'Get 50% off on Britainia Good Day Cashew Cookies!',
    },
    {
        name: 'Mk Shop',
        imageURI: 'https://picsum.photos/290/372',
        km: 1,
        time: 'Within 40 mins',
        description: 'Get 50% off on Britainia Good Day Cashew Cookies!',
    },
    {
        name: 'Xpress Mart',
        imageURI: 'https://picsum.photos/200/300',
        km: 0.8,
        time: 'Within 25 mins',
        description: 'Get 50% off on Britainia Good Day Cashew Cookies!',
    },
    {
        name: 'MK Retail',
        imageURI: 'https://picsum.photos/290/370',
        km: 0.7,
        time: 'Within 25 mins',
        description: 'Get 50% off on Britainia Good Day Cashew Cookies!',
    },
    {
        name: 'BIg Mart',
        imageURI: 'https://picsum.photos/280/370',
        km: 1,
        time: 'Within 40 mins',
        description: 'Get 50% off on Britainia Good Day Cashew Cookies!',
    },
    {
        name: 'Jio Mart',
        imageURI: 'https://picsum.photos/290/371',
        km: 1,
        time: 'Within 40 mins',
        description: 'Get 50% off on Britainia Good Day Cashew Cookies!',
    },
    {
        name: 'Mk Shop',
        imageURI: 'https://picsum.photos/290/372',
        km: 1,
        time: 'Within 40 mins',
        description: 'Get 50% off on Britainia Good Day Cashew Cookies!',
    },
];
const _renderItem = ({ item, index }) => {
    return (
        <View style={{
            backgroundColor: 'white',
            borderRadius: 15,
            height: 150,
            width: width - 40,
            elevation: 5,
            marginTop: 10,
        }}>
            <Image
                style={{ height: 150, width: width - 40, borderRadius: 15, }}
                source={{ uri: item.img_url }}
            />
            <View style={{ position: 'absolute', bottom: 10, left: 20 }}>
                <Text style={{ fontSize: 20, textShadowColor: 'grey', textShadowOffset: { width: 1, height: 4 }, textShadowRadius: 5, color: 'white', fontWeight: "bold" }}>{item.text}</Text>
                <Text style={{ textShadowColor: 'grey', textShadowOffset: { width: 1, height: 4 }, textShadowRadius: 5, color: 'white', fontWeight: "bold", fontSize: 15, padding: 1 }}>{item.description}</Text>
            </View>
        </View>
    );
};
const Index = ({ navigation }) => {
    const [state, setState] = React.useState();
    const [res, setRes] = React.useState([]);
    React.useEffect(() => {
        setRes(shops);
    }, []);
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#7952B3' barStyle="light-content"/>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                    <Image style={styles.menu} source={require('../../assets/menu.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{}}>
                    <Text style={styles.headTextSub}><Entypo name="location-pin" size={15}/>  KIIT Square, Patia..</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{navigation.navigate('Home')}} style={{alignItems:'flex-end'}}>
                    <Text style={styles.headText}>GoCompany</Text>
                    <Text style={styles.headTextSub}>the super store</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.homeBody}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
                        <Text style={{fontWeight: 'bold', marginLeft: 10}}>GoGrocery</Text>
                        {/* <TouchableOpacity >
                            <Text><Entypo color="grey" size={20} name="location-pin" />Patia,Bhubaneswar</Text>
                        </TouchableOpacity> */}
                    </View>
                    <TouchableOpacity style={{padding:15,borderRadius: 10,shadowColor: '#000',shadowOffset: { width: 0.5, height: 0.5 },shadowOpacity: 0.5,shadowRadius: 3,elevation: 3, backgroundColor:'white', marginVertical: 20, marginHorizontal: 5}}>
                        <Text style={{alignContent: 'center'}}> <EvilIcons color="black" size={15} name="search" />   Search for Nearby Store</Text>
                    </TouchableOpacity>
                    <Carousel
                        layout={'default'}
                        autoplay={true}
                        loop={true}
                        data={carouselItems}
                        sliderWidth={width-40}
                        itemWidth={width-40}
                        renderItem={_renderItem}
                        onSnapToItem={(index) =>setState(index) }
                    />
                    <Text style={{ fontWeight: 'bold', marginVertical: 10 }}>Shops Arround You</Text>
                    <ScrollView showVerticalScrollBar={false}>
                        {
                            res.map((props, index) => {
                                return (
                                    <TouchableOpacity style={{padding: 10, flex: 1}} onPress={()=>{navigation.navigate('GroceryShopList')}}>
                                        <View
                                            style={{
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            backgroundColor: 'white',
                                            paddingVertical: 10,
                                            }}>
                                            <View style={{flex: 5}}>
                                            <Image
                                                style={{width: 100, height: 100, borderRadius: 10, elevation: 5}}
                                                source={{uri: props.imageURI}}
                                            />
                                            </View>
                                            <View style={{flex: 10}}>
                                            <Text style={{color: 'black', fontWeight: 'bold'}}>
                                                {props.name}
                                            </Text>
                                            <Text
                                                style={{color: 'grey', fontSize: 10, paddingVertical: 2}}>
                                                {props.km}km HSR
                                            </Text>
                                            <View style={{flexDirection: 'row', paddingVertical: 2}}>
                                                <Feather name="clock" size={15} color={'grey'} />
                                                <Text style={{fontSize: 10, color: 'grey', marginLeft: 5}}>
                                                {props.time}
                                                </Text>
                                            </View>
                                            <View style={{flexDirection: 'row', paddingVertical: 2}}>
                                                <Text
                                                style={{
                                                    fontSize: 8,
                                                    backgroundColor: '#d5f7e7',
                                                    borderRadius: 5,
                                                    borderWidth: 1,
                                                    borderColor: '#59cf96',
                                                    paddingHorizontal: 4,
                                                    fontWeight: '100',
                                                    color: 'black',
                                                    paddingVertical: 2,
                                                }}>
                                                {' '}
                                                <Icon name="star" color="#59cf96" /> Top Stare
                                                </Text>
                                                <Text
                                                style={{
                                                    marginLeft: 15,
                                                    fontSize: 8,
                                                    backgroundColor: 'pink',
                                                    borderRadius: 5,
                                                    borderWidth: 1,
                                                    borderColor: 'red',
                                                    paddingHorizontal: 4,
                                                    fontWeight: 'bold',
                                                    paddingVertical: 3.5,
                                                }}>
                                                <Feather
                                                    name="trending-up"
                                                    size={10}
                                                    color={'white'}
                                                    style={{backgroundColor: 'red', borderRadius: 10}}
                                                />{' '}
                                                Trending
                                                </Text>
                                            </View>
                                            <Divider
                                                style={{height: 2, marginTop: 20, marginRight: 10}}
                                            />
                                            <View style={{flexDirection: 'row', marginTop: 10}}>
                                                <Feather name="gift" size={15} color={'orange'} />
                                                <Text
                                                style={{fontSize: 10, marginLeft: 5, marginRight: 10}}>
                                                {props.description}
                                                </Text>
                                            </View>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                );
                            })
                        }
                    </ScrollView>
                    {/* <Text style={{ fontWeight: 'bold', marginVertical: 10 }}>Eat What Makes You Happy</Text>
                    <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                        <TouchableOpacity style={{ width: width / 4.5, alignItems: 'center' }}>
                            <Image style={styles.menuImg} source={{ uri: 'https://picsum.photos/200/200?Rices' }} />
                            <Text>Rice</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: width / 4.5, alignItems: 'center' }}>
                            <Image style={styles.menuImg} source={{ uri: 'https://picsum.photos/200/200?Dal' }} />
                            <Text>Dal</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: width / 4.5, alignItems: 'center' }}>
                            <Image style={styles.menuImg} source={{ uri: 'https://picsum.photos/200/200?Salt' }} />
                            <Text>Salt</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: width / 4.5, alignItems: 'center' }}>
                            <Image style={styles.menuImg} source={{ uri: 'https://picsum.photos/200/200?Wheat' }} />
                            <Text>Wheat</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                        <TouchableOpacity style={{ width: width / 4.5, alignItems: 'center' }}>
                            <Image style={styles.menuImg} source={{ uri: 'https://picsum.photos/200/200?Thali' }} />
                            <Text>Thali</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: width / 4.5, alignItems: 'center' }}>
                            <Image style={styles.menuImg} source={{ uri: 'https://picsum.photos/200/200?Soap' }} />
                            <Text>Daal</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: width / 4.5, alignItems: 'center' }}>
                            <Image style={styles.menuImg} source={{ uri: 'https://picsum.photos/200/200?Fried Rice' }} />
                            <Text>Fried Rice</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: width / 4.5, alignItems: 'center' }}>
                            <Image style={styles.menuImg} source={{ uri: 'https://picsum.photos/200/200?Paneer' }} />
                            <Text>Paneer</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                        <TouchableOpacity style={{ width: width / 4.5, alignItems: 'center' }}>
                            <Image style={styles.menuImg} source={{ uri: 'https://picsum.photos/200/200?Jeera' }} />
                            <Text>Jeera</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: width / 4.5, alignItems: 'center' }}>
                            <Image style={styles.menuImg} source={{ uri: 'https://picsum.photos/200/200?Termeric' }} />
                            <Text>Termeric</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: width / 4.5, alignItems: 'center' }}>
                            <Image style={styles.menuImg} source={{ uri: 'https://picsum.photos/200/200?Suger' }} />
                            <Text>Suger</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: width / 4.5, alignItems: 'center' }}>
                            <Image style={styles.menuImg} source={{ uri: 'https://picsum.photos/200/200?Chilly' }} />
                            <Text>Chilly</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                        <TouchableOpacity style={{ width: width / 4.5, alignItems: 'center' }}>
                            <Image style={styles.menuImg} source={{ uri: 'https://picsum.photos/200/200?Dhaniya' }} />
                            <Text>Dhaniya</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: width / 4.5, alignItems: 'center' }}>
                            <Image style={styles.menuImg} source={{ uri: 'https://picsum.photos/200/200?Soap' }} />
                            <Text>Soap</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: width / 4.5, alignItems: 'center' }}>
                            <Image style={styles.menuImg} source={{ uri: 'https://picsum.photos/200/200?Mixture' }} />
                            <Text>Mixture</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: width / 4.5, alignItems: 'center' }}>
                            <Image style={styles.menuImg} source={{ uri: 'https://picsum.photos/200/200?Milk' }} />
                            <Text>Milk</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{padding:15,borderRadius: 10,shadowColor: '#000',shadowOffset: { width: 0.5, height: 0.5 },shadowOpacity: 0.5,shadowRadius: 3,elevation: 3, backgroundColor:'white', marginVertical: 20, alignItems: 'center'}}>
                        <Text style={{alignContent: 'center'}}>  View More </Text>
                    </TouchableOpacity> */}
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
});

export default Index;
