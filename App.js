import React, {useState} from 'react';
import {
  Text,
  View,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

const App = () => {

  const [state, setstate] = useState(0)
  Geolocation.getCurrentPosition(data => {
    setstate(data.coords.latitude)
  })
  return (
  <View>
    <Text style={{fontSize:30}}> 
     latitude: {state}
    </Text>
  </View>
  )
};


export default App;
