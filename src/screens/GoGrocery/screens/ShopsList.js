/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Text ,View,TouchableOpacity,Image,ScrollView,Dimensions,StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Divider } from 'react-native-paper';
import Add1 from '../components/add1';

const { width, height } = Dimensions.get('screen');

const items = [
    {
        image: 'https://picsum.photos/200/300',
        name: 'Grocery Item Name',
        gms: 130,
        price: 175,
    },
    {
        image: 'https://picsum.photos/250/350',
        name: 'Grocery Item Name',
        gms: 130,
        price: 175,
    },
    {
        image: 'https://picsum.photos/210/310',
        name: 'Grocery Item Name',
        gms: 130,
        price: 175,
    },
    {
        image: 'https://picsum.photos/270/300',
        name: 'Grocery Item Name',
        gms: 130,
        price: 175,
    },
    {
        image: 'https://picsum.photos/280/380',
        name: 'Grocery Item Name',
        gms: 130,
        price: 175,
    },
];

const item2 = [
    {
        image2: 'https://picsum.photos/200/309',
        name2: 'Grocery Category',
    },
    {
        image2: 'https://picsum.photos/301/300',
        name2: 'Grocery Category',
    },
    {
        image2: 'https://picsum.photos/307/319',
        name2: 'Grocery Category',
    },
    {
        image2: 'https://picsum.photos/331/329',
        name2: 'Grocery Category',
    },
    {
        image2: 'https://picsum.photos/331/309',
        name2: 'Grocery Category',
    },
    {
        image2: 'https://picsum.photos/321/379',
        name2: 'Grocery Category',
    },
    {
        image2: 'https://picsum.photos/311/329',
        name2: 'Grocery Category',
    },
    {
        image2: 'https://picsum.photos/301/329',
        name2: 'Grocery Category',
    },
    {
        image2: 'https://picsum.photos/221/329',
        name2: 'Grocery Category',
    },
    {
        image2: 'https://picsum.photos/201/349',
        name2: 'Grocery Category',
    },
    {
        image2: 'https://picsum.photos/201/325',
        name2: 'Grocery Category',
    },
    {
        image2: 'https://picsum.photos/309/315',
        name2: 'Grocery Category',
    },
];

const shops = [
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

const Page2 = ({navigation}) => {
    const [res, setRes] = React.useState([]);
    React.useEffect(() => {
        setRes(items);
    }, []);
    const [res2, setRes2] = React.useState([]);
    React.useEffect(() => {
        setRes2(item2);
    }, []);
    const [res3, setRes3] = React.useState([]);
    React.useEffect(() => {
        setRes3(shops);
    }, []);
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <TouchableOpacity onPress={()=>{navigation.goBack()}} style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }} >
                <AntDesign name="arrowleft" size={25} color={'black'} style={{ marginTop: 25, marginLeft: 10 }} />
            </TouchableOpacity>
            <Text style={{ marginTop: 10, marginLeft: 10, fontWeight: 'bold' }}>Xpress Mart</Text>
            <Text style={{ fontSize: 10, color: '#736db3', marginLeft: 10 }}>HSR</Text>
            <View style={{ flexDirection: 'row', paddingVertical: 5, marginLeft: 10 }}>
                <MaterialCommunityIcons name="clock-time-four" size={25} color={'#736db3'} />
                <Text style={{ marginLeft: 5 }}>Within 25 mins </Text>
                <Entypo name="dot-single" size={25} color={'#736db3'} />
                <Text style={{ color: '#736db3' }}>Free Delivery</Text>
            </View>
            <View style={{ flexDirection: 'row', paddingVertical: 5, marginLeft: 10 }}>
                <Entypo name="trophy" size={25} color={'#ebb134'} />
                <Text style={{ marginLeft: 5 }}>3400+ products available here</Text>
            </View>
            <TouchableOpacity style={{ paddingVertical: 10 }}>
                <View style={{ backgroundColor: 'white', marginLeft: 15, marginTop: 10, marginRight: 15, flexDirection: 'row', paddingVertical: 10, paddingHorizontal: 10, alignContent: 'center', padding: 5, borderRadius: 10, alignItems: 'center', elevation: 3 }}>
                    <AntDesign name="search1" size={25} color={'grey'} />
                    <Text style={{ color: 'grey', marginLeft: 10 }}>Search for store/item</Text>
                </View>
            </TouchableOpacity>
            <ScrollView>
                <Divider/>
                <View style={{ marginTop: 15, paddingVertical: 10 }}>
                    <View style={{ flexDirection: 'row', paddingHorizontal: 10 }}>
                        <Text style={{ fontWeight: '800', fontSize: 15, flex: 5 }}>Best Sellers</Text>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 15, fontWeight: '800', color: '#736db3', flex: 10 }}>VIEW ALL</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{ marginTop: 20, marginLeft: 10 }}>
                        {
                            res.map((props, index) => {
                                return (
                                    <View style={{ margin:5, padding: 10, borderRadius: 5, elevation: 2, backgroundColor: 'white' }}>
                                        <Image source={{ uri: props.image }} style={{ height: width / 3.2, width: width / 3.2, borderRadius: 10, marginBottom: 7 }} />
                                        <Text style={{ width:  width / 3.2, fontWeight: 'bold' }} numberOfLines={1}>{props.name}</Text>
                                        <Text style={{ color: 'grey', fontSize: 10 }}>{props.gms} GMS</Text>
                                        <View style={{ flexDirection: 'row', paddingVertical: 5, alignItems: 'center' }}>
                                            <Text style={{ fontSize: 12, fontWeight: '800', flex: 5 }}>₹{props.price}</Text>
                                            <View style={{ width: 50, height: 30, flex: 10 }}><Add1 /></View>
                                        </View>
                                    </View>
                                );
                            })
                        }
                    </ScrollView>
                </View>
                <Divider/>
                <View style={{ paddingVertical: 5 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, paddingHorizontal: 10, paddingVertical: 10 }}>What are you looking for?</Text>
                    <View style={styles.container}>
                        {
                            res2.map((props, index) => {
                                return (
                                    <TouchableOpacity style={styles.items} onPress={()=>{navigation.navigate('GroceryMenu')}}>
                                        <Image style={styles.imagestyle, { height: 100, width: 100, borderRadius: 10 }} source={{ uri: props.image2 }} />
                                        <Text style={{ color: 'black', alignSelf: 'center', paddingVertical: 5 }}>{props.name2}</Text>
                                    </TouchableOpacity >
                                );
                            })
                        }
                    </View>
                </View>
                <View style={{ flexDirection: 'row', paddingHorizontal: 10 }}>
                    <Text style={{ fontWeight: '800', fontSize: 15, flex: 5 }}>Shops Near You</Text>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 15, fontWeight: '800', color: '#736db3', flex: 10 }}>VIEW ALL</Text>
                    </TouchableOpacity>
                </View>
                {
                            res3.map((props, index) => {
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
                                                style={{marginTop: 20, marginRight: 10}}
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
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    items: {
        width: width / 3,
        paddingVertical: 10,
        alignSelf:'center',
        paddingHorizontal: 15,
        alignContent: 'center',
        alignItems: 'center',
      },
});

export default Page2;
