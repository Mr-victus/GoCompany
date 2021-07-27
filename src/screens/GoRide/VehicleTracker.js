/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import MapView,{PROVIDER_GOOGLE,Marker,AnimatedRegion} from 'react-native-maps';
import { View, PermissionsAndroid, Platform, Dimensions } from 'react-native';
import Geolocation from "react-native-geolocation-service";

const { width, height } = Dimensions.get('screen');

const VehicleTracker = () => {
    async function requestLocationPermission() {
        try {
            const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                'title': 'Example App',
                'message': 'Example App access to your location '
            }
            )
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
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
                    showLocationDialog: true,
                    enableHighAccuracy: true,
                    timeout: 20000,
                    maximumAge: 0
                }
            );
            console.log({ location });
            } else {
            console.log("location permission denied")
            alert("Location permission denied");
            }
        } 
        catch (err) {
            console.warn(err)
        }
    }
    const [location, setLocation] = React.useState({ latitude: 0, longitude: 0 });
    const [track, setTrack] = React.useState({
        latitude: 20.3356285,
        longitude: 85.7909664,
    });
    React.useEffect(() => {
        requestLocationPermission();
        navigator.geolocation.watchPosition(
            position => {
            console.log(position);
            const { latitude, longitude } = position.coords;
                setTrack({ latitude:latitude, longitude:longitude })
            }, 
                error => console.log(error),
            { 
                enableHighAccuracy: true,
                timeout: 20000,
                maximumAge: 1000,
                distanceFilter: 10
            }
            );
    }, []);
    
    return (
        <View style={{flex:1}}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={{flex:1}}
                region={{
                    latitude: location.latitude,
                    longitude: location.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421}}>
                <MapView.OverlayComponent
                    style={{position: “absolute”, bottom: 50}}>
                        <View style={{padding: 15, backgroundColor: '#fff', width: width, height: 300, position: 'absolute'}}>

                        </View>
                    </MapView.OverlayComponent>
                
                <Marker
                    coordinate={{
                    latitude: location.latitude,
                    longitude: location.longitude,
                    }}>
                </Marker>
            </MapView>
        </View>
    );
};

export default VehicleTracker;

