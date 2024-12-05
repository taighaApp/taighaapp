import React, { useState, useRef } from 'react';
import {
  Modal,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  FlatList,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window'); // Get screen width for slider

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const flatListRef = useRef(null); // Ref for FlatList

  const images = [
    require('../../assets/images/PropertiesImage/property-image.png'),
    require('../../assets/images/PropertiesImage/properties-inside.png'),
    require('../../assets/images/PropertiesImage/properties-showcase.png'),
    require('../../assets/images/PropertiesImage/property-image.png'),
    require('../../assets/images/PropertiesImage/properties-inside.png'),
  ];

  const openModal = (index) => {
    setSelectedIndex(index);
    setModalVisible(true);
    setTimeout(() => {
      // Ensure FlatList scrolls immediately to the selected index
      flatListRef.current?.scrollToIndex({ index, animated: false });
    }, 0); // Minimal delay to ensure the layout is ready
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedIndex(0);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {images.map((image, index) => (
          <TouchableOpacity key={index} onPress={() => openModal(index)}>
            <Image style={styles.image} source={image} />
          </TouchableOpacity>
        ))}
      </ScrollView>

      {modalVisible && (
        <Modal transparent={true} visible={modalVisible} animationType="none">
          <View style={styles.modalContainer}>
            <FlatList
              ref={flatListRef}
              data={images}
              keyExtractor={(item, index) => index.toString()}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              initialScrollIndex={selectedIndex} 
              getItemLayout={(data, index) => ({
                length: width,
                offset: width * index,
                index,
              })}
              renderItem={({ item }) => (
                <View style={styles.imageWrapper}>
                  {/* <Image style={styles.modalImage} source={item} /> */}
                </View>
              )}
            />
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: 300,
    height: 200,
    margin: 10,
    resizeMode: 'cover',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:1,
    borderColor:'green',
  },
  imageWrapper: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:10,

  },
  modalImage: {
    width: '90%',
    height: '70%',
    resizeMode: 'contain',
    
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#000',
    fontSize: 16,
  },
});
