//app/admin/tickets/tasklist


import { View, Text, Dimensions, Image, StyleSheet } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');

const TaskList = () => {
    const taskdata = [
        {
            id:1,
            content:'You Have Approved To Send A Vendor Out To Your Property',
            ticketImage:require('../../../assets/images/admin/images/tickets/ticket-block.png'),
            role:'C23639 : Customer : Test ticket please ignore',
            dataRole:'Response: ',
            dataResponce:'N/A',
            externalLink:require('../../../assets/images/admin/images/tickets/external-link-1.png'),
            assignTo:'Assigned To:',
            assignName:'Krishna Regupathy',
            dueDateLabel:'Due Date:',
            dueDate:'Oct 06, 2024',
            statusLabel:'Status',
            status:'Not Completed',
            updatedLabel:'Updated',
            updated:'Oct 11 2024 01:37 AM - John',
        },
        {
            id:2,
            content:'You Have Approved To Send A Vendor Out To Your Property',
            ticketImage:require('../../../assets/images/admin/images/tickets/ticket-block.png'),
            role:'C23639 : Customer : Test ticket please ignore',
            dataRole:'Response: ',
            dataResponce:'N/A',
            externalLink:require('../../../assets/images/admin/images/tickets/external-link-1.png'),
            assignTo:'Assigned To:',
            assignName:'Krishna Regupathy',
            dueDateLabel:'Due Date:',
            dueDate:'Oct 06, 2024',
            statusLabel:'Status',
            status:'Not Completed',
            updatedLabel:'Updated',
            updated:'Oct 11 2024 01:37 AM - John',
        },
        {
            id:3,
            content:'You Have Approved To Send A Vendor Out To Your Property',
            ticketImage:require('../../../assets/images/admin/images/tickets/ticket-block.png'),
            role:'C23639 : Customer : Test ticket please ignore',
            dataRole:'Response: ',
            dataResponce:'N/A',
            externalLink:require('../../../assets/images/admin/images/tickets/external-link-1.png'),
            assignTo:'Assigned To:',
            assignName:'Krishna Regupathy',
            dueDateLabel:'Due Date:',
            dueDate:'Oct 06, 2024',
            statusLabel:'Status',
            status:'Not Completed',
            updatedLabel:'Updated',
            updated:'Oct 11 2024 01:37 AM - John',
        },
        {
            id:4,
            content:'You Have Approved To Send A Vendor Out To Your Property',
            ticketImage:require('../../../assets/images/admin/images/tickets/ticket-block.png'),
            role:'C23639 : Customer : Test ticket please ignore',
            dataRole:'Response: ',
            dataResponce:'N/A',
            externalLink:require('../../../assets/images/admin/images/tickets/external-link-1.png'),
            assignTo:'Assigned To:',
            assignName:'Krishna Regupathy',
            dueDateLabel:'Due Date:',
            dueDate:'Oct 06, 2024',
            statusLabel:'Status',
            status:'Not Completed',
            updatedLabel:'Updated',
            updated:'Oct 11 2024 01:37 AM - John',
        },
        {
            id:5,
            content:'You Have Approved To Send A Vendor Out To Your Property',
            ticketImage:require('../../../assets/images/admin/images/tickets/ticket-block.png'),
            role:'C23639 : Customer : Test ticket please ignore',
            dataRole:'Response: ',
            dataResponce:'N/A',
            externalLink:require('../../../assets/images/admin/images/tickets/external-link-1.png'),
            assignTo:'Assigned To:',
            assignName:'Krishna Regupathy',
            dueDateLabel:'Due Date:',
            dueDate:'Oct 06, 2024',
            statusLabel:'Status',
            status:'Not Completed',
            updatedLabel:'Updated',
            updated:'Oct 11 2024 01:37 AM - John',
        },
        {
            id:6,
            content:'You Have Approved To Send A Vendor Out To Your Property',
            ticketImage:require('../../../assets/images/admin/images/tickets/ticket-block.png'),
            role:'C23639 : Customer : Test ticket please ignore',
            dataRole:'Response: ',
            dataResponce:'N/A',
            externalLink:require('../../../assets/images/admin/images/tickets/external-link-1.png'),
            assignTo:'Assigned To:',
            assignName:'Krishna Regupathy',
            dueDateLabel:'Due Date:',
            dueDate:'Oct 06, 2024',
            statusLabel:'Status',
            status:'Not Completed',
            updatedLabel:'Updated',
            updated:'Oct 11 2024 01:37 AM - John',
        },
        {
            id:7,
            content:'You Have Approved To Send A Vendor Out To Your Property',
            ticketImage:require('../../../assets/images/admin/images/tickets/ticket-block.png'),
            role:'C23639 : Customer : Test ticket please ignore',
            dataRole:'Response: ',
            dataResponce:'N/A',
            externalLink:require('../../../assets/images/admin/images/tickets/external-link-1.png'),
            assignTo:'Assigned To:',
            assignName:'Krishna Regupathy',
            dueDateLabel:'Due Date:',
            dueDate:'Oct 06, 2024',
            statusLabel:'Status',
            status:'Not Completed',
            updatedLabel:'Updated',
            updated:'Oct 11 2024 01:37 AM - John',
        },
        {
            id:8,
            content:'You Have Approved To Send A Vendor Out To Your Property',
            ticketImage:require('../../../assets/images/admin/images/tickets/ticket-block.png'),
            role:'C23639 : Customer : Test ticket please ignore',
            dataRole:'Response: ',
            dataResponce:'N/A',
            externalLink:require('../../../assets/images/admin/images/tickets/external-link-1.png'),
            assignTo:'Assigned To:',
            assignName:'Krishna Regupathy',
            dueDateLabel:'Due Date:',
            dueDate:'Oct 06, 2024',
            statusLabel:'Status',
            status:'Not Completed',
            updatedLabel:'Updated',
            updated:'Oct 11 2024 01:37 AM - John',
        },
        {
            id:9,
            content:'You Have Approved To Send A Vendor Out To Your Property',
            ticketImage:require('../../../assets/images/admin/images/tickets/ticket-block.png'),
            role:'C23639 : Customer : Test ticket please ignore',
            dataRole:'Response: ',
            dataResponce:'N/A',
            externalLink:require('../../../assets/images/admin/images/tickets/external-link-1.png'),
            assignTo:'Assigned To:',
            assignName:'Krishna Regupathy',
            dueDateLabel:'Due Date:',
            dueDate:'Oct 06, 2024',
            statusLabel:'Status',
            status:'Not Completed',
            updatedLabel:'Updated',
            updated:'Oct 11 2024 01:37 AM - John',
        },
        {
            id:10,
            content:'You Have Approved To Send A Vendor Out To Your Property',
            ticketImage:require('../../../assets/images/admin/images/tickets/ticket-block.png'),
            role:'C23639 : Customer : Test ticket please ignore',
            dataRole:'Response: ',
            dataResponce:'N/A',
            externalLink:require('../../../assets/images/admin/images/tickets/external-link-1.png'),
            assignTo:'Assigned To:',
            assignName:'Krishna Regupathy',
            dueDateLabel:'Due Date:',
            dueDate:'Oct 06, 2024',
            statusLabel:'Status',
            status:'Not Completed',
            updatedLabel:'Updated',
            updated:'Oct 11 2024 01:37 AM - John',
        },
        
    ]

  return (
    <View style={styles.taskContainer}>
       <View style={styles.headingConntainer}>
          <Text style={styles.mainHeading}>Task List (10)</Text>
        </View>

        <View style={styles.headingborder}/>
        {taskdata.map((data)=>(
        <View style={styles.taskHeader}> 
            <View key={data.id} style={styles.taskWrapper}>
                <Text style={styles.taskContent}>{data.content}</Text>

                <View style={styles.roleContainer}>
                    <Image style={{width:13,height:13,}} source={data.ticketImage}/>
                    <Text style={styles.t_role}>{data.role}</Text>
                </View>
                        <ScrollView 
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={styles.listContainer}>
                            <View style={styles.list}>
                                <Text style={styles.t_heading}>{data.dataRole}</Text>
                                <View style={{flexDirection:'row',justifyContent:'space-between',paddingRight:5,}}>
                                    <Text style={styles.t_Responce}> {data.dataResponce}</Text>
                                    <Image style={styles.externalLink} source={data.externalLink}/>
                                </View>
                            </View>
                            <View style={styles.list}>
                                <Text style={styles.t_heading}>{data.assignTo}</Text>
                                <Text style={styles.t_Responce}>{data.assignName}</Text>
                            </View>
                            <View style={styles.list}>
                                <Text style={styles.t_heading}>{data.dueDateLabel}</Text>
                                <Text style={styles.t_Responce}>{data.dueDate}</Text>
                            </View>
                            <View style={styles.list}> 
                                <Text style={styles.t_heading}>{data.statusLabel}</Text>
                                <Text style={styles.t_Responce}>{data.status}</Text>
                            </View>
                            <View style={styles.list}>
                                <Text style={styles.t_heading}>{data.updatedLabel}</Text>
                                <Text style={styles.t_Responce}>{data.updated}</Text>
                            </View>
                        </ScrollView>
            </View>
        </View>
                ))}
    </View>
  )
}

const styles= StyleSheet.create({
    taskContainer:{
        flex:1,
    },
    mainHeading:{
        fontFamily:'rubikLight',
        fontSize:17,
        letterSpacing:0.3,
        flex: 1, 
        textAlign: 'center'
      },
      headingConntainer:{
        flexDirection:'row',
        alignItems:'flex-start',
        justifyContent:'space-between',
        width:width-40,
        height:45,
        // borderBottomWidth:1,
        margin:'auto',
    },
    headingborder:{
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
        },
        taskHeader:{
            borderWidth:1,
            borderColor:'#EAEAEA',
            marginHorizontal:20,
            marginTop:26,
            borderRadius:6,
            shadowColor: "black",
            shadowOffset: {width: 0, height: 3},
            backgroundColor: 'white',
            shadowOpacity: 0.2,
            shadowRadius: 5,
            elevation: 0,
        },
        taskWrapper:{
            marginTop:13,
            marginLeft:14,
            marginBottom:17
        },
        taskContent:{
            fontSize:16,
            fontFamily:'interRegular',
            lineHeight:22,
            letterSpacing:0.2
        },
    t_heading:{
        fontFamily:'rubikRegular',
        fontSize:13,
        letterSpacing:0.2,
        lineHeight:22,
    },
    t_Responce:{
        fontFamily:'rubikLight',
        fontSize:13,
        letterSpacing:0.2,
        lineHeight:22,
    },
    list:{
        // alignItems:'center',
        // justifyContent:'space-between',
        borderWidth:1,
        borderColor:'#EAEAEA',
        marginRight:10,
        borderRadius:6,
        paddingHorizontal:10,
        paddingVertical:5,
    },
    listContainer:{
        flexDirection:'row',
        marginTop:10,
    },
    t_role:{
        fontSize:14,
        fontFamily:'interLight',
        lineHeight:22,
        letterSpacing:0.4,
        marginLeft:5,
    },
    roleContainer:{
        marginTop:5,
        flexDirection:'row',
        alignItems:'center',
    },
    externalLink:{
        width:18,
        height:18,
    },


})
export default TaskList