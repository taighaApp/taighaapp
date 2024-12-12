import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, Dimensions, TextInput } from 'react-native'
import React, { useRef, useState } from 'react'
import { Swipeable } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
const {width,height: windowHeight} = Dimensions.get('window');

export default function Index( { props }:any) {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const swipeRefs = useRef<Record<string, Swipeable | null>>({});
 
    const autoHideSwaptext = (item:any)=>{
        // Automatically close the swipeable item after 1 second
        setTimeout(() => {
            const swipeable = swipeRefs.current[item?.id];
            if (swipeable) {
                swipeable.close();
            }
        }, 100);
    }

  // Handle swipe right
    const handleSwipeRight = (item:any) => {
        if (!item) return; 
        autoHideSwaptext(item);
        props();
    };
  
    // Handle swipe left
    const handleSwipeLeft = (item:any) => {
        if (!item) return;   
        autoHideSwaptext(item); 
    };

    // Render right swipe action
    const renderLeftActions = () => (
    <View style={[styles.actionContainer, styles.rightAction]}>
        <Text style={styles.actionText}>Swipe Right</Text>
    </View>
    );

    // Render right swipe action
    const renderRightActions = () => (
    <View style={[styles.actionContainer, styles.rightAction]}>
        <Text style={styles.actionText}>Swipe to Details Page</Text>
    </View>
    );

    function handlePresentModalPress() {
        throw new Error('Function not implemented.');
    }
    
       //  tickets data
  const ticketData = [
    {
      id: 1,
      name: "Krishna Regupathy",
      time: "12:04 PM",
      heading: "Dear Test Customer, this will ticket...",
      ticketId: "C24056",
      content: "198 NE, Form Ironcreek Terrace, Hill ... ",
      profileImage: require('../../../assets/images/dummy-1.jpg'),
      threadCount: 2,
      replyImage: require('../../../assets/images/admin/images/tickets/email-reply.png'),
      profileRead:true,
      readContent:true,
    },
    {
      id: 2,
      name: "Krishna Regupathy",
      time: "12:04 PM",
      heading: "Dear Test Customer, this will ticket...",
      ticketId: "C24056",
      content: "198 NE, Form Ironcreek Terrace, Hill ... ",
      profileImage: require('../../../assets/images/dummy-2.jpg'),
      threadCount: 6,
      replyImage: require('../../../assets/images/admin/images/tickets/email-reply.png'),
      profileRead:false,
      readContent:false,
    },
    {
      id: 3,
      name: "Krishna Regupathy",
      time: "12:04 PM",
      heading: "Dear Test Customer, this will ticket...",
      ticketId: "C24056",
      content: "198 NE, Form Ironcreek Terrace, Hill ... ",
      profileImage: require('../../../assets/images/dummy-3.jpg'),
      threadCount: 8,
      replyImage: require('../../../assets/images/admin/images/tickets/email-reply.png'),
      profileRead:true,
      readContent:true,
    },
    {
      id: 4,
      name: "Krishna Regupathy",
      time: "12:04 PM",
      heading: "Dear Test Customer, this will ticket...",
      ticketId: "C24056",
      content: "198 NE, Form Ironcreek Terrace, Hill ... ",
      profileImage: require('../../../assets/images/dummy-1.jpg'),
      threadCount: 10,
      replyImage: require('../../../assets/images/admin/images/tickets/email-reply.png'),
      profileRead:false,
      readContent:false,
    },
    {
      id: 5,
      name: "Krishna Regupathy",
      time: "12:04 PM",
      heading: "Dear Test Customer, this will ticket...",
      ticketId: "C24056",
      content: "198 NE, Form Ironcreek Terrace, Hill ... ",
      profileImage: require('../../../assets/images/dummy-1.jpg'),
      threadCount: 12,
      replyImage: require('../../../assets/images/admin/images/tickets/email-reply.png'),
      profileRead:true,
      readContent:true,
    },
    {
      id: 6,
      name: "Krishna Regupathy",
      time: "12:04 PM",
      heading: "Dear Test Customer, this will ticket...",
      ticketId: "C24056",
      content: "198 NE, Form Ironcreek Terrace, Hill ... ",
      profileImage: require('../../../assets/images/dummy-1.jpg'),
      threadCount: 12,
      replyImage: require('../../../assets/images/admin/images/tickets/email-reply.png'),
      profileRead:true,
      readContent:true,
    },
    {
      id: 7,
      name: "Krishna Regupathy",
      time: "12:04 PM",
      heading: "Dear Test Customer, this will ticket...",
      ticketId: "C24056",
      content: "198 NE, Form Ironcreek Terrace, Hill ... ",
      profileImage: require('../../../assets/images/dummy-1.jpg'),
      threadCount: 12,
      replyImage: require('../../../assets/images/admin/images/tickets/email-reply.png'),
      profileRead:true,
      readContent:true,
    },
    {
      id: 8,
      name: "Krishna Regupathy",
      time: "12:04 PM",
      heading: "Dear Test Customer, this will ticket...",
      ticketId: "C24056",
      content: "198 NE, Form Ironcreek Terrace, Hill ... ",
      profileImage: require('../../../assets/images/dummy-1.jpg'),
      threadCount: 12,
      replyImage: require('../../../assets/images/admin/images/tickets/email-reply.png'),
      profileRead:true,
      readContent:true,
    },
    {
      id: 9,
      name: "Krishna Regupathy",
      time: "12:04 PM",
      heading: "Dear Test Customer, this will ticket...",
      ticketId: "C24056",
      content: "198 NE, Form Ironcreek Terrace, Hill ... ",
      profileImage: require('../../../assets/images/dummy-1.jpg'),
      threadCount: 12,
      replyImage: require('../../../assets/images/admin/images/tickets/email-reply.png'),
      profileRead:true,
      readContent:true,
    },
    {
      id: 10,
      name: "Krishna Regupathy",
      time: "12:04 PM",
      heading: "Dear Test Customer, this will ticket...",
      ticketId: "C24056",
      content: "198 NE, Form Ironcreek Terrace, Hill ... ",
      profileImage: require('../../../assets/images/dummy-1.jpg'),
      threadCount: 12,
      replyImage: require('../../../assets/images/admin/images/tickets/email-reply.png'),
      profileRead:true,
      readContent:true,
    },
  ];

  const [filteredData, setFilteredData] = useState(ticketData);

  const onChangeSearch = (text:string)=>{
    setSearchQuery(text);

    if (text.trim() === "") {
      setFilteredData(ticketData); // Reset to original data if search is cleared
    } else {
      const filtered = ticketData.filter((item) =>
        item.name.toLowerCase().includes(text.toLowerCase()) // Case-insensitive search
      );
      setFilteredData(filtered);
    }
  }

  return (
    <View style={{marginTop:5}}>
        <View style={{}}>
              <TextInput
                style={styles.bottomSheetSearchInput}
                placeholder="Ticket Search"
                value={searchQuery}
                onChangeText={onChangeSearch}
                placeholderTextColor="#999"
              />
              <TouchableOpacity 
                onPress={() => setSearchQuery("")}
                style={styles.searchIcon}
              >
                <Icon name={searchQuery ? 'close' : 'search'} size={24} color="#666" />
              </TouchableOpacity>
            </View>
            {filteredData.length > 0 ?(
            <FlatList
            data={ticketData}
            keyExtractor={(item) => item.id.toString()} // Convert the id to string
            renderItem={({ item }) => (
            <Swipeable
            ref={(ref) => {
                if (ref) swipeRefs.current[item.id] = ref;
            }} // Save ref for each item
            renderLeftActions={renderLeftActions} // Right swipe action
            renderRightActions={renderRightActions} // Right swipe action
            onSwipeableLeftOpen={() => handleSwipeLeft(item)} // Triggered when swiped right
            onSwipeableRightOpen={() => handleSwipeRight(item)} // Triggered when swiped right
        >
            <TouchableOpacity onPress={props}>
                <View key={item.id} style={{marginTop:20,}}>
                <View style={{flexDirection:'row',margin:'auto',}}>
                <View style={{width:50,height:50,backgroundColor:'red',borderRadius:50,}}>
                    <Image  style={{width:'100%',height:'100%',backgroundColor:'red',borderRadius:50,}} source={item.profileImage}/>
                </View>

                <View style={{flexDirection:'column',justifyContent:'space-between',width: width-110,marginLeft:15,}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <Text style={[styles.profileNameBase, item.profileRead ? styles.profileNameRead : styles.profileNameUnread]}>{item.name}</Text>
                    <Text style={{fontFamily:'rubikLight',fontSize:13,letterSpacing:0.2}}>{item.time}</Text>
                    </View>

                    <View>
                    <Text style={[styles.readContentBase,item.readContent? styles.rearData: styles.unRearData ]} numberOfLines={1}>
                        {item.heading}
                    </Text>
                    </View>

                    <Text numberOfLines={2} style={{width:'80%',}}>
                        <Text style={{fontFamily:'rubikLight',color:'#767676',fontSize:16,lineHeight:19,letterSpacing:0.2}}>{item.ticketId}{` `}:</Text>
                        <Text style={{fontFamily:'rubikLight',fontSize:16,lineHeight:19,letterSpacing:0.2}}>{` `}Customer{` `}: </Text>
                        <Text style={{fontFamily:'rubikLight',fontSize:16,lineHeight:19,letterSpacing:0.2,color:'#242424'}}>
                        {item.content}
                        </Text>
                    </Text>

                    <View style={{ flexDirection:'row',position:'absolute',right:0,bottom:0 }}>
                    <Text style={styles.emailCount}>({item.threadCount})</Text>
                    <Image style={{width:20,height:20,}} source={item.replyImage}/>
                    </View>
                </View>
            </View>
            <View style={{borderColor:'#ECECEC',borderWidth:1,marginTop:20,marginLeft:85,width:width-110}}/>
            </View>
            </TouchableOpacity>
            </Swipeable>
            )}
            />
        ): (<Text>no Data found...</Text> )}
      </View>
  )
}

const styles = StyleSheet.create({
    actionContainer: {
        justifyContent: "center",
        alignItems: "center",
        width: 100,
        height: "100%",
      },
      rightAction: {
        backgroundColor: "#4CAF50",
      },
      actionText: {
        color: "#fff",
        fontWeight: "bold",
      },
      profileNameBase:{
        fontSize:17,
      },
      profileNameUnread:{
        fontFamily:'rubikMedium',
      },
      profileNameRead:{
        fontFamily:'rubikRegular',
      },
      readContentBase:{
        fontSize:17,
        letterSpacing:0.2,
        paddingBottom:5,
      },
      rearData:{
        fontFamily:'rubikLight',
      },
      unRearData:{
        fontFamily:'rubikMedium',
      },
      emailCount:{
        right:25,
        fontFamily:'rubikMedium',
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
        left: 10,
        top: 10,
      },
      searchResults: {
        flex: 1,
      },
})


