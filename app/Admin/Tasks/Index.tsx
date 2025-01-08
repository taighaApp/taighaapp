import { View, Text, FlatList, TouchableOpacity, TextInput, StyleSheet, Dimensions,Image } from 'react-native';
import React, { useRef, useState } from 'react';
import { Swipeable } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ScrollView } from 'react-native-gesture-handler';

const { width, height: windowHeight } = Dimensions.get('window');

const taskData = [
  {
    id: '1',
    title: 'You Have Approved To Send A Vendor Out To Your Property. This is a longer description that should be hidden initially and displayed when Read More is clicked.',
    assigned: 'Krishna Regupathy',
    dueDate: 'Oct 06, 2024',
    status: 'Not Complete',
    Updated:'Oct 11 2024 01:37 AM -Jon',
    customer: 'C23639 : Customer : Test ticket please ignore',
  },
  {
    id: '2',
    title: '6. Listing Photos: If the house is clean & tidy while occupied, we can proceed with taking high-quality photos for listing purposes.',
    assigned: 'Krishna Regupathy',
    dueDate: 'Oct 06, 2024',
    status: 'Not Complete',
    Updated:'Oct 11 2024 01:37 AM -Jon',
    customer: 'C23639 : Customer : Test ticket please ignore',
  },
  {
    id: '3',
    title: 'You Have Approved To Send A Vendor Out To Your Property. This is a longer description that should be hidden initially and displayed when Read More is clicked.',
    assigned: 'Krishna Regupathy',
    dueDate: 'Oct 06, 2024',
    status: 'Not Complete',
    Updated:'Oct 11 2024 01:37 AM -Jon',
    customer: 'C23639 : Customer : Test ticket please ignore',
  },
  {
    id: '4',
    title: '6. Listing Photos: If the house is clean & tidy while occupied, we can proceed with taking high-quality photos for listing purposes.',
    assigned: 'Krishna Regupathy',
    dueDate: 'Oct 06, 2024',
    status: 'Not Complete',
    Updated:'Oct 11 2024 01:37 AM -Jon',
    customer: 'C23639 : Customer : Test ticket please ignore',
  },
];

export default function Index(props: any) {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredData, setFilteredData] = useState(taskData);
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const onChangeSearch = (text: string) => {
    setSearchQuery(text);
    const filtered = taskData.filter(item =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const toggleExpand = (id: string) => {
    setExpandedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const renderItem = ({ item }: any) => {
    const isExpanded = expandedItems[item.id] || false;
    const shortText = item.title.length > 50 ? `${item.title.substring(0, 50)}...` : item.title;

    return (
      <View style={styles.taskContainer}>
        {/* Title with Read More */}
        <Text style={styles.taskTitle}>
          {isExpanded ? item.title : shortText}
          {item.title.length > 50 && (
            <TouchableOpacity onPress={() => toggleExpand(item.id)}>
              <Text style={styles.readMoreText}>
                {isExpanded ? ' read Less' : ' read more'}
              </Text>
            </TouchableOpacity>
          )}
        </Text>

        {/* Customer */}
        <View style={{display:'flex',flexDirection:'row',marginBottom:10,}} >
        <Image
          source={require('../../../assets/images/admin/images/Tasks/tasks_tickets_image.png')}
          style={{
            width: 13,
            height: 13,
            marginRight:5,
            // tintColor: '#fff',
          }}
        />
        <Text style={styles.customerText}>{item.customer}</Text>
        </View>

        {/* Task Details */}
        <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}>
          
        <View style={styles.taskDetailsContainer}>
          <View style={styles.taskDetailsBox}>
            <Text style={styles.detailsLabel}>Assigned:</Text>
            <Text style={styles.detailsValue}>{item.assigned}</Text>
          </View>
          <View style={styles.taskDetailsBox}>
            <Text style={styles.detailsLabel}>Due Date:</Text>
            <Text style={styles.detailsValue}>{item.dueDate}</Text>
          </View>
          <View style={styles.taskDetailsBox}>
            <Text style={styles.detailsLabel}>Status:</Text>
            <Text style={styles.detailsValue}>{item.status}</Text>
          </View>
          <View style={styles.taskDetailsBox}>
            <Text style={styles.detailsLabel}>Updated:</Text>
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
          placeholder="Task Search"
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
  taskContainer: {
    backgroundColor: '#FFF',
    padding: 15,
    marginBottom: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    borderWidth:1,
    borderColor:'#EAEAEA',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 2,
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
  customerText: {
    fontSize: 14,
    color: '#000000',
    marginBottom: 8,
    fontFamily:'inter',
  },
  taskDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    fontWeight: 'bold',
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
  },
});
