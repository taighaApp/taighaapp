import { View, Text, StyleSheet, Image, Dimensions, Button } from 'react-native'
import React from 'react'
const {width,height}= Dimensions.get('window');
const ReplyCard = () => {

    const handleReplyClick = ()=>{
        alert('Reply Click');
    }

  return (
    <View style={styles.mailContainer}>
       <View style={{height:56,alignItems:'center',justifyContent:'center',borderBottomWidth:1,borderColor:'#ECECEC',}}>
            <Text style={styles.emailText}>Email Messages (1)</Text>
        </View>
        <View style={{paddingHorizontal:10, }}>
            <View style={{flexDirection:'row',marginTop:15,width:'100%',}}>
                <Image style={{width:50,height:50,borderRadius:50,}} source={require('../../../assets/images/homesearch/icon/Krishna.png')}/>
                    <View style={{flexDirection:'column',justifyContent:'space-between',marginLeft:10,width:width-120}}>
                        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
                            <Text style={{fontFamily:'interSemiBold',fontSize:16,fontWeight:'bold',}}>Krishna Regupathy</Text>
                            <Text style={{fontFamily:'rubikLight',fontSize:16,letterSpacing:0.2}}>12:04 PM</Text>
                        </View>
                            <Text style={{fontFamily:'rubikLight',fontSize:16,letterSpacing:0.2,}}>staff3@krishnarealty.com</Text>
                        <View style={{flexDirection:'row',}}>
                            <Text style={{color:'#6A6A6A',fontFamily:'rubikLight',fontSize:15,letterSpacing:0.2,marginTop:5,lineHeight:19,}}>Cc:-</Text>
                            {/* <Text style={{fontFamily:'rubikLight',fontSize:16,letterSpacing:0.2,marginTop:5,lineHeight:19,}}>staff3@krishnarealty.com</Text> */}
                        </View>
                        <Text style={{color:'#3366CC',textAlign:'right',fontFamily:'rubikLight',fontSize:13,letterSpacing:0.2,marginTop:5,lineHeight:19,}}>(3 People were notified)</Text>
                    </View>
            </View>
            <View>
                <Text style={{fontFamily:'rubikLight',marginTop:10,fontSize:17,letterSpacing:0.2,lineHeight:25,}}>
                To provide exceptional service, we have already taken proactive steps by contacting a vendor/technician to assess the problem. Rest assured, we are closely monitoring the situation to expedite the repair process. If you have preferred vendors you would like to work with, please provide their contact details, and we are more than happy to reach out to them. Our goal is to resolve this issue as swiftly as possible, and we are committed to accommodating your preference to expedite the process.
                Per your maintenance information for this property, we have contacted & provided pre-approved repairs up to $280.00 for parts and labor for a vendor. 
                </Text>
            </View>
            <Button title='View More / Reply' onPress={ handleReplyClick }/>
        </View>
    </View>
  )
}

const styles =StyleSheet.create({
    mailContainer:{
        paddingBottom:38,
        marginVertical: 4,
        borderWidth: 0.1,
        borderRadius: 8,
        shadowColor: "#3366CC",
        shadowOffset: {width: 0, height: 3},
        backgroundColor: 'white',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 2,
      },
    emailText:{
        textAlign:'center',
        fontFamily:'rubikSemiBold',
        fontSize:17,
        letterSpacing:0.2,
    },
})

export default ReplyCard