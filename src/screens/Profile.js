import React, {memo} from 'react'
import { View, Text } from 'react-native'
import styles from '../Styles';

const Profile = () => {
  return (
    <View style={[styles.flex1, styles.vhCenter]}>
      <Text>Profile Screen</Text>
    </View>
  );
}

export default memo(Profile)