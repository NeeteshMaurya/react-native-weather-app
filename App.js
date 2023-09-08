import {Text, View,ActivityIndicator } from 'react-native';
import React, { useState, useEffect} from 'react'
import { SafeAreaView } from 'react-native';
import Home from './Screens/Home';
import styles from './Style'
import { LinearGradient } from "expo-linear-gradient";
import SearchBar from './Components/SearchBar';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const API_KEY = '22260a5c8436c890ecca683a9c88fbc7'

export default function App() {
  const [weatherData, setWeatherData] = useState(null);
    const [loaded, setLoaded] = useState(true);
    console.log(weatherData)
    async function fetchWeatherData(cityName) {
        setLoaded(false);
        const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
        try {
            const response = await fetch(API);
            if(response.status == 200) {
                const data = await response.json();
                setWeatherData(data);
            } else {
                setWeatherData(null);
            }
            setLoaded(true);
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchWeatherData('Pratapgarh');
    }, [])
    

    if(!loaded) {
        return (
          // <SafeAreaView style={styles.droidSafeArea}>
            <LinearGradient 
              colors={['#ff0084','#33001b']}
              start={{ x: 0, y:0.3 }}
              end={{ x: 0, y: 1 }}
              style={{height:'100%'}}>
                <ActivityIndicator color='gray'  size={36} />
            </LinearGradient>
          // </SafeAreaView>

        )
    }

    else if(weatherData === null) {
        return (
          // <SafeAreaView style={styles.droidSafeArea}>
            <LinearGradient 
            colors={['#ff0084','#33001b']}
            start={{ x: 0, y:0.3 }}
            end={{ x: 0, y: 1 }}
            style={{height:'100%'}}>
              <View style={{marginTop:90,alignItems:'center'}}>
                <MaterialCommunityIcons
                  size={112}
                  name={'weather-rainy'}
                  color={'#fff'}
                />
                <SearchBar fetchWeatherData={fetchWeatherData}/>
                <Text style={styles.primaryText}>City Not Found! Try Different City</Text>
              </View>
            </LinearGradient>
          // </SafeAreaView>
        )
    }

  return (
    // <SafeAreaView style={styles.droidSafeArea}>
      <LinearGradient 
      colors={['#ff0084','#33001b']}
      start={{ x: 0, y:0.3 }}
      end={{ x: 0, y: 1 }}
      style={{height:'100%'}}>
        <Home weatherData={weatherData} fetchWeatherData={fetchWeatherData} />
      </LinearGradient>
    // </SafeAreaView>
  );
}


