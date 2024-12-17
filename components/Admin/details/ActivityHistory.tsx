import { View, Text, Image, Dimensions, StyleSheet } from 'react-native'
import React from 'react'
  const {width,height} = Dimensions.get('window');
const ActivityHistory = ()=> {
  const activities = [
    {
      id: '1',
      date: 'May 11, 2024',
      time: '10:30 PM',
      content: (
        <Text>
          Customer : 1455 NW Overton St. - Property was created by 
          <Text style={{ fontWeight: "bold" }}> Prasanth Raju </Text>.
        </Text>
      ),
        image: require("../../../assets/images/dashboard/ticket_icon.png"),
    },
    {
      id: '2',
      date: 'May 04, 2024',
      time: '09:12 PM',
      content: (
        <Text>
          C : Customer - 111 Somerset Rd, Singapore 238 : Test mail kindly ignore - Mail was created by 
          <Text style={{ fontWeight: "bold" }}> Dinesh </Text>
          to Test Customer.
        </Text>
      ),
        image: require("../../../assets/images/dashboard/mail_icon.png"),
    },
    {
      id: '3',
      date: 'May 04, 2024', 
      time: '09:11 PM',
      content: (
        <Text>
          Customer : 1455 NW Overton St. - Property was created by 
          <Text style={{ fontWeight: "bold" }}> Prasanth Raju </Text>.
        </Text>
      ),
        image: require("../../../assets/images/dashboard/about_icon.png"),
    },
    {
      id: '4',
      date: 'May 04, 2024', 
      time: '09:11 PM',
      content: (
        <Text>
          Customer : 1455 NW Overton St. - Property was created by 
          <Text style={{ fontWeight: "bold" }}> Prasanth Raju </Text>.
        </Text>
      ),
        image: require("../../../assets/images/dashboard/about_icon.png"),
    },
    {
      id: '5',
      date: 'May 04, 2024', 
      time: '09:11 PM',
      content: (
        <Text>
          Customer : 1455 NW Overton St. - Property was created by 
          <Text style={{ fontWeight: "bold" }}> Prasanth Raju </Text>.
        </Text>
      ),
        image: require("../../../assets/images/dashboard/about_icon.png"),
    },
    {
      id: '6',
      date: 'May 04, 2024', 
      time: '09:11 PM',
      content: (
        <Text>
          Customer : 1455 NW Overton St. - Property was created by 
          <Text style={{ fontWeight: "bold" }}> Prasanth Raju </Text>.
        </Text>
      ),
        image: require("../../../assets/images/dashboard/about_icon.png"),
    },
    {
      id: '7',
      date: 'May 04, 2024', 
      time: '09:11 PM',
      content: (
        <Text>
          Customer : 1455 NW Overton St. - Property was created by 
          <Text style={{ fontWeight: "bold" }}> Prasanth Raju </Text>.
        </Text>
      ),
        image: require("../../../assets/images/dashboard/about_icon.png"),
    },
    
  ];
  return (
    <View style={{flex:1}}>
        <View style={{
          flexDirection:'row',
          alignItems:'flex-start',
          justifyContent:'space-between',
          width:width-40,
          height:45,
          // borderBottomWidth:1,
          margin:'auto',
        }}>
          <Text style={{fontFamily:'rubikLight',fontSize:17,letterSpacing:0.3,flex: 1, textAlign: 'center'}}>Activity (10)</Text>
          <Image style={{width:22,height:22}} source={require('../../../assets/images/admin/images/tickets/activity-filter.png')}/>
        </View>
        <View style={{
          width:width -40,
          height:0.2,
          borderBottomWidth:1,
          margin:'auto',
          borderColor:'#E2E2E2',
          backgroundColor: '#fff',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 2,
          }}/>
        
      <View>
          {/* Recent Activities Section */}
          <View style={{paddingHorizontal:20}}>
        <View style={styles.recentActivities}>
          {activities.map((activity, index) => (
            <View key={activity.id} style={styles.activityItem}>

              {/* Icon with Dotted Line */}
              <View style={styles.iconWithLine}>
                <View style={styles.imageContainer}>
                  <Image source={activity.image} style={styles.activityImage} />
                </View>
                {/* Dotted Line */}
                {index < activities.length - 1 && <View style={styles.dottedLine} />}
              </View>

              {/* Content */}
              <View style={styles.activityContent}>
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 15 }}>
                  <Text style={styles.activityDate}>{activity.date}</Text>
                  <Text style={styles.activityTime}>{activity.time}</Text>
                </View>
                <Text style={styles.activityDescription}>{activity.content}</Text>
              </View>
            </View>
          ))}
        </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  recentHeader: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    // marginBottom: 10,
    fontFamily:'inter',
  },
  recentActivities: {
    marginTop: 20,
    marginBottom:30,
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  activityItem: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  iconWithLine: {
    alignItems: "center",
  },
  activityImage: {
    width: 20,
    height: 20,
    color:'#fff',
  },
  dottedLine: {
    flex: 1,
    borderStyle: "dashed",
    borderWidth: 1,
    borderColor: "#000000",
    marginTop: 5, 
    marginRight:11,
  },
  activityContent: {
    flex: 1,
    marginTop:10,    
  },
  activityDate: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    fontFamily:'Rubik',
  },
  activityTime: {
    fontSize: 13,
    color: '#888',
    marginBottom: 4,
    fontFamily:'Rubik',
    fontWeight: '600',
  },
  imageContainer: {
    marginRight: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'#3366CC',
    width: 40,
    height: 40,
    borderRadius:50,
    borderWidth:3,
    borderColor:'#e0e7f7',
  },
  activityDescription: {
    fontSize: 14,
    color: '#000000',
    fontFamily:'rubik',
    lineHeight:20,
    letterSpacing:1,
  },
})

export default ActivityHistory;