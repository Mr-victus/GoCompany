/* eslint-disable space-infix-ops */
/* eslint-disable jsx-quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
import React,{useEffect} from 'react';
import {
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import changeNavigationBarColor from 'react-native-navigation-bar-color';


const Root = ({ navigation }) => {
    useEffect(() => {
        changeNavigationBarColor('#7952B3', true);
    });
    // const { colors } = useTheme();
    
    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#fff' barStyle="dark-content"/>
            <View style={styles.header}>
                <Animatable.Image 
                    animation="bounceIn"
                    duraton="1500"
                    source={require('../assets/headerLogo.png')}
                    style={styles.logo2}
                    resizeMode="cover"/>
                <Animatable.Image 
                    animation="bounceIn"
                    duraton="1500"
                    source={require('../assets/us.gif')}
                    style={styles.logo}
                    resizeMode="stretch"/>
        </View>
        <Animatable.View 
            style={[styles.footer]}
            animation="fadeInUpBig">
            <View style={styles.button}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('SignInScreen');
                        //navigation.navigate('User');
                        changeNavigationBarColor('white', true);
                    }
                    }>
                <LinearGradient
                    colors={['#7952B3', '#7952B3']}
                    style={styles.signIn}
                >
                    <Text style={styles.textSign}>Let's Get Started</Text>
                    <MaterialIcons 
                        name="navigate-next"
                        color="#fff"
                        size={20}
                        
                    />
                </LinearGradient>
            </TouchableOpacity>
            </View>
        </Animatable.View>
      </View>
    );
};

export default Root;

const {height,width} = Dimensions.get("screen");
const height_logo = height * 0.1;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff'
  },
  header: {
      flex: 20,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#7952B3',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 20,
      paddingHorizontal: 30,
      elevation: 5
  },
  logo: {
      width: width-(width/4),
      height: width-(width/4)
    },
  logo2: {
      width: width-(width/2),
      height: 70,
      marginVertical:50
  },
  title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',
      marginTop:5
  },
    button: {
      alignItems: 'flex-end',
      marginTop: 0
  },
  signIn: {
      width: width-(width/7),
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row',
  },
  textSign: {
      color: '#ffffff',
      fontWeight: 'bold'
  }
});

