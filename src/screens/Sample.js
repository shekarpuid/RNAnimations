import React, {memo} from 'react'
import { View, Text } from 'react-native'
import styles from '../Styles';

const Home = () => {
  return (
    <View style={[styles.flex1, styles.vhCenter]}>
      <Text>Home Screen</Text>
    </View>
  );
}

export default memo(Home)