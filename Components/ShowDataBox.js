import { View, Text } from 'react-native'
import React from 'react'
import styles from '../Style'

const ShowDataBox = ({lable,data}) => {
  return (
    <View style={styles.databox}>
      <Text style={styles.databoxT1}>{lable}</Text>
      <Text style={styles.databoxT2}>{data}</Text>
    </View>
  )
}

export default ShowDataBox