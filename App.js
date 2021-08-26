import React from 'react';
import LottieView from 'lottie-react-native';

const App = () => {
 
  return <LottieView source={require('./assets/loader.json')} autoPlay loop />;
};


export default App;
