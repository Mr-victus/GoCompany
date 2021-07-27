/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable no-spaced-func */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import MapView,{PROVIDER_GOOGLE,Marker } from 'react-native-maps';
import { PermissionsAndroid, Dimensions, Text, StyleSheet, View, Image, Linking } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import MapViewDirections from 'react-native-maps-directions';
import { Button } from 'react-native-paper';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Dialog from "react-native-dialog";
const { width, height } = Dimensions.get('screen');
const mapKey = 'AIzaSyDrE9hEOn7dQiq91yLjM6Bq-kcVpMdyzIc';
const mapStyle = [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#ddb7fe"
            },
            {
                "visibility": "on"
            }
        ]
    }
];

const SearchPlace = ({ navigation }) => {
    const [location, setLocation] = React.useState({ latitude: 0, longitude: 0 });
    const [locationDest, setLocationDest] = React.useState({ status: false, latitude: 0, longitude: 0 });
    const [pickFieldStatus, setpickFieldStatus] = React.useState(false);
    const [dropFieldStatus, setdropFieldStatus] = React.useState(false);
    const [pickUpText, setPickUpText] = React.useState('Pick Up Location');
    const [dropText, setDropText] = React.useState('Drop Location');
    const [mainView, setMainView] = React.useState(true);
    const [visibleDialog, setVisibleDialog] = React.useState(false);
    const [confirmationStatus, setConfirmationStatus] = React.useState(false);
    const [trackingObj, setTrackingObj] = React.useState({ status: false, latitude: 0, longitude: 0 });
    const [resObj, setResObj] = React.useState({});
    function pointCurrentLocation() {
        Geolocation.getCurrentPosition(
                    position => {
                        setLocation({
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude,
                        });
                    },
                    error => {
                        console.log(error.message.toString());
                    },
                    {
                        enableHighAccuracy: true,
                        timeout: 15000,
                        maximumAge: 10000 ,
                    }
                );
    }
    // function bookRide() {
    //     var bodyFormData = new FormData();
    //     var originData = "("+location.latitude+","+location.longitude+")";
    //     bodyFormData.append('origin', originData);
    //     var destinationData = "("+locationDest.latitude+","+locationDest.longitude+")";
    //     bodyFormData.append('destination', destinationData);
    //     bodyFormData.append('ride_type_id', 1);
    //     bodyFormData.append('vehicle_id', 1);
    //     bodyFormData.append('customer_id', 1);
    //     axios.post(api_url.api_url+"book-ride", bodyFormData, {
    //     headers: {
    //         'Content-Type':'application/json'
    //     }
    //     },{withCredientials: true}).then(res => {
    //         if (res.data.status) {
    //             const client = new W3CWebSocket(ws_url.ws_url+"location/"+res.data.rider_id);
    //             client.onopen = () => {
    //                 console.log('socket connection succesfull');
    //                 client.send(JSON.stringify({'category':'customer','ride_id':res.data.ride_id+"",'rider_id':res.data.rider_id}) );
    //             };
    //             client.onmessage = function (event) {
    //                 var dataMsg = JSON.parse(event.data.replace(/\\/g, ""));
    //                 console.log({ dataMsg });
    //                 if (dataMsg.status == 1) {
    //                     setMainView(false);
    //                     setConfirmationStatus(true);
    //                 }
    //                 if (dataMsg.latitude && dataMsg.longitude ) {
    //                     setTrackingObj({ status: true, latitude: dataMsg.latitude, longitude: dataMsg.longitude });
    //                 }
    //             }
    //             client.onclose = function(event) {
    //                 console.log("disconnected");
    //             };
    //         }
    //         })
    //     .catch((error) => {
    //         console.log(error);
    //     });
    // }
    async function requestLocationPermission() {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                    {
                        'title': 'Example App',
                        'message': 'Example App access to your location',
                    }
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    pointCurrentLocation()
                    console.log({ location });
                    //client.send(JSON.stringify({...location,"rider_id":1,"type":"rider"}));
                } else {
                    console.log('location permission denied');
                    alert('Location permission denied');
                }
            }
            catch (err) {
                console.warn(err);
            }
    }
    async function setPickupLocation(data)
                    {
                    const result = await axios.get('https://maps.googleapis.com/maps/api/place/details/json?placeid='+data.place_id+'&key=AIzaSyDrE9hEOn7dQiq91yLjM6Bq-kcVpMdyzIc');
                    console.log("LOCATION HELA:",result.data.result.formatted_address)
                    setLocation({
                                latitude: result.data.result.geometry.location.lat,
                                longitude: result.data.result.geometry.location.lng,
                    });
                    setPickUpText(result.data.result.formatted_address);
    }
    async function setDestinationLocation(data)
                    {
                    const result = await axios.get('https://maps.googleapis.com/maps/api/place/details/json?placeid='+data.place_id+'&key=AIzaSyDrE9hEOn7dQiq91yLjM6Bq-kcVpMdyzIc');
                    console.log("LOCATION HELA:",result.data.result.geometry.location)
                    setLocationDest({
                                status:true,
                                latitude: result.data.result.geometry.location.lat,
                                longitude: result.data.result.geometry.location.lng,
                    });
                    setDropText(result.data.result.formatted_address);
    }
    const origin = { latitude: location.latitude, longitude: location.longitude };
    const destination = {latitude: locationDest.latitude, longitude: locationDest.longitude};
    React.useEffect(() => {
        requestLocationPermission();
        // var bodyFormData = new FormData();
        // var datax = "("+location.latitude+","+location.latitude+")";
        // bodyFormData.append('origin', datax);
        // axios.post(api_url.api_url+"get-riders", bodyFormData, {
        // headers: {
        //     'Content-Type':'application/json'
        // }
        // },{withCredientials: true}).then(res => {
        //     console.log(res.data);
        //     setResObj(res.data);
        //     })
        // .catch((error) => {
        //     console.log(error);
        // });
        },[]);
    return (
        <>
            <MapView
                customMapStyle={mapStyle}
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                showsUserLocation={false}
                region={{
                    latitude: location.latitude,
                    longitude: location.longitude,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005}} >
                {
                    resObj.hasOwnProperty("1") ?
                    resObj["1"].riders.map((res, index) => {
                        return (
                            <Marker
                                key={index}
                                coordinate={{ latitude: res.latitude, longitude: res.longitude }}>
                                <View>
                                    <Image style={{ width: 40, height: 40 }} source={{ uri: resObj[1].image }} />
                                </View>
                            </Marker>
                        );
                    }) : null
                }
                {
                    resObj.hasOwnProperty("2") ?
                        resObj["2"].riders.map((res, index) => {
                            return (
                                <Marker
                                    key={index}
                                    coordinate={{ latitude: res.latitude, longitude: res.longitude }}>
                                    <View>
                                        <Image style={{ width: 30, height: 30 }} source={{ uri: resObj[2].image }} />
                                    </View>
                                </Marker>
                            );
                        }) : null
                }
                {
                    trackingObj ?
                        <Marker
                            coordinate={{
                            latitude: trackingObj.latitude,
                            longitude: trackingObj.longitude,
                            }}>
                            <Image source={require ('../../assets/carRide.png')} style={{width: 50, height: 50}}/>
                        </Marker>
                        :
                        null
                }
                    <Marker
                            coordinate={{
                            latitude: location.latitude,
                            longitude: location.longitude,
                            }}>
                            <Image source={require ('../../assets/pick.png')} style={{width:30, height: 30}}/>
                        </Marker>
                        {
                            locationDest.status ?
                            <>
                            <Marker
                                coordinate={{
                                latitude: locationDest.latitude,
                                longitude: locationDest.longitude,
                                }}>
                                {/* <Text><Icon name="pin-outline" size={50} color="black"/></Text> */}
                                <Image source={require ('../../assets/drop.png')}  style={{width:30, height: 30}}/>
                            </Marker>
                            <MapViewDirections
                                    origin={origin}
                                    destination={destination}
                                    apikey={mapKey}
                                    strokeWidth={5}
                                    strokeColor="#7952B3"
                            />
                            </>
                            : null
                        }
            </MapView>
            {
                pickFieldStatus ?
                <GooglePlacesAutocomplete
                    fetchDetails={true}
                    autoFocus={true}
                    placeholder="Your Pickup Location"
                    onPress={(data, details = null) => {
                    //console.log(data);
                        setPickupLocation(data);
                        setpickFieldStatus(false);
                        setMainView(true);
                            }}
                    textInputProps={{
                        InputComp: Input,
                        autoFocus: true,
                        errorStyle: { color: 'red' },
                    }}
                onFail={(error) => console.error(error)}
                requestUrl={{
                url:
                    'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api',
                useOnPlatform: 'web',
                }}
                query={{
                    key: 'AIzaSyDrE9hEOn7dQiq91yLjM6Bq-kcVpMdyzIc',
                    language: 'en',
                    components: 'country:in',
                }} /> : null
            }
            {
                dropFieldStatus ?
                <GooglePlacesAutocomplete
                    focus
                    fetchDetails={true}
                    autoFocus={true}
                    placeholder="Your Destination Location"
                    onPress={(data, details = null) => {
                    //console.log(data);
                    setDestinationLocation(data);
                        setdropFieldStatus(false);
                        setMainView(true);
                            }}
                    textInputProps={{
                        InputComp: Input,
                        autoFocus: true,
                        errorStyle: { color: 'red' },
                    }}
                    onFail={(error) => console.error(error)}
                    requestUrl={{
                    url:
                        'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api',
                    useOnPlatform: 'web',
                    }}
                    query={{
                        key: 'AIzaSyDrE9hEOn7dQiq91yLjM6Bq-kcVpMdyzIc',
                        language: 'en',
                        components: 'country:in',
                    }} /> : null
            }
            {
                mainView ?
                    <View style={{ position: 'absolute', bottom: 0, width: width, justifyContent: 'space-evenly', paddingTop: 30, paddingHorizontal: 20, backgroundColor: '#ffffff', borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>
                        <View style={{ flex: 1, borderRadius: 15, marginBottom: 30 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <TouchableOpacity onPress={() => { setdropFieldStatus(false); setpickFieldStatus(true); setMainView(false); }} style={{ padding: 10, backgroundColor: 'whitesmoke', borderRadius: 15, width: width / 1.7 }}>
                                    <Text numberOfLines={1}>{pickUpText}</Text>
                                </TouchableOpacity>
                                <Button mode="flat" onPress={() => { pointCurrentLocation(); setPickUpText('Your Current Location') }}><Icon name="locate-outline" color="#7952B3" size={20} /> Current</Button>
                            </View>
                            <TouchableOpacity onPress={() => { setpickFieldStatus(false); setdropFieldStatus(true); setMainView(false); }} style={{ padding: 10, marginTop: 10, backgroundColor: 'whitesmoke', borderRadius: 15 }}>
                                <Text numberOfLines={1}>{dropText}</Text>
                            </TouchableOpacity>
                        </View>
                            {
                            locationDest.status ?
                                <ScrollView style={{ height: height / 4, backgroundColor: 'white' }} showsVerticalScrollIndicator={false}>
                                    <View style={{ paddingHorizontal: 10 }}>
                                        <Text style={{ fontWeight: 'bold', marginBottom: 20, fontSize: 20 }}>
                                            Choose Your Ride...
                                        </Text>
                                        <TouchableOpacity onPress={() => {
                                            setVisibleDialog(true);

                                        }} style={{ flexDirection: 'row', backgroundColor: 'whitesmoke', borderRadius: 15, marginVertical: 10, padding: 10 }}>
                                            <View style={{ alignItems: 'center', flex: 1 }}>
                                                <Image source={require('../../assets/suv.png')} style={{ width: 50, height: 30 }} />
                                                <Text style={{ fontSize: 10 }}>5min Away</Text>
                                            </View>
                                            <View style={{ marginLeft: 20, flex: 2 }}>
                                                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Mini</Text>
                                                <Text style={{ fontSize: 10 }}>Comfy, Economical Cars</Text>
                                            </View>
                                            <View style={{ flex: 1, alignContent: "center", alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}>
                                                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>₹120/-</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </ScrollView>
                                    : null
                            }
                        {
                            confirmationStatus ?
                                <ScrollView style={{ height: height / 3, backgroundColor: 'white' }} showsVerticalScrollIndicator={false}>
                                    <View style={{ paddingHorizontal: 10 }}>
                                                {
                                                    setLocationDest({status: false})
                                                }
                                                    <Text style={{ fontWeight: 'bold', marginBottom: 10, fontSize: 20 }}>
                                                        Your Rider is on the way...
                                                    </Text>
                                                    <Text style={{ fontWeight: 'bold', marginBottom: 20, fontSize: 15 }}>
                                                        Driver Name: John Doe
                                                    </Text>
                                                    <Button onPress={()=>{Linking.openURL(`tel:7205771278`)}}>Call the Driver</Button>
                                                </View>
                                </ScrollView>
                                : null
                        }
                    </View> : null
            }
            <Dialog.Container visible={visibleDialog}>
                <Dialog.Title style={{alignSelf: 'center'}}>Confirm Your Booking</Dialog.Title>
                <Dialog.Description>
                    <View style={{ flexDirection:'row', }}>
                        <Image source={require('../../assets/suv.png')} style={{ flex: 1,height: 50, width: 50, alignSelf: 'center' }} />
                        <View style={{flex: 1, margin:30}}>
                            <Text>Mini</Text>
                        </View>
                        <View style={{flex: 1, margin:30}}>
                            <Text>₹120/-</Text>
                        </View>
                    </View>
                </Dialog.Description>
                <Dialog.Button label="Cancel" onPress={()=>{setVisibleDialog(false);}} />
                <Dialog.Button label="Confirm" onPress={() => {
                    //bookRide();
                    setVisibleDialog(false);
                }} />
            </Dialog.Container>
        </>
    );
};

export default SearchPlace;

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
