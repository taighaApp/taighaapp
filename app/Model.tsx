import React, { useState } from 'react';
import { View, Text, Button, Modal, StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const App = () => {
  // State to control modal visibility
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* Button to open the modal */}
      <Button
        title="Open Modal"
        onPress={() => setModalVisible(true)} // Open the modal
      />

      {/* Modal component */}
      <Modal
        animationType="slide"  // You can use "fade" or "none" for other animations
        transparent={true}  // Set to true to make the background semi-transparent
        visible={modalVisible}  // Control visibility via state
        onRequestClose={() => setModalVisible(false)} // Close modal on hardware back press (Android)
      >
        {/* Modal content */}
        <View style={[styles.modalView,{height:windowHeight/5}]}>
          <Text style={styles.modalText}>This is a Modal!</Text>

          {/* Close Button */}
          <Button
            title="Close Modal"
            onPress={() => setModalVisible(false)} // Close the modal
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'white',
    padding: 35,
    borderRadius: 10,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
