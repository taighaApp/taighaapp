import { View, Text, Button, StyleSheet, TouchableOpacity, Pressable,SafeAreaView ,ImageBackground,Dimensions,Image,TextInput} from 'react-native';
import React, { useCallback, useRef ,useEffect} from 'react';
import { Link, useRouter } from 'expo-router';
import CustomBottomsheetModel from '@/components/common/CustomBottomsheetModel';
import { FAB } from 'react-native-paper';
import CustomBottomSheet from '@/components/common/CustomBottomSheet';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, {Circle,G,SvgProps,CircleProps,GProps,} from 'react-native-svg';
import { PieChart } from 'echarts/charts';
import { TitleComponent, TooltipComponent } from 'echarts/components';
import { SvgChart, SVGRenderer } from 'wrn-echarts';
import * as echarts from 'echarts/core';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';


// Ticket counts
const openTickets = 150;
const inProcessTickets = 42;
const completedTickets = 23;
const closedTickets = 80;


const totalTickets = openTickets + inProcessTickets + completedTickets + closedTickets;

// Calculate percentage for each ticket type
const openPercentage = (openTickets / totalTickets) * 100;
const inProcessPercentage = (inProcessTickets / totalTickets) * 100;
const completedPercentage = (completedTickets / totalTickets) * 100;
const closedPercentage = (closedTickets / totalTickets) * 100;


// Register ECharts Components
echarts.use([PieChart, TitleComponent, TooltipComponent, SVGRenderer]);

const E_HEIGHT = 115; // Match the height and width to the design
const E_WIDTH = 115;

function SvgComponent({ option }: { option: any }) {
  const svgRef = useRef<any>(null);

  useEffect(() => {
    let chart: any;
    if (svgRef.current) {
      chart = echarts.init(svgRef.current, 'light', {
        renderer: 'svg',
        width: E_WIDTH,
        height: E_HEIGHT,
      });
      chart.setOption(option);
    }
    return () => chart?.dispose();
  }, [option]);

  return <SvgChart ref={svgRef} />;
}
const percentage = 36; // Dynamic percentage value
  const option = {
    series: [
      {
        type: 'pie',
        radius: ['50%', '100%'], // Create a thin, donut-like appearance
        avoidLabelOverlap: false,
        silent: true,
        label: {
          show: false,
        },
        data: [
          { value: percentage, name: 'Completed', itemStyle: { color: '#25D2BD' } },
          { value: 100 - percentage, name: 'Remaining', itemStyle: { color: '#E5F8F5' } },
        ],
      },
    ],
  };

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const activities = [
    {
      id: '1',
      date: 'May 11, 2024',
      time: '10:30 PM',
      content:
        'C22541 : Customer : 10600 Wilshire Blvd, Los Angel - Test please ignore: Sale Pe - Ticket feedback mail was sent by Krishna Regupathy for Anu Customer.',
      icon: '📩',
    },
    {
      id: '2',
      date: 'May 04, 2024',
      time: '09:12 PM',
      content:
        'C : Customer - 111 Somerset Rd, Singapore 238 : Test mail kindly ignore - Mail was created by Dinesh to Test Customer.',
      icon: '✉️',
    },
    {
      id: '3',
      date: 'May 04, 2024',
      time: '09:11 PM',
      content:
        'Customer : 1455 NW Overton St. - Property was created by Prasanth Raju.',
      icon: '👤',
    },
  ];


const Dashboard = () => {
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const router = useRouter(); 


 const handlepress = useCallback(() => {
  bottomSheetModalRef.current?.present();
  console.log('Bottom sheet opened');
}, []);
 
  return (
    
        <LinearGradient
          colors={["#854BD0CC", "#3366CC"]}
          locations={[0, 0.5]}
          start={{ x: -0.3, y: 0.9}}
          end={{ x: 1, y: 0.5 }}
          style={styles.container}
        >
          {/* Search and Filter Section */}
          <SafeAreaView style={styles.headerContainer}>

      <View style={styles.searchContainer}>
        <View>
          <TouchableOpacity style={styles.menuButton}>
            <Ionicons name="menu" size={30} color="#FFFF" />
          </TouchableOpacity>
        </View>
        <View style={{ marginHorizontal:13,}}>
          <TextInput
            style={styles.searchInput}
            placeholder="Global Search"
            placeholderTextColor="#999"/>
        <TouchableOpacity style={styles.clearIconContainer}>
          <Ionicons name="search" size={20} color="#8C8C8C" style={{paddingTop:5}} />
        </TouchableOpacity>

        </View>
       <View>
       <TouchableOpacity style={styles.filterButton}>
            <Image
              source={require('../../assets/images/dashboard/header_plus.png')}
              style={{
                width: 30,
                height: 30,
                tintColor: '#fff',
              }}
            />
        </TouchableOpacity>
       </View>
       
       </View>

       <View style={styles.profileContainer}>
          {/* Greeting Text */}
          <View>
            <Text style={styles.profileName}>Hi, Krishna</Text>
          </View>

          {/* Profile Image */}
          <View>
            <Image
              source={require('../../assets/images/homesearch/icon/Krishna.png')}
              style={styles.profileImage}
            />
          </View>
        </View>

        </SafeAreaView>

        <CustomBottomSheet initialIndex={2}>
          
        <View >
        {/* <ScrollView> */}

      {/* Horizontal Scroll Section for Cards */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.horizontalScroll}
      >
        {/* Properties Card */}
        <TouchableOpacity>
        <View style={styles.card}> 
          <ImageBackground
            source={require('../../assets/images/dashboard/dashboard_properties_image.png')} 
            style={styles.cardBackground}
          >
            <Text style={styles.cardTitle}>Properties</Text>
            <Text style={styles.cardNumber}>3</Text>
          </ImageBackground>
        </View>
        </TouchableOpacity>
        

        {/* Documents Card */}
        <TouchableOpacity>
        <View style={styles.card}>
          <ImageBackground source={require('../../assets/images/dashboard/dashboard_document_image.png')} style={styles.cardBackground}>
            <Text style={styles.cardTitle}>Document</Text>
            <Text style={styles.cardNumber}>999</Text>
          </ImageBackground>
        </View>
        </TouchableOpacity>
        
        {/* Mails Card */}
        <TouchableOpacity>
        <View style={styles.card}>
          <ImageBackground
            source={require('../../assets/images/dashboard/dashboard_mails_image.png')} 
            style={styles.cardBackground}
          >
            <Text style={styles.cardTitle}>Mails</Text>
            <Text style={styles.cardNumber}>68</Text>
          </ImageBackground>
        </View>
        </TouchableOpacity>

        {/* Mails Card */}
        <TouchableOpacity>
        <View style={styles.card}>
          <ImageBackground
            source={require('../../assets/images/dashboard/dashboard_task_image.png')} 
            style={styles.cardBackground}
          >
            <Text style={styles.cardTitle}>Tasks</Text>
            <Text style={styles.cardNumber}>267</Text>
          </ImageBackground>
        </View>
        </TouchableOpacity>
      </ScrollView>
      
      <View style={styles.supportTickets}>
        <Text style={styles.headerText}>Support Tickets (219)</Text>

        {/* Tickets Section */}
        <View style={styles.ticketsSection}>
            <View style={{flexDirection:'row'}}>
                {/* Open Ticket */}
                <View style={styles.ticketBox}>
                <Image source={require('../../assets/images/dashboard/open_image.png')}  style={styles.openiconImage}/>
                    <Text style={styles.ticketTitle}>Open</Text>
                    <Text style={styles.ticketNumber}>{openTickets}</Text>
                </View>

                {/* In-Process Ticket */}
                <View style={styles.ticketBox}>
                <Image source={require('../../assets/images/dashboard/inprogress_image.png')}  style={styles.openiconImage}/>
                    <Text style={styles.ticketTitle}>In-Process</Text>
                    <Text style={styles.ticketNumber}>{inProcessTickets}</Text>
                </View>

                {/* Completed Ticket */}
                <View style={styles.ticketBox}>
                <Image source={require('../../assets/images/dashboard/completed_image.png')}  style={styles.openiconImage}/>
                    <Text style={styles.ticketTitle}>Completed</Text>
                    <Text style={styles.ticketNumber}>{completedTickets}</Text>
                </View>

                {/* Closed Ticket */}
                <View style={styles.ticketBox}>
                <Image source={require('../../assets/images/dashboard/closed_image.png')}  style={styles.openiconImage}/>
                    <Text style={styles.ticketTitle}>Closed</Text>
                    <Text style={styles.ticketNumber}>{closedTickets}</Text>
                </View>
                    </View>

                {/* Progress Bar */}
                <View style={styles.underlineContainer}>
                <View style={styles.progressBar}>
                <View
                  style={[
                    styles.underlineSegment,
                    { width: `${openPercentage}%`, backgroundColor: '#23BECE' }, // Blue for Open
                  ]}
                />
                <View
                  style={[
                    styles.underlineSegment,
                    { width: `${inProcessPercentage}%`, backgroundColor: '#FFD700' }, // Yellow for In-Process
                  ]}
                />
                <View
                  style={[
                    styles.underlineSegment,
                    { width: `${completedPercentage}%`, backgroundColor: '#4CAF50' }, // Green for Completed
                  ]}
                />
                <View
                  style={[
                    styles.underlineSegment,
                    { width: `${closedPercentage}%`, backgroundColor: '#B0B0B0' }, // Grey for Closed
                  ]}
                />
              </View>
        </View>
        </View>
        {/* Multi-Colored Underline */}
        {/* Full Card Underline */}
        
      </View>


      {/* support content */}
      <View style={styles.piechartcontainer}>
          <View style={styles.cardContainer}>
          <View style={styles.chartContainer}>
            <SvgComponent option={option} />
            <View style={styles.textContainer}>
              <Text style={styles.percentageText}>{`${percentage}%`}</Text>
            </View>
          </View>
          <Text style={styles.subtitle}>Task Completed</Text>
          <Text style={styles.taskCount}>150</Text>
        </View>
        
        <TouchableOpacity>
        <View style={styles.cardContainer}> 
        <Image source={require('../../assets/images/dashboard/customer_service.png')}  style={styles.customerService}/>
        <Text style={styles.customerContent}>Open New {'\n'}Support Ticket</Text>
        </View>
        </TouchableOpacity>
      </View>
      {/*  */}

        {/* Recent Activities Section */}
        <View style={styles.recentActivities}>
                <Text style={styles.recentHeader}>Recent Activities</Text>
                {activities.map((activity) => (
                <View key={activity.id} style={styles.activityItem}>
                    <View style={styles.iconContainer}>
                    <Text style={styles.activityIcon}>{activity.icon}</Text>
                    </View>
                    <View style={styles.activityContent}>
                    <Text style={styles.activityDate}>{activity.date}</Text>
                    <Text style={styles.activityTime}>{activity.time}</Text>
                    <Text style={styles.activityDescription}>{activity.content}</Text>
                    </View>
                </View>
                ))}
            </View>
            {/* </ScrollView> */}
    </View>
        </CustomBottomSheet> 
       {/* fixed create button */}
        </LinearGradient>


    
  );
};


const styles = StyleSheet.create({
  progressBar: {
    flexDirection: 'row', // This ensures the progress bars are on the same line
    width: '100%',
    height: 20, // Set a height for the progress bar
    borderRadius: 10, // Rounded corners
  },
    piecard: {
        width: 150,
        height: 180,
        backgroundColor: 'white',
        borderRadius: 16,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5, // Shadow for Android
        shadowColor: '#000', // Shadow for iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
      },
      pieContainer: {
        marginBottom: 10,
      },
      taskText: {
        color: '#8c8c8c',
        fontSize: 14,
        fontWeight: '600',
        textAlign: 'center',
      },
      taskNumber: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000',
      },
  // container: {
  //   // flex: 1,
  //   backgroundColor: '#FFFFFF',
  //   // padding: 16,
  // },
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'red',
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'semibold',
    color: '#00',
    marginBottom: 16,
  },
  horizontalScroll: {
    marginBottom: 20,
    marginHorizontal:6,
  },
  card: {
    width:100,
    height: 122,
    overflow: 'hidden', 
    // marginRight: 10,
    // marginHorizontal:6,
  },
  cardBackground: {
    flex: 1,
    justifyContent: 'flex-start',
    // alignItems: 'center',
    // borderWidth:1,
    padding:8,
  },
  // backgroundImageStyle: {
  //   borderRadius: 8, // Makes the background image corners match the card
  // },
  cardTitle: {
    fontSize: 13,
    color: '#fff',
    fontWeight: 'bold',
    marginTop:13,
    marginLeft:10,

  },
  cardNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft:10,

  },
  ticketsSection: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 16,
    width: '100%',
    height:120,
    backgroundColor: '#fff',
    borderRadius: 20,
    alignItems: 'center',
    padding: 18,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    // borderWidth:1,
  },
//   underline:{
//     borderWidth:54,
//   },
  openiconImage:{
    width:35,
    height:35,
    marginBottom:5,
  },
  ticketBox: {
    alignItems:'center',
    // borderWidth:1,
    marginRight:25,
  },
  ticketTitle: {
    fontSize: 12,
    fontWeight:'medium',
    color: '#AEAEAE',
  },
  ticketNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressCard: {
    width: '47%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    elevation: 2,
  },
  progressTitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 8,
  },
  progressNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  newTicketCard: {
    width: '47%',
    backgroundColor: '#3b82f6',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  newTicketImage: {
    width: 40,
    height: 40,
    marginBottom: 8,
  },
  newTicketText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  supportTickets:{
    // padding:20,
    paddingHorizontal:20,
  },
  underlineContainer: {
    flexDirection: 'row',
    height: 5,
    // borderRadius:50,    
    marginTop: 8,
    width: '100%',
    borderBottomLeftRadius:100,
    borderBottomRightRadius:100,
    // margin:'auto',
    overflow: 'hidden',
    borderColor:'#fff',
    // borderWidth:1,
  },
  underlineSegment: {
    height: '100%',
  },
  piechartcontainer:{
    paddingHorizontal:20,
    display:'flex',
    flexDirection:'row',
  },
  piechartCard:{
    width:165,
    height:205,
    marginRight:20,
    borderRadius:20,
    padding:25,
    alignItems:'center',
    backgroundColor:'#FFFFFF',
    elevation: 4,
    shadowColor: 'red',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 9 },
  },
  customerService:{
    width:110,
    height:110,
    marginBottom:12,
    justifyContent:'center',
  },
  customerContent:{
    fontSize:12,
    fontWeight:'medium',
    color:'4C4C4C',
    alignItems:'flex-end',
  },
  recentActivities: {
    marginTop: 20,
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  recentHeader: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 16,
  },
  activityItem: {
    flexDirection: 'row',
    marginBottom: 16,
    alignItems: 'flex-start',
  },
  iconContainer: {
    marginRight: 12,
  },
  activityIcon: {
    fontSize: 24,
  },
  activityContent: {
    flex: 1,
  },
  activityDate: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  activityTime: {
    fontSize: 12,
    color: '#888',
    marginBottom: 4,
  },
  activityDescription: {
    fontSize: 14,
    color: '#555',
  },
  // 
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    marginRight:20,
    width:165,
    height:205,
    elevation: 1, // Add subtle shadow
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  chartContainer: {
    position: 'relative',
    height: E_HEIGHT,
    width: E_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  percentageText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#36CFC9',
  },
  subtitle: {
    fontSize: 14,
    color: '#8c8c8c',
    marginTop: 8,
    textAlign: 'center',
  },
  taskCount: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 4,
    textAlign: 'center',
  },
  headerContainer: {
    // backgroundColor: '#fff',
    // paddingTop: 40,
    marginTop:50,
    borderBottomColor: '#ddd',
  },
  searchContainer: {
    width: SCREEN_WIDTH,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    marginBottom: 17,
    paddingHorizontal:20,
  },
  menuButton: {
    width:40,
    height:40,
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 8,
    backgroundColor: '#3366CC',
    borderWidth:.5,
    borderColor:'#EAEAEA',
  },
  searchInput: {
    //20+40+15+20+40+15= 150
    width: SCREEN_WIDTH - 150,
    height: 40,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#EAEAEA',
    borderRadius: 8,
    paddingVertical: 11,
    paddingHorizontal: 12,
    color: '#333',
  },
  clearIconContainer: {
    position: "absolute",
    right: 10,
    padding: 5,
  },
  clearIcon: {
    fontSize: 18,
    color: "#999",
  },
  filterButton: {
    width:40,
    height:40,
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 8,
    backgroundColor:'#2E5CB8',
    // borderWidth: 1,
    // borderColor: '#EAEAEA',
  },
  profileContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    paddingHorizontal: 20,
    marginVertical: 10, 
  },
  profileName: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
    letterSpacing: 1.5,
  },
  profileImage: {
    width: 62,
    height: 62,
    borderWidth: 2,
    borderRadius: 31, 
    borderColor: '#fff',
  },



});

export default Dashboard;

