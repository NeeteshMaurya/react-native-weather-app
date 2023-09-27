import { StyleSheet } from "react-native";


module.exports = StyleSheet.create({
    droidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 35 : 0
      },
    container: {
      flex: 1,
    },
    homecontainer:{
      alignItems:'center',
      marginTop: 90,
    },
    datacontainer:{
      display:'flex',
      alignItems:'center'
    },
    datacontainer2:{
      flexDirection:'row'
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
    },
    primaryText: {
      margin: 20,
      fontSize: 28,
      textAlign:'center',
      color:'white'
    },
    cityname:{
      marginTop: 30,
      fontSize: 50,
      fontWeight:'bold',
      color:'white'
    },
    databox:{
      height: 105,
      width:135,
      backgroundColor: 'rgba(0,0,0, 0.6)',
      margin:33,
      alignItems:'center',
      justifyContent:'center',
      borderRadius:20
    },
    databoxT1:{
      fontWeight:'bold',
      fontSize:20,
      padding:5,
      color:'wheat'
    },
    databoxT2:{
      fontWeight:'bold',
      fontSize:15,
      color:'white',
      padding:5,
      textAlign:'center'
    }
  });
