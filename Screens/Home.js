import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import styles from '../Style'
import { MaterialCommunityIcons,EvilIcons } from '@expo/vector-icons';
import SearchBar from '../Components/SearchBar';
import ShowDataBox from '../Components/ShowDataBox';
import weatherConditions from '../Components/WeatherCondition'



const Home = ({weatherData, fetchWeatherData}) => {
  const { weather,name,main: { temp, humidity },wind: { speed }} = weatherData;
  const [input, setInput] = useState('')
  // const [{ main }] = weather;
  

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
          <Text style={{color:'white'}}>{weatherConditions[weather[0].main].title+',' +weatherConditions[weather[0].main].subtitle}</Text>
          <View style={styles.datacontainer2}>
            <ShowDataBox lable={'Temperature'} data={temp+'°C'} />
            <ShowDataBox lable={'Description'} data={weather[0].main} />
          </View>
          <View style={styles.datacontainer2}>
            <ShowDataBox lable={"Wind"} data={`${speed} Mile/Sec`} />
            <ShowDataBox lable={'Humidity'} data={humidity+'%'} />
          </View>
        </View> 
        :<Text></Text>
      }
    </View>
  )
}

export default Home