import { View, Text } from 'react-native'
import React, { useState } from 'react'

function More() {
    const [isChecked, setChecked] = useState(false);
    const toggleCheckbox = () => setChecked(!isChecked);
    const [modalVisible, setModalVisible] = useState(false);
    return (
      <View style={{flex:1}}>
      </View>
    );
  }

export default More