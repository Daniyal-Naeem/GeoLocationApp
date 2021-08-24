import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  PermissionsAndroid
} from 'react-native';
//import Geolocation from 'react-native-geolocation-service';
import GeolocationExample from './GeoLocation'

const App = () => {

  // const requestLocationPermission = async () => {
  //   try {
  //     const granted = await PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  //       {
  //         title: "App Location Permission",
  //         message:
  //           "This App needs access to your Location ",
  //         buttonNeutral: "Ask Me Later",
  //         buttonNegative: "Cancel",
  //         buttonPositive: "OK"
  //       }
  //     );
  //     return granted === PermissionsAndroid.RESULTS.GRANTED
     
  //   } catch (err) {
  //     console.warn(err);
  //     return false
  //   }
  // };

  // const [state, setState] = useState(0)

  // const getLocation = async ()=>{
  //   const status = await requestLocationPermission()
  //   if (status){
  //     Geolocation.getCurrentPosition(data => {
  //       setState(data.coords.latitude.toString() + "," + data.coords.longitude.toString())
  //     })
      
  //   }
  // }
  // useEffect(() =>{
  //   getLocation()
  // }, [])

  return (
    <GeolocationExample/>
  // <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }} >
  //   <Text style={{fontSize:30}}> 
  //    latlong: {state}
  //   </Text>
  // </View>
  )
};


export default App;
