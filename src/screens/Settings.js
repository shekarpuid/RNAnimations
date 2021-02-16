import React, {memo} from 'react'
import { View, Text } from 'react-native'
import styles from '../Styles';

const Settings = () => {
  return (
    <View style={[styles.flex1, styles.vhCenter]}>
      <Text>Settings Screen</Text>
    </View>
  );
}

export default memo(Settings)