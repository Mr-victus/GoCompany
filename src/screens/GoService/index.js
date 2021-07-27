/* eslint-disable no-sequences */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text,  ScrollView, Dimensions,View,Image,TouchableOpacity, StatusBar} from 'react-native';
import { Searchbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Divider } from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';

const {width ,height} = Dimensions.get('screen');
import Carousel,{ Pagination }  from 'react-native-snap-carousel';
const carouselItems = [
    {
        img_url: 'https://picsum.photos/600/450/?black',
        text: 'Best Offers @ 40% off',
        description: '10mins Away',
    },
    {
        img_url: 'https://picsum.photos/600/451/?black',
        text: 'Get Drinks @ 10% off',
        description: '10mins Away',
    },
    {
        img_url: 'https://picsum.photos/600/452/?black',
        text: 'Best Offers @ 40% off',
        description: '10mins Away',
    },
];
const _renderItem = ({ item, index }) => {
    return (
        <View style={{
            backgroundColor: 'white',
            borderRadius: 15,
            height: 150,
            width: width - 20,
            elevation: 5,
            marginTop: 10,
            }}>
            <Image
                style={{ height: 150, width: width - 20, borderRadius: 15 }}
                source={{ uri: item.img_url }}
            />
            <View style={{ position: 'absolute', bottom: 10, left: 20 }}>
                <Text style={{ fontSize: 20, textShadowColor: 'grey', textShadowOffset: { width: 1, height: 4 }, textShadowRadius: 5, color: 'white', fontWeight: 'bold' }}>{item.text}</Text>
                <Text style={{ textShadowColor: 'grey', textShadowOffset: { width: 1, height: 4 }, textShadowRadius: 5, color: 'white', fontWeight: 'bold', fontSize: 15, padding: 1 }}>{item.description}</Text>
            </View>
        </View>
    );
};
const item2 = [
    {
        image2: 'https://picsum.photos/200/309',
        name2: 'Service Category',
    },
    {
        image2: 'https://picsum.photos/301/300',
        name2: 'Service Category',
    },
    {
        image2: 'https://picsum.photos/307/319',
        name2: 'Service Category',
    },
    {
        image2: 'https://picsum.photos/331/329',
        name2: 'Service Category',
    },
    {
        image2: 'https://picsum.photos/331/309',
        name2: 'Service Category',
    },
    {
        image2: 'https://picsum.photos/321/379',
        name2: 'Service Category',
    },
    {
        image2: 'https://picsum.photos/311/329',
        name2: 'Service Category',
    },
    {
        image2: 'https://picsum.photos/301/329',
        name2: 'Service Category',
    },
    {
        image2: 'https://picsum.photos/221/329',
        name2: 'Service Category',
    },
    {
        image2: 'https://picsum.photos/201/349',
        name2: 'Service Category',
    },
    {
        image2: 'https://picsum.photos/201/325',
        name2: 'Service Category',
    },
    {
        image2: 'https://picsum.photos/309/315',
        name2: 'Service Category',
    },
];
const App = ({navigation}) => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    const [state, setState] = React.useState();
    const [res2, setRes2] = React.useState([]);
    React.useEffect(() => {
        setRes2(item2);
    }, []);
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#7952B3' barStyle="light-content"/>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                    <AntDesign name="arrowleft" size={25} color={'white'} style={{ marginLeft: 10 }} />
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
                <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
                    <View style={{ backgroundColor: '#fff', padding: 10 }}>
                        <Searchbar
                            placeholder="Search"
                            onChangeText={onChangeSearch}
                            value={searchQuery}
                            style={{ width: width - 40, marginLeft: 10, marginRight: 20 }}
                        />
                    </View>
                    <View style={{ backgroundColor: 'white' }}>
                        <View style={{ marginHorizontal: 10 }}>
                            <Carousel
                                layout={'default'}
                                autoplay={true}
                                loop={true}
                                data={carouselItems}
                                sliderWidth={width - 20}
                                itemWidth={width - 20}
                                renderItem={_renderItem}
                                onSnapToItem={(index) => setState(index)}
                            />
                            <Pagination
                                dotsLength={carouselItems.length}
                                activeDotIndex={state}
                                containerStyle={{}}
                                dotStyle={{
                                    width: 10,
                                    height: 5,
                                    borderRadius: 10,
                                    marginHorizontal: 8,
                                    backgroundColor: 'black',
                                }}
                                inactiveDotStyle={{
                                    // Define styles for inactive dots here
                                }}
                                inactiveDotOpacity={0.4}
                                inactiveDotScale={0.6}
                            />
                        </View>
                        <View style={styles.container2}>
                            {
                                res2.map((props, index) => {
                                    return (
                                        <TouchableOpacity style={styles.items} onPress={() => { navigation.navigate('GroceryMenu'); }}>
                                            <Image style={styles.imagestyle, { height: 100, width: 100, borderRadius: 10 }} source={{ uri: props.image2 }} />
                                            <Text style={{ color: 'black', alignSelf: 'center', paddingVertical: 5 }}>{props.name2}</Text>
                                        </TouchableOpacity >
                                    );
                                })
                            }
                        </View>
                        <Divider style={{ marginVertical: 10 }} />
                        <View style={{ padding: 10 }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Best Offers</Text>
                            <Text>Hygienic and single-use products |</Text>
                            <Text>low-contact services</Text>
                        </View>
                        <View style={styles.containers}>
                            <TouchableOpacity style={styles.itemm}>
                                <Image style={styles.imagestyle, { height: 100, width: 170, borderRadius: 10 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                <Text style={{ fontWeight: 'bold' }}>Salon for Women</Text>
                                <Text style={{ color: 'gray' }}>Up to 50% Off</Text>
                            </TouchableOpacity >
                            <TouchableOpacity style={styles.itemm}>
                                <Image style={styles.imagestyle, { height: 100, width: 170, borderRadius: 10 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                <Text style={{ fontWeight: 'bold' }}>Salon for Women</Text>
                                <Text style={{ color: 'gray' }}>Up to 50% Off</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.itemm}>
                                <Image style={styles.imagestyle, { height: 100, width: 170, borderRadius: 10 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                <Text style={{ fontWeight: 'bold' }}>Salon for Women</Text>
                                <Text style={{ color: 'gray' }}>Up to 50% Off</Text>
                            </TouchableOpacity >
                            <TouchableOpacity style={styles.itemm}>
                                <Image style={styles.imagestyle, { height: 100, width: 170, borderRadius: 10 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                <Text style={{ fontWeight: 'bold' }}>Salon for Women</Text>
                                <Text style={{ color: 'gray' }}>Up to 50% Off</Text>
                            </TouchableOpacity>
                        </View>
                        <Divider style={{ marginVertical: 10 }} />
                        <View style={{ marginHorizontal: 10 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 15 }}>Gift an Experience</Text>
                            <Text style={{ color: 'gray', marginLeft: 15 }}>Gift you loved ones an amazing UC</Text>
                            <Text style={{ color: 'gray', marginLeft: 15 }}>experience which they will remember</Text>
                            <Carousel
                                layout={'default'}
                                autoplay={true}
                                loop={true}
                                data={carouselItems}
                                sliderWidth={width}
                                itemWidth={width}
                                renderItem={_renderItem}
                                onSnapToItem={(index) => setState(index)}
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container2: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    items: {
        width: width / 3,
        paddingVertical: 10,
        alignSelf: 'center',
        paddingHorizontal: 15,
        alignContent: 'center',
        alignItems: 'center',
    },
    item: {
        width: width / 4.3,
    },
    containers: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    itemm: {
        width: width / 2,
        alignContent: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
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
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
        backgroundColor: 'white',
        paddingTop: 30,
    },
});

export default App;
