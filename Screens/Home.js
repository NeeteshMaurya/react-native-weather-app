import { View, Text, TextInput, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import styles from '../Style'
import { MaterialCommunityIcons,EvilIcons } from '@expo/vector-icons';
import SearchBar from '../Components/SearchBar';
import ShowDataBox from '../Components/ShowDataBox';
import weatherConditions from '../Components/WeatherCondition'



const Home = ({weatherData, fetchWeatherData}) => {
  const { weather,name,main: { temp, humidity },wind: { speed }} = weatherData;
  const [input, setInput] = useState('')
  
    
  if(weather[0].main == 'Clouds'){
    var bg= require('../assets/Clouds.gif')
  }
  if(weather[0].main == 'Rain'){
    var bg= require('../assets/Rain.gif')
  }
  if(weather[0].main == 'Clear'){
    var bg= require('../assets/Clear.gif')
  }
  if(weather[0].main == 'Snow'){
    var bg= require('../assets/Snow.gif')
  }
  if(weather[0].main == 'Thunderstorm'){
    var bg= require('../assets/Thunderstorm.gif')
  }
  if(weather[0].main == 'Drizzle'){
    var bg= require('../assets/Drizzle.gif')
  }
  if(weather[0].main == 'Haze'){
    var bg= require('../assets/Haze.gif')
  }
  if(weather[0].main == 'Mist'){
    var bg= require('../assets/Mist.gif')
  }

  return (
    <View style={styles.container}>
      <View style={styles.homecontainer}>
        <MaterialCommunityIcons
            size={112}
            name={'weather-rainy'}
            color={'#fff'}
          />
        <SearchBar fetchWeatherData={fetchWeatherData} />
      </View>
      {weatherData !== null ?
        <View style={styles.datacontainer}>
          <Text style={styles.cityname}>{name}</Text>
          <MaterialCommunityIcons color={"white"} size={50} name={weatherConditions[weather[0].main].icon} />
          <Text style={{color:'white',marginBottom:10}}>{weatherConditions[weather[0].main].title+',' +weatherConditions[weather[0].main].subtitle}</Text>
          <ImageBackground  source={bg} style={{width:'100%',borderRadius:80, overflow: 'hidden'}}>
            <View style={styles.datacontainer2}>
              <ShowDataBox lable={'Temperature'} data={temp+'°C'} />
              <ShowDataBox lable={'Description'} data={weather[0].main} />
            </View>
            <View style={styles.datacontainer2}>
              <ShowDataBox lable={"Wind"} data={`${speed} Mile/Sec`} />
              <ShowDataBox lable={'Humidity'} data={humidity+'%'} />
            </View>
          </ImageBackground>
        </View> 
        :<Text></Text>
      }
    </View>
  )
}

export default Home