
import React, { useState } from 'react';
import {
  Modal,
  Button,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

const HalfScreenModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={true} // Make modal background transparent
          visible={showModal}
          onRequestClose={() => {
            console.log('Modal has been closed.');
          }}
        >
          {/* Semi-transparent background */}
      <Text>Model</Text>
        </Modal>

        {/* Button to open modal */}
        <Button
          title="Click To Open Modal"
          onPress={() => {
            setShowModal(true);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
});

export default HalfScreenModal;
