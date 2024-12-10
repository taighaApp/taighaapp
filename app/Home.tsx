import Buttons from '@/components/common/Buttons';
import { useRouter } from 'expo-router';
import { Button, Dimensions, Image, ImageBackground, Linking, Platform, Pressable, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Dots from '../components/common/Dots';

const height = Dimensions.get('screen').height
export default function Home(){
    const router = useRouter();

    const logIn = () => {
        // console.log('Log In button pressed');
        router.push('/Login');
    };
      const signUp = () => {
        router.push('/Signup');
      };
    //   const model = () => {
    //     router.push('/Model');
    //   };

    return(
    <View style={styles.container}>
        <ImageBackground style={styles.loginLogoTest} source={require('../assets/images/home-bg.png')}/>

        <View style={styles.logoContainer}>
            <Image style={styles.loginLogo} source={require('../assets/images/login-logo.png')}
            />
            <Text style={styles.logoText}>A True All-In-One Real Estate Platform</Text>
        </View>
        
        <Dots pageType={'Home'}/>

        <View style={styles.btnContainer}>
            <Buttons
                title="Log In"
                size="half"
                // borderRadius={8}
                backgroundColor="#3366cc"
                textColor="#FFF"
                marginBottom={10}
                // borderColor="#3366cc"
                fontSize={21}
                isTag={false}
                onPress={logIn}
            />
                    
            <Buttons
                title="Sign Up"
                size="half"
                // borderRadius={8}
                backgroundColor="#fff"
                textColor="#3366cc"
                borderColor="#3366cc"
                marginTop={10}
                fontSize={21}
                isTag={true}
                onPress={signUp}
            />

        </View>
    </View>

)
}

const styles = StyleSheet.create({
    container:{
        backgroundColor :'#fff',
        position:'relative',
        height:'100%',
        width:'100%'
    },
    logoContainer:{
        width:'100%',
        alignItems:'center',
        position:'absolute',
        top:100,
        zIndex:9,
    },
    loginLogoTest:{ 
        width:'100%',
        height:height,
        objectFit:'contain',        
        position:Platform.OS === 'ios' ? 'absolute' : 'relative',
        top:Platform.OS === 'ios' ? 0 : 0
    },
    loginLogo:{
        width:175,
        height:60,
        objectFit:'contain',
        marginBottom:30
    },
    logoText:{
        color:'#fff',
        fontSize:20,
        fontWeight:'semibold',
        fontFamily:'LatoRegular'
    },
    btnContainer: {
        width: '100%',
        position: 'absolute',
        zIndex: 1,
        bottom: Platform.OS === 'ios' ? 40 : 20,
    },
})
