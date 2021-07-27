/* eslint-disable quotes */
/* eslint-disable no-alert */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import MapView,{PROVIDER_GOOGLE,Marker } from 'react-native-maps';
import { PermissionsAndroid, Dimensions, Text, StyleSheet, Image, View } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
const { width, height } = Dimensions.get('screen');
const ASPECT_RATIO = width / height;
import Icon from 'react-native-vector-icons/Ionicons';

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
const GMap = (props) => {
    const [resObj, setResObj] = React.useState({});
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
                Geolocation.watchPosition(
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
                        timeout: 100,
                        maximumAge: 0,
                        distanceFilter: 0,
                    }
                );
                console.log({ location });
                client.send(JSON.stringify({...location,"rider_id":1,"type":"rider"}));
            } else {
                console.log('location permission denied');
                alert('Location permission denied');
            }
        }
        catch (err) {
            console.warn(err);
        }
    }
    const [location, setLocation] = React.useState({ latitude: 0, longitude: 0 });
    // props.getDataFromChild(location);
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
    }, []);
    return (
        <MapView
            customMapStyle={mapStyle}
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            showsUserLocation={true}
            region={{
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005}} >
                <Marker
                    coordinate={{
                    latitude: location.latitude,
                    longitude: location.longitude,
                }}>
                <Text style={{ backgroundColor: '#7952B3', paddingVertical: 5, borderRadius: 7, paddingHorizontal: 10, color: '#fff' }}><Icon name="pin-outline" size={15} color="white" style={ {marginRight:15}}/> You are here...</Text>
            </Marker>
            {/* {
                    resObj.hasOwnProperty("1") ?
                    resObj["1"].riders.map((res, index) => {
                        return (
                            <Marker
                                key={index}
                                coordinate={{ latitude: res.latitude, longitude: res.longitude }}>
                                <View>
                                    {
                                        console.log(resObj[1].image)
                                    }
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
                                    {
                                        console.log(resObj[2].image)
                                    }
                                    <Image style={{ width: 30, height: 30 }} source={{ uri: resObj[2].image }} />
                                </View>
                            </Marker>
                        );
                    }) : null
            } */}
            </MapView>
    );
};

export default GMap;

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
