import { SetStateAction, useState } from 'react';
import {
    Modal,
    Button,
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    Platform,
  } from 'react-native';

const BatchActionModel = () => {
    const [showModal, setShowModal] = useState(false);
  const [isChecked, setChecked] = useState(false);
  const [selectedAction, setSelectedAction] = useState(null);
  
  const handleActionPress = (action: any) => {
    setSelectedAction(action);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          console.log('Modal has been closed.');
        }}
      >
        {/* Semi-transparent background */}
        <TouchableOpacity
          style={styles.backdrop}
          activeOpacity={1}
          // onPress={() => setShowModal(false)} // Close modal on backdrop press
        >
          <View style={styles.modal}>
          {/* <View style={styles.indicator onPress={() => setShowModal(false)}} /> */}
          <TouchableOpacity onPress={() => setShowModal(false)}>
              <View style={styles.indicator} />
          </TouchableOpacity>

              <View style={styles.actionsContainer}>
              <TouchableOpacity
                style={[
                  styles.actionButton,
                  selectedAction === 'Favorite' && styles.selectedButton, // Apply selected style
                ]}
                onPress={() => handleActionPress('Favorite')}
              >
                <Text style={styles.actionText}>Favorite</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.actionButton,
                  selectedAction === 'Request Tour' && styles.selectedButton,
                ]}
                onPress={() => handleActionPress('Request Tour')}
              >
                <Text style={styles.actionText}>Request Tour</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.actionButton,
                  selectedAction === 'Ask a Question' && styles.selectedButton,
                ]}
                onPress={() => handleActionPress('Ask a Question')}
              >
                <Text style={styles.actionText}>Ask a Question</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.actionButton,
                  selectedAction === 'Start Offer' && styles.selectedButton,
                ]}
                onPress={() => handleActionPress('Start Offer')}
              >
                <Text style={styles.actionText}>Start Offer</Text>
              </TouchableOpacity>
            </View>

              <View style={styles.footer}>
                  <TouchableOpacity
                  style={styles.saveButton}
                  onPress={() => setShowModal(false)}
                  >
                  <Text style={styles.saveText}>Save</Text>
                  </TouchableOpacity>
              </View>

              
          </View>
        </TouchableOpacity>
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
    },
    backdrop: {
      flex: 1,
      backgroundColor: 'transparent',
      justifyContent: 'flex-end',
    },
    modal: {
      height: 'auto',
      backgroundColor: '#fff',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      paddingTop: 10,
      alignItems: 'center',
    },
    indicator: {
      width: 40, 
      height: 5,  
      backgroundColor: '#ccc', 
      borderRadius: 2.5,
      marginBottom: 15, 
    },
    actionsContainer: {
      width: '80%',
    },
    actionButton: {
      padding: 10,
      backgroundColor: '#F1F1F1',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent:'center',
      marginVertical: 2,
    },
    selectedButton: {
      backgroundColor: '#ADD8E6', 
    },
    actionText: {
      fontSize: 16,
      fontWeight: '500',
      textAlign:'right',
    },
    footer: {
      width: '100%',
      height:'auto',
      alignItems: 'center',
      marginTop: 20,
      backgroundColor: '#fff', 
      shadowColor: '#000', 
      shadowOffset: { width: 0, height: 2 }, 
      shadowOpacity: 0.2, 
      shadowRadius: 3.84, 
      elevation: 9, 
      justifyContent:'center',
      position: 'relative',
      overflow: 'visible',
      padding:Platform.OS=='ios'?20 :10,
    },
    saveButton: {
      width: '35%',
      padding: 11,
      backgroundColor: '#3366CC',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    saveText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'white',
    },
  
  });
export default BatchActionModel;