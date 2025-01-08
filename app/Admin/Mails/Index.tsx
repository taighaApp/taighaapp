import { View, Text, FlatList, TouchableOpacity, TextInput, StyleSheet, Dimensions,Image, Modal } from 'react-native';
import React, { useRef, useState } from 'react';
import { Swipeable } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height: windowHeight } = Dimensions.get('window');

const MailsData = [
  {
    id: '1',
    assigned: 'Dev Support',
    dueDate: 'Low',
    status: 'Not Complete',
    Updated:'Oct 07 2024 at 04:18 AM - Anu Customer',
    customer: 'C : Customer -  Seattle, #1245558 : Test mail kindly ignore one',
    profileImage: require('../../../assets/images/admin/images/Mails/mails_krishna_image.png'),
    name:'Krishna Regupathy',
    time:'12:04 PM',
  },  

  {
    id: '2',
    assigned: 'Dev Support',
    dueDate: 'Medium',
    status: 'Not Complete',
    Updated:'Oct 07 2024 at 04:18 AM - Anu Customer',
    customer: 'C : Customer - 10600 Highland Springs Ave, Be : Test mail kindly ignore',
    profileImage: require('../../../assets/images/admin/images/Mails/mails_krishna_image.png'),
    name:'Krishna Regupathy',
    time:'12:01 PM',
  },
];

export default function Index(props: any) {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredData, setFilteredData] = useState(MailsData);
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const onChangeSearch = (text: string) => {
    setSearchQuery(text);
    const filtered = MailsData.filter(item =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filtered);
  };  

  const toggleExpand = (id: string) => {
    setExpandedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const [isExpanded, setIsExpanded] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  const renderItem = ({ item }: any) => {
    const isExpanded = expandedItems[item.id] || false;
    // const shortText = item.title.length > 50 ? `${item.title.substring(0, 50)}...` : item.title;

    return (
      
      <View style={styles.mailsContainer}>
     
        {/* Customer */}
        
        <View style={{flexDirection:'row'}}>
        {/* <Image
          source={require('../../../assets/images/Mails/mails_krishna_image.png')}
          style={{
            width: 50,
            height: 50,
            marginRight:10,
          }}
        /> */}
        <Image source={item.profileImage} style={styles.profileImage} />
          <View style={{flex:1}}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={styles.customername}>{item.name}</Text>
            <Text style={styles.customertime}>{item.time}</Text>
            </View>
            <Text style={styles.customerText}>{item.customer}</Text>
          </View>
        </View>

        {/* Task Details */}
        <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}>
          
        <View style={styles.taskDetailsContainer}>
          <View style={styles.taskDetailsBox}>
            <Text style={styles.detailsLabel}>Group :</Text>
            <Text style={styles.detailsValue}>{item.assigned}</Text>
          </View>
          <View style={styles.taskDetailsBox}>
            <Text style={styles.detailsLabel}>Priority :</Text>
            <Text style={styles.detailsValue}>{item.dueDate}</Text>
          </View>
          <View style={styles.taskDetailsBox}>
            <Text style={styles.detailsLabel}>Updated :</Text>
            <Text style={styles.detailsValue}>{item.Updated}</Text>
          </View>
        </View>
        </ScrollView>
      </View>
    );
  };

  return (
    
    <View style={{ marginTop: 5, flex: 1 }}>
      {/* Search Input */}
      <View style={{ marginHorizontal: 10, marginBottom: 30}}>
        <TextInput
          style={styles.bottomSheetSearchInput}
          placeholder="Mails Search"
          value={searchQuery}
          onChangeText={onChangeSearch}
          placeholderTextColor="#999"
        />
        <TouchableOpacity onPress={() => setSearchQuery("")} style={styles.searchIcon}>
          <Icon name={searchQuery ? 'close' : 'search'} size={24} color="#666" />
        </TouchableOpacity>
      </View>

      {/* Task List */}
      <FlatList
        data={filteredData}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mailsContainer: {
    backgroundColor: '#FFF',
    // padding: 15,
    // paddingHorizontal:15,
    // borderWidth:1,
    paddingVertical:12,
    marginBottom: 20,
    marginHorizontal: 10,
    borderRadius: 10,
    borderColor:'#EAEAEA',
    borderBottomWidth:1,
    objectFit:'cover',
  },
  taskTitle: {
    fontSize: 16,
    marginBottom: 8,
    color: '#000000',
    fontFamily:'interRegular',
    alignItems:'center',
  },
  readMoreText: {
    color: '#007BFF',
    fontSize: 16,
    fontFamily:'interRegular',
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center',
  },
  profileImage:{
    width: 50,
    height: 50,
    marginRight:10,
  },
  customerText: {
    fontSize: 14,
    color: '#000000',
    marginBottom: 15,
    fontFamily:'rubikLight',
  },
  customername:{
    fontSize: 17,
    color: '#000000',
    marginBottom: 8,
    fontFamily:'rubikRegular',
  },
  customertime:{
    fontSize: 13,
    color: '#000000',
    // marginBottom: 8,
    fontFamily:'rubikLight',
  },
  taskDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom:20,
  },
  taskDetailsBox: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    borderWidth:1,
    borderColor:'#EAEAEA',
    borderRadius:5,
    paddingVertical:5,
    paddingHorizontal:10,
    marginRight:11,
  },
  detailsLabel: {
    fontSize: 13,
    color: '#000000',
    fontFamily:'rubikRegular',
  },
  detailsValue: {
    fontSize: 13,
    color: '#000000',
    fontFamily:'rubikLight',

  },
  bottomSheetSearchInput: {
    height: 40,
    backgroundColor: '#F9F9F9',
    borderWidth: 1,
    borderColor: '#EAEAEA',
    borderRadius: 30,
    paddingHorizontal: 10,
    paddingLeft: 40,
    fontSize: 16,
  },
  searchIcon: {
    position: 'absolute',
    left: 20,
    top: 8,
    marginRight:10,
  },
});
